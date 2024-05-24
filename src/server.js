import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import cors from "cors";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 7218; // Define PORT, defaulting to 7218 if not set

// CORS Configuration
app.use(
  cors({
    origin: process.env.REACT_URL, // Use environment variable for allowed origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["X-Requested-With", "Content-Type", "Authorization"],
    credentials: true,
  })
);

// Body-parser Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// View Engine Configuration
configViewEngine(app);

// Test Route
app.get("/api/users", (req, res) => {
  const data = { message: "Success" };
  res.json(data);
});

// Initialize Web Routes
initWebRoutes(app);

// Start Server
app.listen(PORT, () => {
  console.log(`>>> JWT Backend is running on port ${PORT}`);
});
