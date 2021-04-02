const Reception = require("../models/Reception");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");
router.get("/choosedoctor", (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err || !payload) {
      res.send({ err: "Something went wrong!" });
    } else {
      Reception.find({ patient: payload._id })
        .sort({ date: -1 })
        .exec((err, patient) => {
          console.log(patient);
          if (!patient[0].speciality) {
            res.send({
              success: true,
              foundspeciality: false,
            });
          } else {
            Doctor.find({ speciality: patient[0].speciality }, null, {
              sort: { name: 1 },
            })
              .select(["-password", "-email", "-phone", "-date"])
              .then((doctors) => {
                if (err)
                  res.send({
                    err: true,
                    success: false,
                    foundspeciality: false,
                  });
                else {
                  console.log(doctors);
                  res.send({
                    success: true,
                    doctors: doctors,
                    foundspeciality: true,
                  });
                }
              })
              .catch((err) => {
                console.log(err);
                res.send({ success: false, foundspeciality: false });
              });
          }
        });
    }
  });
});
module.exports = router;
