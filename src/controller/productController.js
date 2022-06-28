import productService from "../services/productService";

const productController = {
  async getAll(req, res) {
    try {
      const result = await productService.getAll();

      return res.status(200).json({
        EM: result.EM,
        EC: result.EC,
        DT: result.DT,
      });
    } catch (error) {
      return res.status(500).json({
        EM: "something error with controller get all",
        EC: -1,
        DT: "",
      });
    }
  },

  async getById(req, res) {
    try {
      const id = req.params.id;

      const result = await productService.getById(id);

      return res.status(200).json({
        EM: result.EM,
        EC: result.EC,
        DT: result.DT,
      });
    } catch (error) {
      return res.status(500).json({
        EM: "something error with controller get by id",
        EC: -1,
        DT: "",
      });
    }
  },

  async create(req, res) {
    try {
      const result = await productService.create(req.body);

      return res.status(200).json({
        EM: result.EM,
        EC: result.EC,
        DT: result.DT,
      });
    } catch (error) {
      return res.status(500).json({
        EM: "something error with controller create",
        EC: -1,
        DT: "",
      });
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;

      const result = productService.delete(id);

      return res.status(200).json({
        EM: result.EM,
        EC: result.EC,
        DT: result.DT,
      });
    } catch (error) {
      return res.status(500).json({
        EM: "something error with controller delete",
        EC: -1,
        DT: "",
      });
    }
  },

  async update(req, res) {
    try {
      const data = req.body;
      const id = req.params.id;

      const result = await productService.update(data, id);

      return res.status(200).json({
        EM: result.EM,
        EC: result.EC,
        DT: result.DT,
      });
    } catch (error) {
      return res.status(500).json({
        EM: "something error with controller update",
        EC: -1,
        DT: "",
      });
    }
  },
};

export default productController;
