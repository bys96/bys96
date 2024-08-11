const express = require("express");
const roomPromise = require("../Models/Room"); // Room 모델 가져오기
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, roomType, startTime, duration, keyword } = req.body;

  try {
    const Room = await roomPromise; // Room 모델을 비동기적으로 로드
    const room = await Room.create({
      title,
      roomType,
      startTime,
      duration,
      keyword,
    });

    res.status(201).json(room); // 생성된 방 정보를 반환
  } catch (err) {
    console.error("방 생성 중 오류 발생:", err); // 서버 콘솔에 오류 메시지 출력
    res.status(500).json({ message: "방 생성에 실패했습니다." });
  }
});

module.exports = router;
