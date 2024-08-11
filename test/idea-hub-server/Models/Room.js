const { DataTypes } = require("sequelize");
const sequelizePromise = require("../sequelize"); // 비동기적으로 sequelize 인스턴스를 가져옴

async function initializeRoomModel() {
  const sequelize = await sequelizePromise;

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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // 기본값으로 현재 시간
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // 기본값으로 현재 시간
    },
  });

  return Room;
}

module.exports = initializeRoomModel();
