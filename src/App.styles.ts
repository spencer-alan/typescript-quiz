import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/adrian-infernus.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sixing: border-box;
    font-family: 'Roboto mono', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff
  }

  .score {
    color: #fff;
    font-size:2rem;
    margin: 0;
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffccff);
    border: 2px solid;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;