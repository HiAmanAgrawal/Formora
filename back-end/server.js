import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/route.js"; // Ensure the correct file extension (.js)

const app = express();

// Middleware
app.use(bodyParser.json()); // Middleware to parse JSON data

// Routes
app.use('/api', routes);

// Server setup
const port = 8081;
app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}/`);
});
