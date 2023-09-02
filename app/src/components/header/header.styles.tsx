import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLinkBase } from '../../index.styles';

export const HeaderContainer = styled.header`
  padding: 1.6rem 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: var(--container-width);
  margin: 0 auto;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.6rem;
`;

export const HeaderLink = styled(Link)`
  ${NavLinkBase}
  color: black;
`;
