import mongoose from 'mongoose';
import requestSchema from './models/requestSchema.js';
import express from 'express';
import cors from 'cors';
import { addRequest, allData, mongoURL, search, shortURL } from './cred.js';

const JugaadRequest = mongoose.model('requests', requestSchema);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(mongoURL).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log(err);
});

app.get(allData, (req, res) => {
    JugaadRequest.find({}).sort({ "CreatedAt": -1 }).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
});

app.get(search, (req, res) => {
    JugaadRequest.find({ _id: req.query._id }).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log("Error fetching the data: " + err);
    });
})

app.get(shortURL, (req, res) => {
    JugaadRequest.find({ ShortID: req.query.ShortID }).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log("Error fetching the data: " + err);
    });
})

app.post(addRequest, (req, res) => {
    const newRequest = new JugaadRequest(req.query);
    newRequest.save().then(() => {
        res.send("Request added successfully");
    }).catch((err) => {
        console.log(err);
    })
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
})