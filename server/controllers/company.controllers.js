const Company = require("../models/company.models");

module.exports.readAll = (req, res) => {
  Company.find()
    .then((allDaCompanys) => {
      res.json({ Companys: allDaCompanys });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};
module.exports.readSome = (req, res) => {
  Company.find({ type: req.params.context })
    .then((allDaCompanys) => {
      res.json({ Companys: allDaCompanys });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.readOne = (req, res) => {
  Company.findOne({ _id: req.params.id })
    .then((oneSingleCompany) => {
      res.json({ Company: oneSingleCompany });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.createCompany = (req, res) => {
  Company.create(req.body)
    .then((newlyCreatedCompany) => {
      res.json({ Company: newlyCreatedCompany });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.update = (req, res) => {
  Company.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedCompany) => {
      res.json({ Company: updatedCompany });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.delete = (req, res) => {
  Company.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
