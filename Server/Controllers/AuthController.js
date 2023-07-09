import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

// registering a new user

export const registerUser = async (req, res) => {
  const {firstname, lastname,email,password,phone } = req.body;
  const salt = await bcrypt.genSalt(10);
  console.log(req.body);
  const hashedPass = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    password: hashedPass,
    firstname,
    lastname,
    email,
    phone,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login user

export const loginUser = async (req,res) => {
    const {email, password} = req.body

    try{
        const user = await UserModel.findOne({email : email})
        if(user)
        {
            const validity = await bcrypt.compare(password,user.password)
            validity ? res.status(200).json(user) : res.status(400).json("Wrong password")
        }
        else
            res.status(404).json("usser does not exist")
    }
    catch (error){
        res.status(500).json({message : error.message});
    }
}
