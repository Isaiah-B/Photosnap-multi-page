import styled from 'styled-components';

export const Row2Container = styled.div<{ reversed: boolean }>`
  display: flex;
  width: 100%;

  flex-flow: ${({ reversed }) => reversed ? 'row-reverse' : 'row'};
`;

export const Row2TextBox = styled.div<{ theme: 'light' | 'dark' }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  width: 43%;
  padding: 0 11.2rem;
  
  color: ${({ theme }) => theme === 'light' ? 'black' : 'white'};
  background-color: ${({ theme }) => theme === 'light' ? 'white' : 'black'};
  `;

export const Row2TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  
  position: relative;

  h1 { margin-bottom: 2.1rem; }

  p { opacity: 0.6; }
  
  a { margin-top: 4.8rem; }

  &::before {
    display: none;

    content: "";
    position: absolute;
    left: -11.2rem;

    width: 6px;
    height: 100%;
    background: linear-gradient(var(--main-accent));
  }

  &.accent::before{
    display: block;
  }
`;

export const Row2ImageWrapper = styled.div`
  img { 
    width: 100%;
    height: 100%;
  }
`;