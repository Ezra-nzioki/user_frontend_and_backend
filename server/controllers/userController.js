import User from "../model/userModel.js";

//creating user to database
export const createUser = async (req,res) => {
    try {
        const {name,email,country} = req.body
        const newUser = new User({name,email,country})
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({message:"Error creating user",error})
    }
}

//getting users from db
export const getUsers = async (req,res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:"Error fetching users",error})
    }
}

//getting single user from db
export const getUser=async (req,res) => {
    try {
        const userid=req.params.id  
        const user=await User.findById(userid)
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:"Error fetching user",error})
    }
}

//updating user in db
export const updateUser=async (req,res) => {
    try{
        const userid=req.params.id  
        const user=await User.findById(userid)
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        const {name,email,country}=req.body
        user.name=name || user.name
        user.email=email || user.email
        user.country=country || user.country
        await user.save()
        res.status(200).json(user)


    }
    catch (error) {
        res.status(500).json({message:"Error fetching users",error})
    }
}


//deleting user from db
export const deleteUser=async (req,res) => {
    try{
        const userid=req.params.id  
        const user=await User.findByIdAndDelete(userid)

        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        
        res.status(200).json({message:"User deleted successfully"})
    }
     catch (error) {
        res.status(500).json({message:"Error deleting user",error})
    }
}