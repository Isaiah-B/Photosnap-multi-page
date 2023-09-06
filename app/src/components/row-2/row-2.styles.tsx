import styled from 'styled-components';
import MEDIA_SIZES from '../../constants';

export const Row2Container = styled.div<{ reversed: boolean }>`
  display: flex;
  width: 100%;

  flex-flow: ${({ reversed }) => reversed ? 'row-reverse' : 'row'};

  @media ${MEDIA_SIZES.width_656} {
    flex-direction: column;
    flex-flow: column-reverse;
  }
`;

export const Row2TextBox = styled.div<{ theme: 'light' | 'dark' }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  width: 43%;
  min-width: 49.4rem;
  
  color: ${({ theme }) => theme === 'light' ? 'black' : 'white'};
  background-color: ${({ theme }) => theme === 'light' ? 'white' : 'black'};

  @media ${MEDIA_SIZES.width_768} {
    width: 80%;
    min-width: 37.5rem;
  }

  @media ${MEDIA_SIZES.width_656} {
    width: 100%;
    min-width: auto;
  }
`;

// Allows for the accent bar on larger displays
export const Row2TextContentWrapper = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  width: 100%;
  height: fit-content;

  &::before {
    display: none;

    content: "";
    position: absolute;
    left: 0;

    width: 6px;
    height: 100%;
    background: linear-gradient(var(--main-accent));
  }

  &.accent::before{
    display: block;
  }

  @media ${MEDIA_SIZES.width_768} {
    padding: 0 2.4rem 0 3.2rem;
  }

  @media ${MEDIA_SIZES.width_656} {
    padding: 7.2rem 2.6rem;

    &.accent::before {
      top: 0;
      left: 3.3rem;

      width: 12.8rem;
      height: 6px;
    }
  }
`;

export const Row2TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  
  max-width: 38rem;
  
  h1 { margin-bottom: 2.1rem; }

  p { opacity: 0.6; }
  
  a { margin-top: 4.8rem; }

  @media ${MEDIA_SIZES.width_656} {
    max-width: none;
  }
`;

export const Row2ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  flex-grow: 1;
  height: 60rem;

  min-width: 24.7rem;

  img {
    position: absolute;
    z-index: -1;
    
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${MEDIA_SIZES.width_768} {
    height: 49rem;
  }

  @media ${MEDIA_SIZES.width_656} {
    height: 68vw;

    img {
      height: auto;
    }
  }
`;