import mongoose from 'mongoose';
import requestSchema from './models/requestSchema.js';
import express from 'express';
import cors from 'cors';
import { generateFromEmail } from "unique-username-generator";
import { addRequest, allData, search, shortURL } from './cred.js';
import { User } from './models/user.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const JugaadRequest = mongoose.model('requests', requestSchema);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOURL).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log(err);
});

//get all the data
app.get(allData, (req, res) => {
    JugaadRequest.find({}).sort({ "CreatedAt": -1 }).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
});

//search for a particular request
app.get(search, (req, res) => {
    JugaadRequest.find({ _id: req.query._id }).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log("Error fetching the data: " + err);
    });
})

//get the data for a particular shortURL
app.get(shortURL, (req, res) => {
    JugaadRequest.find({ ShortID: req.query.ShortID }).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log("Error fetching the data: " + err);
    });
})

//add a new request
app.post(addRequest, (req, res) => {
    const newRequest = new JugaadRequest(req.query);
    newRequest.save().then(() => {
        res.send("Request added successfully");
    }).catch((err) => {
        console.log(err);
    })
})


//adding a user.
app.post('/register', (req, res) => {
    const { FirstName, LastName, Email, Password } = req.body;
    const username = generateFromEmail(Email);

    const newUser = new User({
        Username: username,
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password
    });

    newUser.save().then((user) => {
        console.log("User added successfully");

        jwt.sign({ id: user._id, firstname: user.FirstName, lastname: user.LastName, email: user.Email },
            process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) {
                    console.log(err);
                }
                
                console.log(token);
            });

        res.send("User added successfully");

    }).catch((err) => {
        console.log(err);
    })
})

//listen to the port
app.listen(3000, () => {
    console.log('Server running on port 3000');
})