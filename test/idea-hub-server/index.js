const express = require("express");
const cors = require("cors"); // CORS 미들웨어 추가
const sequelizePromise = require("./sequelize");
const roomsRouter = require("./routes/rooms");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// CORS 설정을 추가하여 모든 출처에서의 요청을 허용
app.use(cors());

app.use(express.json());

(async () => {
  try {
    const sequelize = await sequelizePromise; // sequelize 인스턴스 대기

    await sequelize.sync({ force: false }); // 테이블 동기화

    app.use("/api/rooms", roomsRouter);

    app.listen(port, () => {
      console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
    });
  } catch (err) {
    console.error("서버 시작 중 오류 발생:", err);
  }
})();

app.get("/", (req, res) => {
  res.send("Hello, this is your backend server!");
});
