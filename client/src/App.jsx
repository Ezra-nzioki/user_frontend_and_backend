import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserTable from './components/userTable.jsx'
import AddUser from './components/addUser.jsx'
import Update from './components/update.jsx'

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<UserTable />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/update/:id' element={<Update />} />
    </Routes>
    </>
   
     
  )
}

export default App
