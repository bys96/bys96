const { DataTypes } = require("sequelize");
const sequelizePromise = require("../sequelize"); // sequelize 인스턴스를 가져옴

async function defineRoomModel() {
  const sequelize = await sequelizePromise; // sequelize 인스턴스 대기

  const Room = sequelize.define(
    "Room",
    {
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
    },
    {
      timestamps: true, // 이 옵션을 통해 Sequelize가 자동으로 createdAt과 updatedAt을 관리합니다.
    }
  );

  return Room;
}

module.exports = defineRoomModel();
