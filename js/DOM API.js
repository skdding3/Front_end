const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`) // 보간법 0부터 시작하는 구조라 + 1로 1부터 시작하게 넣어줄수도 있겠다.
  console.log(index, boxEl);
});
