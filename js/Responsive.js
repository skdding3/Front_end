import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    } ;
  `;
};


// 크로스 브라우징을 고려한 반응형 웹 css 작업. 
