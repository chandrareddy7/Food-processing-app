import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import dotenv from "dotenv";
import jwt from "jsonwebtoken"

dotenv.config();

const signupUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already in use, please use a new email" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await new User({ name: req.body.name, email: req.body.email, roles: req.body.roles , password: hashedPassword, mobile: req.body.mobile });
    await newUser.save();
    res.status(201).json({ message: "Sign up successful!" });
  } catch (error) {
    // res.json({ message: "User signup failed, Please try again", error: error });
    res.status(500).json({ message: "User signup failed, Please try again" });
  }
};

const signinUser = async (req, res) => {
  try {
    const { email, password } = { ...req.body };
    const user = await User.findOne({
      email
    });
    if (!user) {
      return res.status(401).json({ error: `Authentication failed` });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = jwt.sign({ userId: user._id, role: user.roles }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 900000,
    });
    return res.status(200).json({ message: "Login successfull" });
  } catch (error) {
    return res.status(403).json({ message: "Wrong credentials, please check" });
  }
};

export { signinUser, signupUser };
