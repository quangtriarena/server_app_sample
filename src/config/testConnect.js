import Sequelize from "sequelize";

const sequelize = new Sequelize("test_db", "postgres", "12345", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connection;
