import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import User from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const verificationUrl = `http://localhost:5000/api/auth/verify/${token}`;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Email Verification",
      html: `<p>Please verify your email by clicking <a href="${verificationUrl}">here</a></p>`,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Message Sent: %s", info.messageId);

    res.status(200).json({
      success: true,
      message: "Signup Successful. Please Verify your Email!",
    });
  } catch (error) {
    next(error);
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const token = req.params.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Token!",
      });
    }

    user.isVerified = true;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Email Verified Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not Found!",
      });
    }

    const isMatch = await bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Wrong Credentials!",
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Please verify your Email First",
      });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
