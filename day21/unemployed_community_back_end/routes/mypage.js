const express = require("express");
const router = express.Router();
const { renderProfile } = require("../controllers/mypage");
const { isLoggedIn } = require("../middlewares");

router.use((req, res, next) => {
  res.locals.user = req.user; // 복붙하고 null user로 바꿧음
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get("/profile", isLoggedIn, renderProfile);

module.exports = router;
