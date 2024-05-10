const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "nirajsingh41412@gmail.com",
    pass: "frjz viov uktd bfoq",
  },
  tls: {
    rejectUnauthorized: true,
  },
});
const sendEmailMiddleware = (req, res, next) => {
  const { Subject, Description, Receiver } = req.body;
  const mailOptions = {
    from: "nirajsingh41412@gmail.com",
    to: Receiver,
    subject: Subject,
    text: Description,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error.message);
      return res.status(500).send("Error occurred while sending email");
    } else {
      req.body.messageId = info.messageId;
      req.body.Sender = "nirajsingh41412@gmail.com";
      next();
    }
    console.log(req.body);
  });
};

module.exports = sendEmailMiddleware;
