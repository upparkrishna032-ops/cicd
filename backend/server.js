// Import dependencies
import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ quiet: true });
}
import express from "express";
import cors from "cors";
import morgan from "morgan";
import home from "./routes/home.js";
import connectToDB from "./config/connectToDb.js";

// Server setup
const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cicd";

// Connect Database
connectToDB(MONGO_URI);

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", "views");
app.set("view engine", "ejs");

//Third-party middlewares
app.use(cors());
app.use(morgan("tiny"));

// Routing
app.use("/", home);

// Start server
app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT}`);
});
