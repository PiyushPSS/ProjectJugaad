import mongoose from "mongoose";

const ImageUploadSchema = new mongoose.Schema({
    ProductID: { type: String, required: true },
    ProductUploadedBy: { type: String, required: true },
    ImageUploadedBy: { type: String, required: true },
    ImageURL: { type: String, required: true },
    ProductIdPlusImageUploadedBy: { type: String, required: true },
}, { timestamps: true });

export const ImageUpload = mongoose.model("ImageUpload", ImageUploadSchema);