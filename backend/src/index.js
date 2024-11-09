import express from 'express';
import cors from 'cors';
import {} from 'dotenv/config'
import dbConnect from './db/index.js';
import cookieParser from "cookie-parser"
import bodyParser from 'body-parser';



const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
}));
 

app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("../public"));


//Routes Imports
import { Login, Signup } from './routes/authRouts.js';
import { ArtistDetails, Artists } from './routes/userRoutes.js';
import { Vote } from './routes/voteRoutes.js';
import { AcceptInvite, AddMedia, BattleDetails, Battles, inviteSend } from './routes/battleRoutes.js';
import { AddComment, Comments, DeleteComment } from './routes/commentRoutes.js';
import jwtAuth from './middlewares/jwtAurth.js';



//Auth Routes
app.post("/api/auth/signup", Signup);
app.post("/api/auth/login",jwtAuth, Login);

//User Routes
app.get("/artists", Artists);
app.get("/artists/:id", ArtistDetails);


//Battle Routes
app.get("/battle", Battles );
app.get("/battle/:id", BattleDetails);
app.post("/invite-send", inviteSend);
app.post("/accept-send", AcceptInvite);
app.post("/battle/:id/add-media", AddMedia);

//Voting Routes
app.post("/battle/:id/voting", Vote);

//Comments Routes
app.get("/battle/:id/comments", Comments);
app.get("/battle/:id/add-comment", AddComment)
app.delete("/battle/:id/delete-comment", DeleteComment)


//connecting to db and startting the erver
dbConnect().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((err) => {
  console.log("SERVER CONNECTION FAILED: ", err.message);
  process.exit(1);
})