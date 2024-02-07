import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'Inter',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.02em;
  }
  #root {
    display: flex;
    width: 100%;
    height: 100%;
  }
  
  body p {
    margin: 0;
  }
  button {
    cursor: pointer;
  }
  button,
  input {
    border: none;
    outline: none;
    font-family: inherit;
    letter-spacing: inherit;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    transition: background-color 100000s ease-in-out 0s;
  }
  svg{
    flex-shrink: 0;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
    height: 6px;
    transition: 1s;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
    :hover {
      background: rgba(0, 0, 0, 0.4);
    }
    :active {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;
