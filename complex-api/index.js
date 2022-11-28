// Initializing the variables
const express = require('express');
const app = express();
const cors = require('cors');
const https =require('https');
const fs = require('fs');
const db = require('./models');
const { User, Category } = require('./models');
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// then express and cors
app.use(express.json());

app.use(cors({
    origin: ["https://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


app.listen(6000, function () {
    console.log("Server Started on Port 4000");
  }); 