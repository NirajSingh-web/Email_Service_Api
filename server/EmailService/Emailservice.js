const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { fetchuser } = require("../middleware/fetchuser");
const { EmailserviceSchema } = require("../database connection/schema");
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
    check("Email").isEmail(),
    check("Subject").isLength({ min: 2 }),
    check("Description").isLength({ min: 2 }),
    fetchuser,
    sendEmailMiddleware,
  ],
  async (req, res) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).send({ errors: errors.array() });
    }
    try {
      const userid = req.users._id;
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
// router.put("/update/data",[
//     check("Email").isEmail(),
//     check("Subject").isLength({ min: 5 }),
//     check("Description").isLength({ min: 2 }),
//     fetchuser,
//   ],async(req,res)=>{
//     const errors = validationResult(req).formatWith();
//     if (!errors.isEmpty()) {
//       return res.status(400).send(errors.array());
//     }
//     try {
//       const userid = req.users._id;
//       const data = (await EmailserviceSchema())({
//         Createdby: userid,
//         ...req.body,
//       });
//       const savedata = await data.save();
//       if (save) {
//         return res.status(201).json({
//           message: "Data added Successfully!",
//         });
//       } else {
//         return res.status(201).json({
//           message: "Data not added",
//         });
//       }
//     } catch (e) {
//       res.status(401).json(e.message);
//     }
//   }
// })
module.exports = router;
