const express = require("express");
const { check, validationResult } = require("express-validator");
const confiq = require("./../config");
const { userschema } = require("./../database connection/schema");
const { fetchuser } = require("./../middleware/fetchuser");
const router = express.Router();
const bcryt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtsecret = confiq.jwtsecret || "Changer@&123";
console.log(jwtsecret);
router.post(
  "/signup",
  [
    check("Email").isEmail(),
    check("password").isLength({ min: 5 }),
    check("First_Name").isLength({ min: 2 }),
    check("Last_Name").isLength({ min: 2 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      console.log(req.body);
      const { Email, password, First_Name, Last_Name } = req.body;
      const userdata = await (await userschema()).findOne({ Email: Email });
      if (userdata) {
        return res.status(409).json("user already exists");
      }
      const salt = await bcryt.genSalt(10);
      const hashedpassword = await bcryt.hash(password, salt);
      const saveuserdata = (await userschema())({
        Email: Email,
        First_Name: First_Name,
        Last_Name: Last_Name,
        password: hashedpassword,
      });
      const save_data = await saveuserdata.save();
      const userdetail = await userschema()
        .findOne({ _id: save_data._id })
        .select("-password");
      if (save_data) {
        const token = jwt.sign({ userid: save._id }, jwtsecret);
        return res.status(200).json({
          success: true,
          msg: "Succesfully added",
          token: token,
          user: userdetail,
        });
      }
    } catch (e) {
      console.log(e.message);
    }
  }
);
router.post(
  "/authenticate",
  [check("Email").isEmail(), check("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { Email, password } = req.body;
      const userdata = await (await userschema()).findOne({ Email: Email });
      if (!userdata) {
        return res.status(400).json("try with correct credentials");
      }
      const passwordmatching = await bcryt.compare(
        req.body.password,
        userdata.password
      );
      if (!passwordmatching) {
        return res.status(400).json("Enter correct password");
      }
      const token = jwt.sign({ _id: userdata._id }, jwtsecret);
      const userdetail = await (await userschema())
        .findOne({ _id: userdata._id })
        .select("-password");
      return res.status(200).json({
        success: true,
        msg: "Succesfully logged in",
        token: token,
        userdetail: userdetail,
      });
    } catch (err) {
      console.error(err);
    }
  }
);
router.put(
  "/reset/password",
  [check("Email").isEmail(), check("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { Email, password } = req.body;
      const userdata = await (await userschema()).findOne({ Email: Email });
      if (!userdata) {
        return res.status(409).json("user not Found");
      }
      const salt = await bcryt.genSalt(10);
      const hashedpassword = await bcryt.hash(password, salt);
      const updateuserdata = await userschema().updateOne(
        {
          _id: userdata._id,
        },
        {
          $set: {
            Email: Email,
            password: hashedpassword,
          },
        }
      );
      if (updateuserdata) {
        return res.status(200).json({
          success: true,
          msg: "Succesfully Reset",
        });
      }
    } catch (e) {
      console.log(e.message);
    }
  }
);
module.exports = router;
