import User from "../models/userModel.js";

const signupUser = async (req, res) => {
  try {
    const isEmailUnique = await User.find({ email: req.body.email });
    if (isEmailUnique.length > 0) {
      return res
        .status(404)
        .json({ message: "Email already in use, please use a new email" });
    }
    const newUser = await new User({ ...req.body });
    newUser.save().then(() => res.send("Sing up successfull!!!"));
  } catch (error) {
    res.json({ message: "User signup failed, Please try again", error: error });
  }
};

const signinUser = async (req, res) => {
  try {
    const { email, password } = { ...req.body };
    const user = await User.find({
      email,
      password,
    });
    console.log(email, password);
    console.log(user);
    if (user.length > 0) {
      return res.status(200).json({ message: "Login successfull" });
    } else {
      return res
        .status(403)
        .json({ message: "Wrong credentials, please check" });
    }
  } catch (error) {
    return res.status(403).json({ message: "Wrong credentials, please check" });
  }
};

export { signinUser, signupUser };
