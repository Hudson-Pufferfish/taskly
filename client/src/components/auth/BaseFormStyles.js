import styled from "styled-components";

export const LogoContainer = styled.div`
  text-align: center;
  background-color: #f9fafc;
`;

export const LogoImg = styled.img`
  height: 50px;
  margin: 37px 0px 18px;
`;

export const FormImg = styled.div`
  &#login-img {
    &-container {
      height: 211px;
      background-color: #f9fafc;
    }
    &-1-container {
      position: fixed;
      left: 0px;
      bottom: 0px;
    }
    &-2-container {
      /* border: 1px solid red; */

      position: absolute;
      right: 0px;
      bottom: 0px;
    }
  }
`;
