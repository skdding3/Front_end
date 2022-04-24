// 산술 연산자(arithmetic operator)

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5) // 나머지


// 할당 연산자(assignment operator)

let a = 2
a = a + 1 // 재할당 const는 재할당 불가!
// a += 1 도 같은 내용

console.log(a)

// 비교 연산자(conparison operator)

const a = 1
const b = 1

console.log(a === b)

function isEqual(x,y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

const c = 13
const d = 13

console.log(c === d) // true



// 논리 연산자 (logical operator)

const a = 1 === 1
const b = 'AB' === 'AB'
const c = false

console.log(a)
console.log(b)
console.log(c)

console.log('&&: ', (a && b && c) ) // 셋 중 한개라도 false를 가지면 false로 출력
console.log('||: ', a || b || c ) // or 연산자 이므로 하나라도 true가 성립하면 true를 가져온다.
console.log('!: ', !a) // 부정 연산자 이므로 반대값이 나온다.


// 삼항 연산자 (ternary operator)

const a = 1 < 2

if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓') // if else 문을 한줄로 표현 가능하며, 한줄로 표현하기에 코드 가독성을 높여준다.

