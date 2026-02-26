const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* EMAIL TRANSPORT */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,       // TLS port
  secure: false,   // use STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
  tls: {
    rejectUnauthorized: false, 
  },
});

/* CONTACT ROUTE */
app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${firstName} ${lastName}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});