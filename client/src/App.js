import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path = "/" element = {<Homepage/>}/>
      <Route path = "/login" element = {<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
