import FeatureGrid from "../../components/feature-grid/feature-grid.component";
import Feature from "../../components/feature/feature.component";
import Row2 from "../../components/row-2/row-2.component";
import Banner from "../../components/banner/banner.component";

import { ReactComponent as ResponsiveIcon} from "../../../assets/features/desktop/responsive.svg";
import { ReactComponent as NoLimitIcon} from "../../../assets/features/desktop/no-limit.svg";
import { ReactComponent as EmbedIcon} from "../../../assets/features/desktop/embed.svg";
import { ReactComponent as CustomDomainIcon} from "../../../assets/features/desktop/custom-domain.svg";
import { ReactComponent as ExposureIcon} from "../../../assets/features/desktop/boost-exposure.svg";
import { ReactComponent as DragDropIcon} from "../../../assets/features/desktop/drag-drop.svg";

export default function FeaturesPage() {
  return (
    <main>
      <Row2
        title="Features"
        description="We make sure all of our features are designed to be loved by 
          every aspiring and even professional photograpers who wanted to share their stories."
        images={{
          desktop: '../../../assets/features/desktop/hero.jpg',
          tablet: '../../../assets/features/tablet/hero.jpg',
          mobile: '../../../assets/features/mobile/hero.jpg',
        }}
        theme="dark"
        accent
      />

      <FeatureGrid>
        <Feature
          Icon={ResponsiveIcon}
          title='100% Responsive'
          description='No matter which the device you’re on, our site is fully 
            responsive and stories look beautiful on any screen.'
        />

        <Feature
          Icon={NoLimitIcon}
          title='No Photo Upload Limit'
          description='Our tool has no limits on uploads or bandwidth. 
            Freely upload in bulk and share all of your stories in one go.'
        />

        <Feature
          Icon={EmbedIcon}
          title='Available to Embed'
          description='Embed Tweets, Facebook posts, Instagram media, Vimeo or 
            YouTube videos, Google Maps, and more.'
        />

        <Feature
          Icon={CustomDomainIcon}
          title='Custom Domain'
          description='With Photosnap subscriptions you can host your stories on your own 
            domain. You can also remove our branding!'
        />

        <Feature
          Icon={ExposureIcon}
          title='Boost Your Exposure'
          description='Users that viewed your story or gallery can easily get notifed of 
            new and featured stories with our built in mailing list.'
        />

        <Feature
          Icon={DragDropIcon}
          title='Drag & Drop Image'
          description='Easily drag and drop your image and get beautiful shots everytime. 
            No over the top tooling to add friction to creating stories.'
        />
      </FeatureGrid>

      <Banner />
    </main>
  );
}