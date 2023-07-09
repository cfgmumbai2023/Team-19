import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    moduleNo: {
        type: Number,
        required: true,
    },
    submoduleNo : {
        type: Number,
        required: true,
    },
    expReq : {
        type: Number,
        required: true,
    },
    minLicenseId : {
        type: Number,
        required: true,
    },
    sport:{
        type: String,
        required: true,
    },
    chapter:{
        type: String,
        required: true,
    }
});

const Video = mongoose.model('Video', videoSchema);
export default Video;

    

    