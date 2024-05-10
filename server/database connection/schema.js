const mongoose = require("mongoose");
const db_Connection = async () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://nirajsingh:Nirajsingh123@cluster0.t64wrli.mongodb.net/Email_Marketing",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => console.log("database connected"))
      .catch((e) => console.log(e.message));
  } catch (e) {
    console.log(e.message);
  }
};
db_Connection();
const userschema = () => {
  const userSchema = new mongoose.Schema({
    First_Name: {
      type: String,
      required: true,
    },
    Last_Name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  const user_collection =
    mongoose.models["users"] || mongoose.model("users", userSchema);
  return user_collection;
};
const EmailserviceSchema = () => {
  const emailServiceSchema = new mongoose.Schema({
    Createdby: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Users",
    },
    Sender: {
      type: String,
      required: true,
    },
    Receipt: {
      type: String,
      required: true,
    },
    Subject: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    messageId: {
      type: String,
    },
  });
  const EmailserviceModel =
    mongoose.models["emailservices"] ||
    mongoose.model("emailservices", emailServiceSchema);
  return EmailserviceModel;
};
module.exports = { userschema, EmailserviceSchema };
