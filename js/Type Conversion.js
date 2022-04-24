// 형 변환 (Type Conversion)

// truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14'

// falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN


const a = 1
const b = '1'

console.log(a === b) // false
console.log(a == b) // true 타입 변화에 대한 비교연산자 이므로 의도치 않게 같은 값으로 처리될 수 있다.
