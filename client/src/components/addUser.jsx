import React ,{ useEffect, useState }  from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function AddUser() {
  const users={
    name:"",
    email:"",
    country:""
  }

const [user, setUser] = useState(users)
const navigate=useNavigate()

const addData=async(e)=>{
  e.preventDefault()

  try {
    const response=await axios.post('https://solid-guide-5w77vvg556637jg9-5000.app.github.dev/api/users',user).then(
      (response)=>{
        toast.success(response.data.message,{position:"top-right"})
        navigate('/')
      }
    )
  } catch (error) {
    console.log("Error adding user",error.message)
  }
}

  return (
    <>
      <div className='my-5 mx-2'>
              <Link to="/" className="text-white font-bold py-2 px-4 rounded bg-gray-500 hover:bg-gray-700">
                back
              </Link>
      </div>

      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <form className="space-y-4" onSubmit={addData}>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" 
            onChange={
              (e)=>{
                setUser({...user,name:e.target.value})
                
                
              }
            }
            />

            <input type="text" placeholder="Email" className="w-full p-2 border rounded"
              onChange={
              (e)=>{
                setUser({...user,email:e.target.value})
                
                
              }
            }
            />

          </div>
          <input type="text" placeholder="Location" className="w-full p-2 border rounded"
          onChange={
              (e)=>{
                setUser({...user,country:e.target.value})
              
                
              }
            }
          />
          <input type="submit" value="Add User" className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded hover:bg-green-700 cursor-pointer" />
        </form>
      </div>

    </>
  )
}

export default AddUser