import { AppLink } from '../cta/cta.component';

import { ReactComponent as FacebookIcon } from '../../assets/shared/facebook.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/shared/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/shared/twitter.svg';
import { ReactComponent as PintrestIcon } from '../../assets/shared/pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../assets/shared/instagram.svg';

import {
  FooterContainer,
  FooterContent,
  FooterEnd,
  FooterLink,
  FooterLogo,
  FooterNav,
  FooterSocialsList,
  FooterStart,
} from './footer.styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>

        <FooterStart>
          <FooterLogo />

          <FooterSocialsList>
            <FacebookIcon />
            <YoutubeIcon />
            <TwitterIcon />
            <PintrestIcon />
            <InstagramIcon />
          </FooterSocialsList>
        </FooterStart>

        <FooterNav>
          <FooterLink to={'/'}>Home</FooterLink>
          <FooterLink to={'/stories'}>Stories</FooterLink>
          <FooterLink to={'/features'}>Features</FooterLink>
          <FooterLink to={'/pricing'}>Pricing</FooterLink>
        </FooterNav>

        <FooterEnd>
          <AppLink linkType='link-dark' to='#'>
              Get an invite
          </AppLink>

          <p>Copyright {currentYear}. All Rights Reserved</p>
        </FooterEnd>

      </FooterContent>
    </FooterContainer>
  );
}