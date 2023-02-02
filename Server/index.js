const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');


const routes = require('./routes/routes');
const wallpaperRouter = require('./routes/wallpaperRoute');

const mongoString = process.env.DATABASE_URL;


mongoose.connect(mongoString);
const database = mongoose.connection;


database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log("Connected")
})

const app = express();
const PORT  = 3000;


app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use('/api', wallpaperRouter);

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})

//7LPypgJt8WYrgMLV