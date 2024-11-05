import { User } from "../models/user.models.js";


const Signup = async (req, res, next) => {
  
  const data = req.body;
  const {fullName, email, password, bio, userType} = data;

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

    //creating a new user
    const newUser =  new User({
      fullName,
      email,
      password,
      bio,
      userType,
    })

    await newUser.save()

    return res.json({success: true,  message: "User registered successfully"});
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    })
  }
}

export default Signup;