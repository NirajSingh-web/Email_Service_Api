const express = require("express");
const cors = require("cors");
const userroute = require("./auth/auth");
const EmailserviceRoute = require("./EmailService/Emailservice");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userroute);
app.use("/emailService", EmailserviceRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
