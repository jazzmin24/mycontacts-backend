//console.log("I am in express project");

const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv= require("dotenv").config();
connectDB();
const app= express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});


//command:  npm run dev
//reference:   https://youtu.be/H9M02of22z4?si=xowyRfP7xdfUC2Nl