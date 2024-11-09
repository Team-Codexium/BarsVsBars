import { User } from "../models/user.models.js";

const fetchArtist = async (req,res) =>{
    const user = await User.find({
        userType:'artist'
      },'fullName stats profilePicture userType email');
      // console.log(user);

      return res.json({user})
}

export default fetchArtist