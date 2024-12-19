const mongoose = require("mongoose");
require("dotenv").config();

const dbCon = async () => {
    try {
      await mongoose.connect(
     `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.5ogxgiw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      );
      console.log("Conexión exitosa a la base de datos");
    } catch (err) {
      console.error("Error al conectar la BDD:", err.message);
    }
  };

module.exports = dbCon;