import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserTable from './components/userTable.jsx'
import AddUser from './components/addUser.jsx'
import Update from './components/update.jsx'

function App() {
 
  return (
    <div className='bg-gradient-to-r from-indigo-500 to-teal-400'>
        <Routes>
          <Route path='/' element={<UserTable />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
    </div>
        
    
   
     
  )
}

export default App
