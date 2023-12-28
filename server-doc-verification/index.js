const express = require("express");
const app = express();
const routes = require("./routes/Routes");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 3000; // Use a default port if PORT is not defined in .env

// Database connect
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(
  cors({
    origin: "*", // Update this to match your frontend origin
    credentials: true,
  })
);

// Handling preflight requests
app.options("*", cors());

// File upload configuration
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// Routes
app.use("/api/v1/", routes);

// Default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

// Server listening
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
