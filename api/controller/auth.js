const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const User = require("../models/User");

exports.register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        const user = await newUser.save();
        const token = jwt.sign({ id: user._id, email: user.email}, process.env.JWT);

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ user: user._doc, token: token })
    } catch (err) {

    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400).json({error: "User not found!"})
        }

        const isPassword = await bcrypt.compare(req.body.password, user.password)
        if (!isPassword){
            res.status(400).json({error: "Password not found!"})
        }

        const token = jwt.sign({ id: user._id, email: user.email}, process.env.JWT);

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ user: user._doc, token: token })
    } catch (err) {

    }
}
