import './App.css';
import { Route, Routes } from "react-router-dom"


import Home from './components/Home/Home';
import Allspend from './components/Allspend/Allspend';
import Newspend from './components/Newspend/Newspend';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
    <Routes> 
    <Route path='/' element={<Home/>} />
    <Route path='/allspend' element={<Allspend/>}/>
    <Route path='/newspend' element={<Newspend/>}/>
    <Route path='/login' element={<Login/>}/>
    


    </Routes>

    </div>
  );
}

export default App;
