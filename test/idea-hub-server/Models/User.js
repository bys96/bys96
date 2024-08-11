const { DataTypes } = require("sequelize");
const sequelizePromise = require("../sequelize"); // sequelize.js에서 내보낸 Promise 불러오기

let User;

sequelizePromise
  .then((sequelize) => {
    User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  })
  .catch((err) => {
    console.error("모델 정의 중 오류 발생:", err);
  });

module.exports = User;
