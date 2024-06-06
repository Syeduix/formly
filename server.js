const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email service
    auth: {
      user: "sadettinkopek184@gmail.com", // Your email address
      pass: "01797433025", // Your email password
    },
  });

  // Email options
  const mailOptions = {
    from: "sadettinkopek184@gmail.com",
    to: email,
    subject: "Thank you for your email",
    text: "Dear Abdullah Awwal, Thank you for your email, we will come back to you soon!",
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, error: error.toString() });
    }
    res.status(200).json({ success: true, info: info.response });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
