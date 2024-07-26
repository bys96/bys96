const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");
writeStream.on("finish", () => {
  console.log("파일 쓰기 완료");
});

writeStream.write("이 글을 씁니다.\n");
writeStream.write("한 번 더 씁니다.");
writeStream.end();

// 문제 : 아래와 같은 모양을 writeme2-1.txt에 저장하시오

const writeStream2 = fs.createWriteStream("./writeme2-1.txt");

for (let i = 0; i < 5; i++) {
  let a = "0".repeat(4 - i) + "1".repeat(i + 1);
  writeStream2.write(a + "\n");
}
