const express = require("express");
const sequelizePromise = require("./sequelize");
const roomsRouter = require("./routes/rooms");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

(async () => {
  const sequelize = await sequelizePromise;

  app.use("/api/rooms", roomsRouter);

  sequelize
    .sync({ force: false }) // force: true를 사용하는 경우 기존 테이블이 삭제되고 재생성됩니다.
    .then(() => {
      console.log("모든 모델이 성공적으로 동기화되었습니다.");
    })
    .catch((err) => {
      console.error("모델 동기화 중 오류 발생:", err);
    });

  app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
  });
})();

app.get("/", (req, res) => {
  res.send("Hello, this is your backend server!");
});
