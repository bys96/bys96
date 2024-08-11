const { DataTypes } = require("sequelize");
const sequelizePromise = require("../sequelize"); // sequelizePromise 가져오기

const initializeRoomModel = async () => {
  const sequelize = await sequelizePromise; // sequelize 인스턴스 대기
  const Room = sequelize.define("Room", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roomType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    keyword: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Room;
};

module.exports = initializeRoomModel(); // Promise를 반환
