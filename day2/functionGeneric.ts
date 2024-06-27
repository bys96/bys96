interface HasLenght {
  length: number;
}

function getLength<T extends HasLenght>(arg: T): number {
  // if ((arg as any).hasOwnProperty("length")) {
  //   return arg["length"];
  // }
  // return 0; // number 는 length가 없어서 0
  return arg.length;
}

console.log(getLength<number>(22));
console.log(getLength("Hello world."));
