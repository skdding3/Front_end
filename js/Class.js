// 생성자 함수 prototype

function user(first, last) {
  this.firstName = first
  this.lastName = last
}
user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
} // 함수 방식을 통일화 해서 메모리를 효율적으로 관리 할 수 있다.

const sunki = new user('Sunki', 'Kim')

console.log(sunki.getFullName())


// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

const sunki = {
  name: 'sunki',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
sunki.normal() // sunki
sunki.arrow() // undefined


// ES6 Classes

class User {
  constructor (first, last) { 
    this.firstName = first
    this.lastName = last
  }
  getFullName () {
    return `${this.firstName} ${this.lastName}` // 보간법
  }
}

const sunki = new User('Sunki', 'Kim')
console.log(sunki.getFullName())


// 상속 (확장)

class Vehicle {
  constructor (name, Wheel) {
    this.name = name
    this.Wheel = Wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor (name, Wheel) {
    super (name, Wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
  constructor (name, Wheel, license) {
    super (name, Wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)

console.log(myCar)
console.log(daughtersCar)
