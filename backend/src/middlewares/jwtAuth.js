import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

const jwtAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken || req.header("Authorization").replace("Bearer ", "");
    
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
  
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
    
    const user = await User.findById(decoded._id).select("-password");
    
    if (!user) {
      return res.status(401).json({ message: "Invalid Access Token" });
    }
  
    req.user = user;
    next();

  } catch (error) {
    console.error("JWT Authentication Error: ", error.message);
    return res.status(401).json({ message: error.message });
    
  }
}

export default jwtAuth;