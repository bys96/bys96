namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelcount: number): void;
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
    updateWheelCount(newWheelcount: number): void {
      this.wheelCount = newWheelcount;
      console.log(`Automobile has ${this.wheelCount}`);
    }

    showNumberOfWheels() {
      console.log(`moved Automobile ${this.wheelCount}`);
    }
  }

  const motorCycle = new Motorcycle();
  motorCycle.updateWheelCount(1);
  motorCycle.showNumberOfWheels();
  cons;
  const automobile = new Automobile();
  automobile.showNumberOfWheels();
}
