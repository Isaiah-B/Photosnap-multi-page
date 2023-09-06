import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '../cta/cta.component';

import { ReactComponent as Logo } from '../../../assets/shared/desktop/logo.svg';
import { ReactComponent as HamburgurIcon } from '../../../assets/shared/mobile/menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/shared/mobile/close.svg';

import useScreenWidth from '../../hooks/useScreenWidth';

import {
  HeaderContainer,
  HeaderContent,
  HeaderLink,
  HeaderMobileMenuButton,
  HeaderNav,
  MobileHeaderContent,
} from './header.styles';


interface MobileHeaderProps {
  menuOpen: boolean,
  handleMobileMenu: () => void,
}

function MobileHeader({ menuOpen, handleMobileMenu }: MobileHeaderProps) {
  return (
    <MobileHeaderContent>
      <Link to={'/'}>
        <Logo />
      </Link>

      <HeaderMobileMenuButton onClick={() => handleMobileMenu()}>
        {
          menuOpen
            ? <CloseIcon />
            : <HamburgurIcon />
        }
      </HeaderMobileMenuButton>
    </MobileHeaderContent>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const screenWidth = useScreenWidth();

  const isMobile = screenWidth <= 768;

  const { pathname } = useLocation();

  // Prevent scrolling while mobile menu is open
  if (menuOpen) document.documentElement.style.overflowY = 'hidden';
  else document.documentElement.style.overflowY = 'auto';
  
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <HeaderContainer className={`${isMobile ? 'mobile' : ''} ${menuOpen ? 'open' : ''}`}>
      {
        isMobile
          ? <MobileHeader
            menuOpen={menuOpen}
            handleMobileMenu={() => setMenuOpen(!menuOpen)}
          />
          : null
      }

      <HeaderContent>
        {
          !isMobile
            ? (
              <Link to={'/'}>
                <Logo />
              </Link>
            )
            : null
        }

        <HeaderNav>
          <HeaderLink to={'/stories'}>Stories</HeaderLink>
          <HeaderLink to={'/features'}>Features</HeaderLink>
          <HeaderLink to={'/pricing'}>Pricing</HeaderLink>
        </HeaderNav>

        {
          isMobile
            ? <hr />
            : null
        }
        
        <Button buttonType='dark'>Get an invite</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}