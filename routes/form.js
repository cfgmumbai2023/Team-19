const router = require("express").Router();
const fetchUser = require("../middleware/fetchUser");
const UserModel = require("../models/user-model");
const { query, validationResult, body } = require("express-validator");


router.post('/details', async (req, res) => {
  try {
    // Destructure the fields from the request body
    const { place, age, gender, WorkExp, licenseId, image, preferences } = req.body;

    // Create a new instance of the schema with the provided fields
    const newData = new UserModel({
      age,
      gender,
      WorkExp,
      licenseId,
      image,
      preferences
    });

    // Save the data to the database
    const savedData = await newData.save();

    res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing the request' });
  }
});

module.exports = router;


// // Route 1: fetch all the notes. GET request, Login required
// router.get("/fetchall", fetchUser, async (req, res) => {
//   try {
//     const notes = await Notes.find({ user: req.user.id });
//     res.json(notes);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// //  Route 2: Add a new note using: POST "/api/notes/addnote". Login required
// router.get(
//   "/addnote",
//   fetchUser,
//   [
//     body("title", "title is too short").isLength({ min: 3 }),
//     body("description", "Desc must be atleast 5 characters").isLength({
//       min: 5,
//     }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     //if there are errors, return the errors in the response
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//       const { title, description, tag } = req.body;
//       const note = new Notes({
//         title,
//         description,
//         tag,
//         user: req.user.id,
//       });
//       const savedNote = await note.save();
//       res.json(savedNote);
//     } catch (error) {
//       console.log(error);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

// // Route 3: Update an existing note using: PUT "/api/notes/updatenote". Login required
// router.put("/updatenote/:id", fetchUser, async (req, res) => {
//   // took these things from the request body by destructuring it
//   const { title, description, tag } = req.body;
//   //create a newNote object
//   const newNote = {};
//   // if the title, description, tag is present in the request body then add it to the newNote object
//   if (title) {
//     newNote.title = title;
//   }
//   if (description) {
//     newNote.description = description;
//   }
//   if (tag) {
//     newNote.tag = tag;
//   }
//   //find the note to be updated and update it
//   let note = await Notes.findById(req.params.id); // this is the id of the note to be updated which is given in the url
//   if (!note) {
//     return res.status(404).send("Not Found");
//   }
//   // if the user who is updating the note is not the owner of the note then return an error
//   if (note.user.toString() !== req.user.id) {
//     return res.status(401).send("Not Allowed");
//   }
//   note = await Notes.findByIdAndUpdate(
//     req.params.id,
//     { $set: newNote }, // this is the newNote object which we created above
//     { new: true }
//   );
// });

// module.exports = router;
