import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
import { NavLinkBase } from '../../index.styles';

export const FooterContainer = styled.footer`
  padding: 6.4rem 0;
  color: white;
  background-color: black;
`;

export const FooterContent = styled.div`
  display: flex;

  width: var(--container-width);
  margin: 0 auto;
`;

export const FooterStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-right: 10.9rem;
`;

export const FooterLogo = styled(Logo)`
  & path:first-child {
    fill: white;
  }
`;

export const FooterSocialsList = styled.div`
  display: flex;
  gap: 1.3rem;
  
  svg {
    cursor: pointer;

    &:not(:hover) path {
      fill: white;
    }
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.9rem;
`;

export const FooterLink = styled(Link)`
  ${NavLinkBase};
  color: white;
`;

export const FooterEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  margin-left: auto;

  p { opacity: 0.5; }
`;