let i = 1;
setInterval(() => {
  if (i === 5) {
    console.log("종료");
    process.exit();
  }
  console.log(i, "초");
  i += 1;
}, 1000);
