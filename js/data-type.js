import getType from './getType' 
// export default function getType(data) { return Object.prototype.toString.call(data).slice(8, -1)

console.log(typeof 'Hello world!') // string
console.log(typeof 123) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // Object
console.log(typeof {}) // Object
console.log(typeof []) // Object


console.log(getType(123)) // Number
console.log(getType(false)) // Boolean
console.log(getType(null)) // Null
console.log(getType({})) // Object
console.log(getType([])) // Array


