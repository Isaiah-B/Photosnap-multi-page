import { createGlobalStyle, css } from "styled-components";

export const MEDIA_SIZES = {
  width_1440: '(max-width: 90em)',
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --container-width: 110rem;
    --light-grey: hsl(0, 0%, 87%);
    --image-gradient: hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.66);
    --main-accent: 
    27deg, hsl(28, 100%, 79%) 0%,
      hsl(329, 36%, 59%) 43.29%, 
      hsl(229, 100%, 68%) 83.33%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100vh;
    font-size: 10px;
  }

  body {
    min-height: 100%;

    font-family: 'DM Sans', sans-serif;
    font-weight: 700;

    background-color: white;
  }

  h1 {
    font-size: 4rem;
    line-height: 4.8rem;
    letter-spacing: 4.2px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.5rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
  }

  h4 {
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem;
  }
`;

export const NavLinkBase = css`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    opacity: 0.3;
  }
`;

export const BodyS = css`
  font-size: 1.3rem;
  font-weight: 400;
`;
