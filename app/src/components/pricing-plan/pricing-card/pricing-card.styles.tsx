import styled, { css } from 'styled-components';

const PricingCardBase = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  text-align: center;

  h2 { margin-bottom: 1.8rem; }

  p { opacity: 0.6; }

  button { width: 100%; }
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
`;
