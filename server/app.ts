import dotenv from "dotenv";
import express from "express"; // step one: Import express framework after installation
import mongoose from "mongoose"; // step 9: import mongoose after installation to be able to connect to mongooseDB

import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import cors from "cors";

const app = express(); // step two: Activate express and put in a container called app
dotenv.config();

const port = 2100; // step three: Define the port number for the server nb:you cant ever use the same number on your laptop
app.use(cors());

import taskRouter from "./routes/taskRouters";

app.use(express.json());
app.use("/api/task", taskRouter);

// step four: gp to package.json under script and put "dev": nodemon app.ts to allow npm run dev work

// step 6: connect to mongoDB
// step 7: to connect to mongodb first insatll a package called mongoose
// step 8: listen to both the database and server together

const start = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  console.log("Database connect successful");

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  }); // step five: listen t the server after writing npm run dev
};

start();

// onyekaanthony02_db_user
// password: vTB6cgT4tSWg23Sd

// mongodb+srv://onyekaanthony02_db_user:vTB6cgT4tSWg23Sd@cluster0.7ay4tev.mongodb.net/?appName=Cluster0

// server file: this is where you run your server and connect to your database  ==> from app.js  ==> model file

//model files: this is used to define our data structure that will enter our database ==> from the model file we go to the ==> the controller file

// controller files: this file is used to define what happens between request and response. ==> from the controller files we go to Routes files.

// Routes files: this defines the request type and the routes for the particular request type. from here back to the father ==> server file(app.js)

// other files includes: middleware files, utility files etc
