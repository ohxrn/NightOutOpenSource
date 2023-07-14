const Night = require("../models/night.models");

module.exports.readAll = (req, res) => {
  Night.find()
    .then((allDaNights) => {
      res.json({ Nights: allDaNights });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.readOne = (req, res) => {
  Night.findOne({ _id: req.params.id })
    .then((oneSingleNight) => {
      res.json({ Night: oneSingleNight });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.create = (req, res) => {
  Night.create(req.body)
    .then((newlyCreatedNight) => {
      res.json({ Night: newlyCreatedNight });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.update = (req, res) => {
  Night.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedNight) => {
      res.json({ Night: updatedNight });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.delete = (req, res) => {
  Night.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
