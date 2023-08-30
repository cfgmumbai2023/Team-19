import course from "../Models/courseModel.js";

export const getCourses = async (req, res) => {
    let query = course.find({});
    // console.log(req.query)
      if(req.query.sport){
        query = query.find({sport:req.query.sport});
      }
      if(req.query.expReq)
      {
        query =  query.find({expReq:req.query.expReq});
      }
      try {
        const products = await query.exec();
        res.status(200).json(products);
      }
      catch (error) {
      res.status(500).json(error);
    }};