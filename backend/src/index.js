import express from 'express';
import cors from 'cors';
import {} from 'dotenv/config'
import dbConnect from './db/index.js';
import Signup from './routes/signup.js';
import login from './routes/login.js';
import {upload,editProfile} from './utils/editProfile.js'
import fetchArtist from './routes/callArtists.js'

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
}));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });

app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("../public"));



//Routes
app.post("/api/auth/signup", Signup);
app.post("/api/auth/login", login);
app.post("/api/auth/editprofile",upload.single('profileImage'),editProfile)
app.get('/api/db/artist',fetchArtist);


//connecting to db and startting the erver
dbConnect().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((err) => {
  console.log("SERVER CONNECTION FAILED: ", err.message);
  process.exit(1);
})