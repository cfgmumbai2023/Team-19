import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
// Router

import AuthRoute from './Routes/AuthRoute.js';
import CourseRoute from "./Routes/CourseRoute.js";
import videoRoute from "./Routes/videoRoute.js";
const app = express();
app.use(cors());
// Middleware

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(express.json());
// app.use(express.urlencoded()); // used for form

dotenv.config();

// Database Connection
console.log(process.env.MONGO_DB)
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));


//   Usage of Route

app.use('/auth', AuthRoute);
app.use('/Courses', CourseRoute);
app.use('/videos', videoRoute);