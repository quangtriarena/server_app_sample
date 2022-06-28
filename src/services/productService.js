import db from "../models/index";

const productService = {
  async getAll() {
    try {
      const res = await db.Product.findAll();

      return {
        EM: "something error with controller",
        EC: 0,
        DT: res,
      };
    } catch (error) {
      return {
        EM: "something error with service get all data",
        EC: -1,
        DT: "",
      };
    }
  },

  async getById(id) {
    try {
      const res = await db.Product.findOne({
        where: { id },
      });

      return {
        EM: `get by ${id} successfully`,
        EC: 0,
        DT: res,
      };
    } catch (error) {
      return {
        EM: "something error with service get by id",
        EC: -1,
        DT: "",
      };
    }
  },

  async create(data) {
    try {
      await db.Product.create({ title: data.title, desc: data.desc });

      return {
        EM: "create new product successfully",
        EC: 0,
        DT: "",
      };
    } catch (error) {
      return {
        EM: "something error with service create new data",
        EC: -1,
        DT: "",
      };
    }
  },

  async delete(id) {
    try {
      await db.Product.destroy({
        where: { id },
      });

      return {
        EM: `delete ${id} successfully`,
        EC: 0,
        DT: "",
      };
    } catch (error) {
      return {
        EM: "something error with service delete data",
        EC: -1,
        DT: "",
      };
    }
  },

  async update(data, id) {
    try {
      await db.Product.update(
        {
          title: data.title,
          desc: data.desc,
          price: data.price,
        },
        {
          where: {
            id,
          },
        }
      );

      return {
        EM: `update ${id} successfully`,
        EC: 0,
        DT: "",
      };
    } catch (error) {
      return {
        EM: "something error with service update data",
        EC: -1,
        DT: "",
      };
    }
  },
};

export default productService;
