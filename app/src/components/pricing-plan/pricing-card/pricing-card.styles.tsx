import styled, { css } from 'styled-components';
import MEDIA_SIZES from '../../../constants';

const PricingCardBase = css`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  row-gap: 4rem;

  width: 100%;
  text-align: center;

  h2 { margin-bottom: 1.8rem; }

  p { opacity: 0.6; }

  button { width: 100%; }

  @media ${MEDIA_SIZES.width_1088} {
    grid-template-columns: 1fr 1fr;
    align-items: initial;

    padding: 4rem;
  }

  @media ${MEDIA_SIZES.width_656} {
    grid-template-columns: 2fr 1fr;
  }

  @media ${MEDIA_SIZES.width_576} {
    align-items: center;
    grid-template-columns: 1fr;
  }

  @media ${MEDIA_SIZES.width_416} {
    padding: 5.6rem 2rem 4rem;
  }
`;

export const PricingCardSmall = styled.div`
  ${PricingCardBase};

  padding: 5.6rem 4rem 4rem;

  color: black;
  background-color: hsl(0, 0%, 96%);
`;

export const PricingCardLarge = styled.div`
  ${PricingCardBase};

  position: relative;
  padding: 8.8rem 4rem 7rem;

  color: white;
  background-color: black;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 0.6rem;

    background: linear-gradient(var(--main-accent));
  }

  @media ${MEDIA_SIZES.width_1088} {
    &::before {
      width: 6px;
      height: 100%;
    }
  }

  @media ${MEDIA_SIZES.width_576} {
    &::before {
      width: 100%;
      height: 6px;
    }
  }
`;

export const PricingCardHead = styled.div`
  @media ${MEDIA_SIZES.width_1088} {
    grid-column: 1;
    grid-row: 1;
  
    text-align: left;
  }

  @media ${MEDIA_SIZES.width_576} {
    grid-row: 1;

    text-align: center;
  }
`;

export const PricingCardPrice = styled.div`
  @media ${MEDIA_SIZES.width_1088} {
    grid-column: 2;
    grid-row: 1;
  
    text-align: right;
  }

  @media ${MEDIA_SIZES.width_576} {
    grid-column: 1;
    grid-row: 2;

    text-align: center;
  }
`;

export const PricingCardButton = styled.div`
  @media ${MEDIA_SIZES.width_1088} {
    grid-column: 1;
    grid-row: 2;
  }

  @media ${MEDIA_SIZES.width_576} {
    grid-row: 3;    
  }
`;

