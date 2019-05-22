import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import dotenv from 'dotenv/config';
import dbConnect from './util/dbConnect';

dbConnect().then(() => {
    console.log("Database Connected")
}, err => {
    console.log("Error in connectiong database", err)
})

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hey you..! how are you !")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`)
});

