import { AppLink } from '../cta/cta.component';
import { BannerContainer, BannerContent} from './banner.styles';

export default function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
          <h1>We're in beta. Get your invite today!</h1>

        <AppLink linkType='link-dark' to='#'>Get an invite</AppLink>
      </BannerContent>
    </BannerContainer>
  );
}