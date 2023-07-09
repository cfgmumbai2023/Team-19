import mongoose from 'mongoose'

const CourseSchema=mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        moduleNo : {
            type : Number,
            required : true
        },
        submoduleNo : {
            type : Number,
            required : true
        },
        expReq : {
            type : Number,
            required : true
        },
        minLicenseId : {
            type : Number,
            required : true
        },
        sport : {
            type : String,
            required : true
        },
    })

const Course = mongoose.model("Courses",CourseSchema);
export default Course