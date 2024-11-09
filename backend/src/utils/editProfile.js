import multer from 'multer';
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../configurations/cloudinary.js";


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "profilePictures", // The folder in Cloudinary where images will be stored
    allowed_formats: ["jpg", "jpeg", "png"], // Allowed image formats
    transformation: [{ width: 500, height: 500, crop: "limit" }], // Optional resizing
  },
});

// Configure Multer with file restrictions
export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2, // Limit file size to 2 MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Only .jpeg and .png files are allowed"), false);
    }
  },
});

export const editProfile = (req, res) => {
  try {
    // The uploaded file's Cloudinary URL is in req.file.path
    res.json({
      message: "Profile picture uploaded successfully!",
      imageUrl: req.file.path, // The Cloudinary URL of the uploaded image
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to upload profile picture",
        error: error.message,
      });
  }
};
