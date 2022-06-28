import express from "express";
import productController from "../controller/productController";

const router = express.Router();

/**
 *
 * @param {*} app: app express to server.js
 */

const initApiRoutes = (app) => {
  router.get("/products", productController.getAll);
  router.get("/products/:id", productController.getById);
  router.post("/products", productController.create);
  router.delete("/products/:id", productController.delete);
  router.put("/products/:id", productController.update);

  return app.use("/api/v1", router);
};

export default initApiRoutes;
