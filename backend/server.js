
/* Creating variables express which is a web framework for Node.js
*  cors for cross platform AJAX requests
*  mongoose for connecting the MongoDB database
*/
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

/*
*   Connecting to the MongoDB Atlas
*/

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established sucessfully!!");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

/*  
*   Running the web server
*/

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});