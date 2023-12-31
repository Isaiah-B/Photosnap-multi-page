import { Link } from 'react-router-dom';

import { AppLink } from '../cta/cta.component';

import { ReactComponent as FacebookIcon } from '../../assets/shared/desktop/facebook.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/shared/desktop/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/shared/desktop/twitter.svg';
import { ReactComponent as PintrestIcon } from '../../assets/shared/desktop/pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../assets/shared/desktop/instagram.svg';

import {
  FooterAppLinkWrapper,
  FooterContainer,
  FooterContent,
  FooterCopyright,
  FooterLink,
  FooterLogo,
  FooterNav,
  FooterSocialsList,
} from './footer.styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo />

        <FooterSocialsList>
          <Link to={'#'} aria-label='facebook'><FacebookIcon /></Link>
          <Link to={'#'} aria-label='youtube'><YoutubeIcon /></Link>
          <Link to={'#'} aria-label='twitter'><TwitterIcon /></Link>
          <Link to={'#'} aria-label='pintrest'><PintrestIcon /></Link>
          <Link to={'#'} aria-label='instagram'><InstagramIcon /></Link>
        </FooterSocialsList>
        
        <FooterNav>
          <FooterLink to={'/'}>Home</FooterLink>
          <FooterLink to={'/stories'}>Stories</FooterLink>
          <FooterLink to={'/features'}>Features</FooterLink>
          <FooterLink to={'/pricing'}>Pricing</FooterLink>
        </FooterNav>

        <FooterAppLinkWrapper>
          <AppLink linkType='link-dark' to='#'>
              Get an invite
          </AppLink>
        </FooterAppLinkWrapper>

        <FooterCopyright>Copyright {currentYear}. All Rights Reserved</FooterCopyright>

      </FooterContent>
    </FooterContainer>
  );
}