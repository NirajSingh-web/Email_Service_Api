const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { fetchuser } = require("../middleware/fetchuser");
const {
  EmailserviceSchema,
} = require("../database connection/schema");
const e = require("express");
const sendEmailMiddleware = require("./Nodemail");
router.get("/get/data:_id", fetchuser, async (req, res) => {
  console.log(req.params._id);
  if (req.params._id) {
    const data = await (
      await EmailserviceSchema()
    ).find({ Createdby: req.params._id });
    return res.send(data);
  }
});
router.post(
  "/add/data",
  [
    check("Receiver").isEmail(),
    check("Subject").isLength({ min: 2 }),
    check("Description").isLength({ min: 2 }),
    fetchuser,
    sendEmailMiddleware,
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).send({ errors: errors.array() });
    }
    const userid = req.users._id;
      console.log(userid)
    try {
      const data = await EmailserviceSchema()({
        Createdby: userid,
        ...req.body,
      });
      const savedata = await data.save();
      if (savedata) {
        return res.status(201).json({
          msg: "Data added Successfully!",
        });
      } else {
        return res.status(201).json({
          message: "Data not added",
        });
      }
    } catch (e) {
      res.status(401).json(e.message);
      console.log(e.message);
    }
  }
);
router.put(
  "/update/data",
  [
    check("Receiver").isEmail(),
    check("Subject").isLength({ min: 2 }),
    check("Description").isLength({ min: 30 }).withMessage("Atleast 30 Words"),
    fetchuser,
    sendEmailMiddleware,
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).send({ errors: errors.array() });
    }
    try {
      console.log(req.body);
      const update = await EmailserviceSchema().updateOne(
        { _id: req.body._id },
        {
          $set: req.body,
        }
      );
      if (update["acknowledged"]) {
        res.status(201).json("Updated Successfully");
      } else {
        res.status(201).json("Not Updated Try After Some time");
      }
    } catch (e) {
      res.status(401).json("Server Issue");
    }
  }
);
router.delete("/delete/data:_id", async (req, res) => {
  try {
    const deleteData = await (await EmailserviceSchema()).deleteOne(req.params);
    if (deleteData["deletedCount"] != 0) {
      res.status(200).json("Deleted Successfully!");
    } else {
      res.status(449).json("something went wrong");
    }
  } catch (e) {
    console.log("error in deleting data==>", e.message);
  }
});
module.exports = router;
