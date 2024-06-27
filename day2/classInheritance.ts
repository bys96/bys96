class Vehicle {
  constructor(protected wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount}`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2); // 부모클래스를 super클래스라고도함 부모클래스의 생성자 호출 > wheelCount에 2 들어감
  }

  updateWheelCount(newWheelcount: number) {
    this.wheelCount = newWheelcount;
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new Motorcycle();
motorCycle.updateWheelCount(6);
motorCycle.showNumberOfWheels();
const automobile = new Automobile();
automobile.showNumberOfWheels();
