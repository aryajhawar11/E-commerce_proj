import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';
import userModel from '../models/userModel.js';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const loginUser= async (req,res)=>{

    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        // Create JWT token
        const token = createToken(user._id);
        res.status(200).json({ success: true, token });

    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}


//Route for user registration
const registerUser = async (req, res) => {
try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ success: false, message: "User already exists" });
    }

    //validating email and strong password
    if (!validator.isEmail(email)) {
        return res.status(400).json({ success: false, message: "Invalid email format" });
    }
    if(password.length < 8 ){
        return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
    }
    //hashing user password
    const salt= await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        name,
        email,
        password: hashedPassword
    });

    const user = await newUser.save();
    const token= createToken(user._id);

    res.status(201).json({ success: true, token });
    
} catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: error.message });
}
}


// Route for admin login
const adminLogin = async (req, res) => {
    
}

export { loginUser, registerUser, adminLogin };