import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

import {BrowserRouter, Link, Navigate, Route, Routes,} from 'react-router-dom';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import Signup from './components/Signup';
import StateManagement from './components/StateManagement';
import Todo from './components/Todo';
import ChatApp from './components/ChatApp';
import Contact from './components/Contact';
import Browse from './components/Browse';
import AddProduct from './components/AddProduct';
import ManageUser from './components/ManageUser';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';


function App() {
  return (
 <div>
  <Toaster position='top-center'/>
  <BrowserRouter>
  <Navbar/>
<Routes>
  <Route path='/' element={ <Navigate to = "/home" />}/>
  <Route path='home' element={ <Home/> }/>
  <Route path='login' element={ <Login/> }/>
  <Route path='signup' element={ <Signup/> }/>
  <Route path='event' element={ <EventHandling/> }/>
  <Route path='state' element={ <StateManagement/> }/>
  <Route path='todo' element={ <Todo/> }/>
  <Route path='chat' element={ <ChatApp/> }/>
  <Route path='contact' element={ <Contact/> }/>
  <Route path='browse' element={ <Browse/> }/>
  <Route path='addproduct' element={ <AddProduct/> }/>
  <Route path='manageuser' element={ <ManageUser/> }/>
  <Route path='updateuser/:id' element={ <UpdateUser/> }/>
</Routes>
 
  </BrowserRouter>
 </div>
  );
}

export default App;
