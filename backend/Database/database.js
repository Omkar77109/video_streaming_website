require("dotenv").config()
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://new_user31:omkar1234567890@cluster0.t3jejzq.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected")) //If connected to DB
  .catch((err) => console.log(err)); //If not connected to DB