const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const app = express();

// BODYPARSER
app.use(express.json());

// DB CONFIG
const db = config.get("mongoURI");

// CONNECT TO DB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Update static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder path
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
