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
