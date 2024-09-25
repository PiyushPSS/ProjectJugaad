import mongoose from 'mongoose';
import requestSchema from './models/requestSchema.js';
import express from 'express';
import cors from 'cors';
const JugaadRequest = mongoose.model('requests', requestSchema);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin_jugaad:admin%40jugaad@cluster0.p8gze.mongodb.net/jugaadDB').then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    JugaadRequest.find({}).sort({ "CreatedAt": -1 }).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
})