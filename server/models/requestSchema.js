import mongoose from 'mongoose';

const requestSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    UserID: String,
    CreatedAt: String,
    Price: Number,
    UserName: String,
    Category: String
})

export default requestSchema;