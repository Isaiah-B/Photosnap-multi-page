import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLinkBase } from '../../index.styles';
import MEDIA_SIZES from '../../constants';

export const HeaderContainer = styled.header`  
  width: 100%;
  padding: 1.6rem 0;

  @media ${MEDIA_SIZES.width_768} {
    padding: 2.8rem 2.6rem;
  }

  &::before {
    display: none;

    content: "";
    position: fixed;
    inset: 0;
    top: 7.5rem;
    z-index: 100;
    background-color: hsla(0, 0%, 0%, 50%);
  }

  &.open {
    &::before {
      display: block;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: var(--container-width);
  margin: 0 auto;

  transition: all 0.4s;

  .mobile & {
    flex-direction: column;
    
    position: absolute;
    top: -100%;
    left: 0;
    z-index: 500;
    
    width: 100%;
    padding: 3.2rem;
    background-color: white;

    opacity: 0;
    pointer-events: none;

    hr {
      width: 100%;
      margin: 2rem 0;
    }
  }

  .mobile.open & {
    top: 7.4rem;
    opacity: 1;
    pointer-events: all;
  }

  @media ${MEDIA_SIZES.width_416} {
    button { width: 100%; }
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.6rem;

  .mobile & {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const HeaderLink = styled(Link)`
  ${NavLinkBase}
  color: black;

  .mobile & {
    font-size: 1.5rem;
  }
`;

export const MobileHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: var(--container-width);
  margin: 0 auto;
`;

export const HeaderMobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: none;
  background: none;
  cursor: pointer;
`;