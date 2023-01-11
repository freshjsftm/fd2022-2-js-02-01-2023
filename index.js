function Auto(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.currentSpeed = 0;
  /**
   * 
   * @returns {number}
   */
  this.stop = function () {
    return (this.currentSpeed = 0);
  };
  /**
   * 
   * @param {number} value 
   * @returns {number | false} 
   */
  this.accelerate = function (value=0) {
    if (value < 0) {
      return false;
    }
    this.currentSpeed += value;
    if (this.currentSpeed >= this.maxSpeed) {
      return (this.currentSpeed = this.maxSpeed);
    }
    return this.currentSpeed;
  };
  /**
   * 
   * @param {number} value 
   * @returns {number | false} 
   */
  this.deaccelerate = function (value=0) {
    if (value < 0) {
      return false;
    }
    this.currentSpeed -= value;
    if (this.currentSpeed <= 0) {
      return (this.currentSpeed = 0);
    }
    return this.currentSpeed;
  };
}

const car = new Auto("bmw", 270);
console.log(car.accelerate(30));
console.log(car.accelerate(350));
console.log(car.deaccelerate(50));
console.log(car.deaccelerate(500));
