import './App.css';
import { Route, Routes } from "react-router-dom"


import Home from './components/Home/Home';
import Allspend from './components/Allspend/Allspend';
import Newspend from './components/Newspend/Newspend';
import Login from './components/Login/Login';
import NewUser from './components/NewUser/NewUser';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/Notfound/NotFound';
import EditSpend from './components/EditSpend/EditSpend';


function App() {
  return (
    <div className="App">
    <Routes> 
    <Route path='/' element={<Home/>} />
    <Route path='/allspend' element={<Allspend/>}/>
    <Route path='/newspend' element={<Newspend/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/newuser' element={<NewUser/>}/>
    <Route path='/spend/edit/:id' element={<EditSpend/>}/>
    <Route path='/*' element={<NotFound/>}/>
    


    </Routes>

    </div>
  );
}

export default App;
