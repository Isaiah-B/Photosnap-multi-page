import styled from 'styled-components';

export const PricingPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rem;
  
  padding: 12.4rem 16.5rem;
  
`;

export const PricingSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
`;

export const PricingTimeSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  h3 {
    color: black;
    opacity: 0.5;
    transition: all 0.3s;

    &.selected { opacity: 1; }
  }
`;

export const PricingTimeSwitchButton = styled.button`
  position: relative;
  width: 6.4rem;
  height: 3.2rem;
  transition: all 0.3s;

  cursor: pointer;
  border: none;
  border-radius: 100px;
  background-color: var(--light-grey);

  &::before {
    content: "";
    position: absolute;
    left: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
    
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: black;
  }

  &.yearly::before {
    left: 3.6rem;
  }

  &:hover {
    background-color: black;

    &::before {
      background-color: white;
    }
  }
`;

export const PricingCardList = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  width: 100%;
`;
