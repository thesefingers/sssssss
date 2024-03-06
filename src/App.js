import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import { AuthContextProvider } from './context/AuthContext';
import Wallet from './components/Wallet';
import Buy from './components/Buy';
import Successful from './components/Successful';


function App() {
  return (
    <AuthContextProvider>
          <Routes>
    <>
        <Route path='/home' element={<Home />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/successful' element={<Successful />} />


    </>
    </Routes>
    </AuthContextProvider>

  );
}

export default App;
