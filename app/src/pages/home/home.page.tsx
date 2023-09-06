import Row2 from '../../components/row-2/row-2.component';
import StoryCard from '../../components/story-card/story-card.component';
import Feature from '../../components/feature/feature.component';
import StoriesGrid from '../../components/stories-grid/stories-grid.component';
import FeatureGrid from '../../components/feature-grid/feature-grid.component';

import { ReactComponent as ResponsiveIcon } from '../../../assets/features/desktop/responsive.svg';
import { ReactComponent as NoLimitIcon } from '../../../assets/features/desktop/no-limit.svg';
import { ReactComponent as EmbedIcon } from '../../../assets/features/desktop/embed.svg';

import storyList from '../../../data';


export default function HomePage() {
  return (
    <main>
      <Row2
        title='Create and share your photo stories.'
        description='Photosnap is a platform for photographers and visual storytellers. 
          We make it easy to share photos, tell stories and connect with others.'
        linkText='Get an invite'
        theme='dark'
        images={{
          desktop: '../../../assets/home/desktop/create-and-share.jpg',
          tablet: '../../../assets/home/tablet/create-and-share.jpg',
          mobile: '../../../assets/home/mobile/create-and-share.jpg',
        }}
        accent
      />

      <Row2
        title='Beautiful stories every time'
        description='We provide design templates to ensure your stories look terrific. 
          Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'
        linkText='View the stories'
        theme='light'
        images={{
          desktop: '../../../assets/home/desktop/beautiful-stories.jpg',
          tablet: '../../../assets/home/tablet/beautiful-stories.jpg',
          mobile: '../../../assets/home/mobile/beautiful-stories.jpg',
        }}
        reversed
      />

      <Row2
        title='Designed for everyone'
        description='Photosnap can help you create stories that resonate with your audience. 
          Our tool is designed for photographers of all levels, brands, businesses you name it.'
        linkText='View the stories'
        theme='light'
        images={{
          desktop: '../../../assets/home/desktop/designed-for-everyone.jpg',
          tablet: '../../../assets/home/tablet/designed-for-everyone.jpg',
          mobile: '../../../assets/home/mobile/designed-for-everyone.jpg',
        }}
      />

      <StoriesGrid>
        {
          storyList.slice(0,4).map((storyData) => (
            <StoryCard
              key={storyData.title}
              title={storyData.title}
              author={storyData.author}
              images={storyData.images}
            />
          ))
        }
      </StoriesGrid>

      <FeatureGrid preview>
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
            YouTube videos, Google Maps, and more. '
        />
      </FeatureGrid>
    </main>
  );
}