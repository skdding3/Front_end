// 변수 유효범위 (Variable Scope)
// var, let, const

function scope() {
  if (true) {
    const a = 123
    console.log(a) // 유효범위 성립 
  }
  // 여기에 console.log(a) 를 넣으면 a 유효범위 성립이 되지 않는다. 
}
scope() // const let 블록 레벨


function scope() {
  if (true) {
    var a = 123
    console.log(a) // 유효범위 성립 
  }
  console.log(a) // var는 유효범위가 적용된다.
}
scope() // var 함수 레벨
