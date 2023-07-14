const NightController = require("../controllers/night.controllers");
console.log("Night Controller is =>", NightController);

module.exports = (app) => {
  app.get("/api/nights", NightController.readAll);
  app.get("/api/nights/:id", NightController.readOne);
  app.post("/api/nights", NightController.create);
  app.delete("/api/nights/delete/:id", NightController.delete);
  app.patch("/api/nights/edit/:id", NightController.update);
};
