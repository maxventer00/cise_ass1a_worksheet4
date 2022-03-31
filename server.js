const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

// routes
const articles = require("./routes/api/articles");
const SEPractices = require("./routes/api/SEpractices");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use("/api/articles", articles);
app.use("/api/SEpractices", SEPractices);

const port = process.env.PORT || 8082;

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
