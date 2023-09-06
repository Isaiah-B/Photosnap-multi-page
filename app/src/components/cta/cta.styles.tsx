import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';

export const ButtonBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: none;
  border: none;
  cursor: pointer;

  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  padding: 1.2rem 2.4rem;
`;

export const LinkBase = css`
  justify-content: start;
  gap: 1.6rem;
  
  padding: 0;
  text-decoration: none;
  
  background: transparent;

  &:hover {
    text-decoration: underline;
    background: transparent;
  }  
`;

export const ButtonDark = styled.button`
  ${ButtonBase};

  color: white;
  background-color: black;

  &:hover {
    color: black;
    background-color: var(--light-grey);
  }
`;

export const ButtonLight = styled.button`
  ${ButtonBase};
  
  color: black;
  background-color: white;

  &:hover {
    color: black;
    background-color: var(--light-grey);
  }
`;

export const LinkLight = styled(Link)`
  ${ButtonBase};
  ${LinkBase};
  
  color: black;

  svg path {
    stroke: black;
  }
`;

export const LinkDark = styled(Link)`
  ${ButtonBase};
  ${LinkBase};
  
  color: white;

  svg path {
    stroke: white;
  }
`;

