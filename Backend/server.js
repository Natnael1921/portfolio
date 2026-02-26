import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { Resend } from "resend";

dotenv.config();

const app = express();

/* Security */
app.use(helmet());
app.use(express.json());

/* CORS */
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
  })
);

/* Rate limit */
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
});

app.use("/contact", limiter);

/* Resend setup */
const resend = new Resend(process.env.RESEND_API_KEY);

/* Contact route */
app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing fields",
      });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    res.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Email failed",
    });
  }
});

/* Start server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});