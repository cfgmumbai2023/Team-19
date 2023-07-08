const router = require('express').Router();
const { query, validationResult, body } = require('express-validator');//used for validation of data in the request body
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

const JWT_SECRET='this is a secret';
//Route 1: Create a user using: POST "/api/auth/signup". Doesn't require auth
router.post('/signup', [
    body('name', 'Name is too short').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    //if there are errors, return the errors in the response
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //lets check if the user with this email exists already
    try{
        //findOne is a mongoose method that returns a promise so we can use await
        let user=await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({error: 'This email is already registered'});
        }
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    } 

    //lets hash the password
    const salt = await bcrypt.genSalt(10);
    const securePass = await bcrypt.hash(req.body.password, salt);

    //if there are no errors, create a new user with the data from the request body
    // this returns a promise so we can use then and catch to handle the response
    user= await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass
    })
    const data={
        user:{
            id:user.id
        }
    }
    const authToken=jwt.sign(data, JWT_SECRET);
    res.json({authToken});
    // its same as res.json({authToken:authToken});
    
}
)


//route 2 : Authenticate a user using: POST "/api/auth/signin". Doesn't require auth
router.post('/signin', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //if there is no error
    const {email, password}=req.body;
    //lets check if the user with this email exists already
    try{
        let user=await User.findOne({email})
        if(!user){
            return res.status(400).json({error: 'Invalid Credentials, please try again!'});
        }
        //if there is a user with this email, lets compare the password
        const passCompare=await bcrypt.compare(password, user.password);
        if(!passCompare){
            return res.status(400).json({error: 'Invalid Credentials, please try again!'});
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authToken=jwt.sign(data, JWT_SECRET);
        res.json({authToken});

    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})


//route 3 : Get loggedin user details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchUser, async (req, res) => {
    try{
        // req.user.id is set in fetchUser middleware. we append the user to the request object there.
        const userId=req.user.id;
        //select is used to select the fields that we want to return in the response and -password means we don't want to return the password
        const user=await User.findById(userId).select("-password");
        res.send(user);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})
module.exports = router;