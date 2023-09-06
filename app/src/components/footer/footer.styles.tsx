import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/shared/desktop/logo.svg';
import MEDIA_SIZES from '../../constants';

import { NavLinkBase } from '../../index.styles';

export const FooterContainer = styled.footer`
  padding: 6.4rem 0;
  color: white;
  background-color: black;

  @media ${MEDIA_SIZES.width_656} {
    padding: 5.6rem 0;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 28.4rem 1fr auto;
  grid-template-rows: 1fr auto 1fr;

  width: var(--container-width);
  margin: 0 auto;

  @media ${MEDIA_SIZES.width_912} {
    grid-template-columns: 24.4rem 1fr auto;
    grid-template-rows: 2fr 3.3fr 1fr;
  }

  @media ${MEDIA_SIZES.width_656} {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.6fr 1.1fr 1.2fr 0.5fr;

    justify-items: center;
  }
`;

export const FooterLogo = styled(Logo)`
  grid-row: 1;
  
  & path:first-child {
    fill: white;
  }
`;

export const FooterSocialsList = styled.div`
  display: flex;
  gap: 1.3rem;
  
  grid-row: 3;
  align-self: flex-end;

  svg {
    cursor: pointer;

    &:not(:hover) path {
      fill: white;
    }
  }

  @media ${MEDIA_SIZES.width_656} {
    grid-row: 2;
    align-self: auto;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.9rem;

  grid-column: 2;
  grid-row: 1 / -1;

  &.footer-tablet {
    display: none;

    flex-direction: row;
    gap: 2.6rem;

    margin: 3.2rem 0 7.2rem;
  }

  @media ${MEDIA_SIZES.width_768} {
    flex-direction: row;

    grid-column: 1;
    grid-row: 2;
  }

  @media ${MEDIA_SIZES.width_656} {
    flex-direction: column;
    align-items: center;

    grid-row: 3;
  }
`;

export const FooterLink = styled(Link)`
  ${NavLinkBase};
  color: white;
`;

export const FooterAppLinkWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;

  @media ${MEDIA_SIZES.width_656} {
    grid-column: 1;
    grid-row: 4;

    align-self: flex-end;
  }
`;

export const FooterCopyright = styled.p`
  grid-column: 3;
  grid-row: 3;
  align-self: flex-end;
  
  opacity: 0.5;

  @media ${MEDIA_SIZES.width_656} {
    grid-column: 1;
    grid-row: 5;
  }
`;