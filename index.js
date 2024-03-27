const express = require("express");
const userRouter = require("./routes/user.route");
const connectDB = require("./config/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

app.use("/", userRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
  connectDB();
});
