import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/navbar';
import { Register } from './components/Registration/register';
import { Loginform } from './components/loginform/login';
import { Userdashboard } from './components/userdhashboard/dashboard';
import { Dashbord1 } from './components/userdhashboard/adminDashbord1';
import { Addproduct } from './components/additems/additems';
import { Displayproduct } from './components/displayproduct/displayone';
import { Admaindashboard } from './components/admaindashboard/admaindashboard';
import { Updateproduct } from './components/updateproduct/updateproduct';


function App() {
  return (
   <>
   {/* <Addproduct/> */}
   {/* <Dashbord1/> */}
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/loginpage' element={<Loginform/>}/>
        <Route path='/userdashboard' element={<Userdashboard/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/displayproduct/:id' element={<Displayproduct/>}/>
        <Route path='/Admaindashboard' element={<Admaindashboard/>}/>
        <Route path='/Updateproduct/:id' element={<Updateproduct/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
