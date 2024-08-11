const express = require("express");
const roomPromise = require("../Models/Room"); // roomPromise 가져오기
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, roomType, startTime, duration, keyword } = req.body;

  try {
    const Room = await roomPromise; // Room 모델 대기
    const room = await Room.create({
      title,
      roomType,
      startTime,
      duration,
      keyword,
    });
    res.status(201).json(room); // 성공적으로 생성된 방 정보 반환
  } catch (err) {
    console.error("방 생성 중 오류 발생:", err);
    res.status(500).json({ message: "방 생성에 실패했습니다." });
  }
});

module.exports = router;
