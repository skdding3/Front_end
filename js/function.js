// 함수

function sum(x, y) { // 매개변수
  return x + y
}
const  a = sum(1, 2) // 인수


console.log(a)



function sum() { // 매개변수
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(sum(7, 3))


// 화살표 함수
// () => {} vs function () {}

const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = (x) => { // 축약형으로 가능하다.
  return x * 2
}
console.log('doubleArrow', doubleArrow(7))

const nameArrow = (x) => ({ name: 'Sunki' }) // 축약형은 괄호로 한번 감싸줘야한다.
console.log('nameArrow', nameArrow())


// 즉시 실행 함수
// IIFE Immediately-Invoked Function Expression

const a = 7
function double () {
  console.log(a * 2)
}
double();

(function () {
  console.log(a * 2)
})(); // 즉시 실행 함수는 ;로 끝맺음을 해준다.

(function () {
  console.log(a * 2)
}());


// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

double() // 함수 선언을 줄 아래에다가 하더래도 끌어올려진다.

function double () {
  console.log(a * 2)
}

// 타이머 함수 
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

const timer = setTimeout(() => {
  console.log('Sunki')
},3000) // 3000ms

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

const timer = setInterval(() => {
  console.log('Sunki')
},3000) // 3000ms

// 콜백 (Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간): 일정 시간 후 함수 실행

function Timeout (cb) {
  setTimeout(() => {
    console.log('Sunki!')
    cb()
  }, 3000)
}
Timeout(() => {
  console.log('Done!')
})
