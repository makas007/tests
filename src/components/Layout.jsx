import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Finished from './Finished';
import Header from './Header';
import List from './List';
import Users from './Users';

function Layout() {
   return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/finished' element={<Finished/>}/>
      </Routes>
    </div>
  )
}
export default Layout;