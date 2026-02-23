import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function UserTable() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
   const fetchData=async()=>{
    try {
      const response=await axios.get('https://solid-guide-5w77vvg556637jg9-5000.app.github.dev/api/users')
      setUsers(response.data)
    } catch (error) {
      console.log("Error fetching users",error.message)
    }

   }
    fetchData()
  },[])








  return (
    <>
            <div className='my-5 mx-2'>
              <Link to="/add" className="text-white font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-700">
                Add User
              </Link>
            </div>
          <table className="w-full text-sm bg-green-800">
            

            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
              users.map(
                (user,index)=>{
                  return(
                    <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {index+1}
                </th>
                
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </th>
                <td className="px-6 py-4">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  {user.country}
                </td>
                <td className="px-6 py-4 flex gap-4">
                  <Link to={`/update/${user._id}`} className="text-blue-600 font-semibold hover:underline">Edit</Link>
                  <Link to="/" className="text-red-600 font-semibold hover:underline">Delete</Link>
                </td>
              </tr>
                  )

                }
              )
             }
              
            </tbody>
          </table>
    </>
  )
}

export default UserTable