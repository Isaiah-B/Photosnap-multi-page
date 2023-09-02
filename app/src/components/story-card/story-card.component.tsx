import { AppLink } from '../cta/cta.component';

import { StoryCardContainer, StoryCardContent, StoryCardLinkWrapper } from './story-card.styles';

interface StoryCardProps {
  title: string,
  author: string,
  images: {
    desktop: string,
    tablet: string,
    mobile: string,
  }
}

export default function StoryCard({ title, author, images }: StoryCardProps) {
  return (
    <StoryCardLinkWrapper href="#">
      <StoryCardContainer $imgsrc={images.desktop}>
        <StoryCardContent>
          <h3>{title}</h3>
          <span>by {author}</span>

          <hr />

          <AppLink to={'#'} linkType='link-dark'>Read story</AppLink>
        </StoryCardContent>
      </StoryCardContainer>
    </StoryCardLinkWrapper>
  );
}