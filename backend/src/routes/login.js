import { User } from "../models/user.models.js";
import bcrypt from "bcrypt"

export const Login = async (req,res, next) => {
 
  const {email, password} = req.body;

  try{

    // console.log(password, hashedPassword);
    const user = await User.findOne({
      email
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not registeres",
      });
    }

    const isAuthenticated = await bcrypt.compare(password, user.password)
    
    if(isAuthenticated){
      return res.status(200).json({
        success: true,
        message: "User logged in successfully"
      });
    }
    
    return res.status(401).json({
      success: false,
      message: "Invalid password",
    })
  } catch(err) {
    // console.log("Server error: ", err);
    return res.status(500).json({
      message: "Internal Server Error",
    })
  }
}

export default Login;