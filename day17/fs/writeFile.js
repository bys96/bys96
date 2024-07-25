const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "글이 입력됩니다.")
  .then(() => {
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });

//   const fs = require("fs").promises;
// for filename in FileList() 이런식으로 for문써서 파일들을 여러개 할수도 있음
// fs.writeFile("./writeme.txt", "글이 입력됩니다.")
//   .then(() => {
//     return fs.readFile("./writeme.txt");
//   })
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.error(err);
//   });
