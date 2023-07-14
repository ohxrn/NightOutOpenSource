const CompanyController = require("../controllers/company.controllers");
console.log("Company Controller is =>", CompanyController);

module.exports = (app) => {
  app.get("/api/companys", CompanyController.readAll);
  app.get("/api/companys/:id", CompanyController.readOne);
  app.post("/api/companys", CompanyController.createCompany);
  app.delete("/api/companys/delete/:id", CompanyController.delete);
  app.get("/api/companys/:context", CompanyController.readSome);
  app.patch("/api/companys/edit/:id", CompanyController.update);
};
