//import logo from './logo.svg';
import './App.css';

//components
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import KnowYourBatch from './components/KnowYourBatch';
import Album from './components/album';
import Cards from './components/cards';
import Dropdown from './components/Dropdown';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path = {'/'}  element = {<Album />}></Route>
      <Route path = {'/aboutus'}  element = {<KnowYourBatch />}></Route>
      <Route path = {'/students'}  element = {<AllUsers />}></Route>
      <Route path = {'/Student'}  element = {<AddUser />}></Route>
      <Route path = {'/cards'} element = {<Cards />}></Route>
      <Route path = {'/dropdown'} element = {<Dropdown />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
