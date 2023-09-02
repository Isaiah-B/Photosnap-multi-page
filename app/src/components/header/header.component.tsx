import { Link } from 'react-router-dom';

import { Button } from '../cta/cta.component';

import { ReactComponent as Logo } from '../../assets/shared/logo.svg';

import { HeaderContainer, HeaderContent, HeaderLink, HeaderNav } from './header.styles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to={'/'}>
          <Logo />
        </Link>

        <HeaderNav>
          <HeaderLink to={'/stories'}>Stories</HeaderLink>
          <HeaderLink to={'/features'}>Features</HeaderLink>
          <HeaderLink to={'/pricing'}>Pricing</HeaderLink>
        </HeaderNav>

        <Button buttonType='dark'>Get an invite</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}