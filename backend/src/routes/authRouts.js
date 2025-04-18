import { User } from "../models/user.models.js";
import bcrypt from "bcrypt"


const Signup = async (req, res, next) => {
  
  const { fullName, email, password, bio, userType } = req.body;
  try {
    //check if user already exists
    const user = await User.findOne({email});

    //if user exists, return error message
    if (user) {
      return res.status(404).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    const newUser = await User.create({
      userType,
      email,
      fullName,
      password,
      bio,
    });

    //Generating token
    const token = await user.generateAccessToken();
    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      })
      .status(200)
      .json({
        success: true,
        message: "User created successfully",
        user,
        token,
      });
  } catch (err) {
    return res.status(400).json({ status: false, message: err.message });
  }
}



const Login = async (req,res, next) => {
 
  //Input from frontend
  const { email, password } = req.body;
  console.log(req.body)

  try {
    // checks if the user is already exists
    const user = await User.findOne({ email }).select("+password");
    // console.log(user)
    // if doesnt
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not registered" });
    }
    const isAuthenticated = await user.isPasswordCorrect(password);
    console.log(isAuthenticated)
    if (!isAuthenticated) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    //Generating JWT token
    const token = await user.generateAccessToken(user._id);

    //Setting the token in the response cookie sending response
    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      })
      .status(200)
      .json({
        success: true,
        message: "User logged in successfully",
        token,
      });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

const getUser = async (req, res) => {
  try {
    const user = req.user;
    
    return res.status(200).json({ success: true, user });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

const logout = async (req, res) => {
  try {
    // Clear the cookie and send a response
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    return res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

export {
  Signup,
  Login,
  getUser,
  logout
};