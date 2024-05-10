const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "nirajsingh41412@gmail.com",
    pass: "Changer@&123",
  },
});
const sendEmailMiddleware = (req, res, next) => {
  const { Sender, Subject, Description, Receipt } = req.body;
  const mailOptions = {
    from: Sender || "nirajsingh41412@gmail.com",
    to: Receipt,
    subject: Subject,
    text: Description,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error.message);
      res.status(500).send("Error occurred while sending email");
    } else {
      console.log("Email sent successfully!");
      req.body.messageId = info.messageId;
      console.log("Message ID:", info.messageId);
      next();
    }
    console.log(req.body);
  });
};

module.exports = sendEmailMiddleware;
