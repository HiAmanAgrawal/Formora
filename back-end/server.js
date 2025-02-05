import express from "express";
import cors from "cors";
import routes from "./routes/route"

const app = express();
app.use('/api', routes)
app.use(
  cors(),
);
const port = 8080;
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}/`);
  // if (isConnected()) {
  //   console.log("📦 MongoDB Connected with Server, Successfully!");
  // }
});

app.get("/", (req, res) => {
  res.send("🚀 Server started successfully");
});
