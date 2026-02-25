import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function UserTable() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
   const fetchData=async()=>{
    try {
      const response=await axios.get('https://user-backend-wktw.onrender.com/api/users')
      setUsers(response.data)
    } catch (error) {
      console.log("Error fetching users",error.message)
    }

   }
    fetchData()
  },[])


const deleteUser=async(id)=>{
  try {
    const response=await axios.delete(`https://user-backend-wktw.onrender.com/api/users/${id}`).then(
      (response)=>{
      
        setUsers(users.filter((user)=>user._id!==id))
        toast.success(response.data.message,{position:"top-right"})
      }
    )
    
  } catch (error) {
    console.log("Error deleting user",error.message)
  }
}





  return (
    <div className="bg-gradient-to-r from-indigo-500 to-teal-400">
            <div className='my-5 mx-2'>
              <Link to="/add" className="text-white font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-700">
                Add User
              </Link>
            </div>
          <table className="w-full text-sm">
            

            <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-indigo-500 to-teal-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  SN
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody> 
             {
              users && users.length > 0 ? (
               users.map(
                (user,index)=>{
                  return(
                    <tr className="bg-gradient-to-r from-red-500 to-orange-500 border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                  {index+1}
                </th>
                
                <th scope="row" className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                  {user.name}
                </th>
                <td className="px-6 py-4 text-gray-800 font-semibold">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-gray-800 font-semibold">
                  {user.country}
                </td>
                <td className="px-6 py-4 flex gap-4">
                  <Link to={`/update/${user._id}`} className="text-blue-600 font-semibold hover:underline">Edit</Link>

                  <Link to="/" className="text-red-600 font-semibold hover:underline" onClick={()=>deleteUser(user._id)}>Delete</Link>
                </td>
              </tr>
                  )

                }
              )
              ) : (
                <tr className="bg-gradient-to-r from-green-900 to-orange-700 border-b">
                  <td colSpan={5} className="px-6 py-4 text-center text-lg text-gray-900">
                    No users found.
                  </td>
                </tr>
              )
             }
              
            </tbody>
          </table>
    </div>
  )
}

export default UserTable
