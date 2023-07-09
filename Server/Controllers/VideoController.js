import Video from "../Models/videoModel.js";
// const getVideos = async (req, res) => {
//     const id=req.params.id;
//     try {
//         const videos = await Video.findById(id);
//         res.json(videos);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// }

// const getVideosByModule = async (req, res) => {
//     const moduleNo=req.params.moduleNo;
//     try {
//         const videos = await Video.find({moduleNo:moduleNo});
//         res.json(videos);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// }

export const getVideos = async (req, res) => {
    let query = videoModel.find({});
    // console.log(req.query)
      if(req.query.sport){
        query = query.find({sport:req.query.sport});
      }
      if(req.query.expReq)
      {
        query =  query.find({expReq:req.query.expReq});
      }
      if(req.query.minLicenseId){
        query = query.sort({minLicenseId:req.query.minLicenseId});
      }
      if(req.query.chapter){
        query = query.find({chapter:req.query.chapter});
      }
      
      if(req.query._page && req.query._limit){ //pagination (future Scope)
        const pageSize=parseInt(req.query._limit);
        const page = parseInt(req.query._page);
        query=query.skip((page-1)*pageSize).limit(pageSize);
      }
      try {
        const products = await query.exec();
        res.status(200).json(products);
      }
      catch (error) {
      res.status(500).json(error);
    }}

