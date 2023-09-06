import { ReactComponent as LinkArrow } from '../../../assets/shared/desktop/arrow.svg';

import useScreenWidth from '../../hooks/useScreenWidth';

import {
  StoryCardContainer,
  StoryCardContent,
  StoryCardLinkWrapper,
  StoryCardReadStory,
} from './story-card.styles';

interface StoryCardProps {
  title: string,
  author: string,
  images: {
    desktop: string,
    mobile: string,
  }
}

export default function StoryCard({ title, author, images }: StoryCardProps) {
  const screenWidth = useScreenWidth();

  const isMobile = screenWidth <= 576;
  const image = isMobile ? images.mobile : images.desktop;

  return (
    <StoryCardLinkWrapper href="#">
      <StoryCardContainer $imgsrc={image}>
        <StoryCardContent>
          <h3>{title}</h3>
          <span>by {author}</span>

          <hr />

          <StoryCardReadStory>
            Read Story
            <LinkArrow />
          </StoryCardReadStory>
        </StoryCardContent>
      </StoryCardContainer>
    </StoryCardLinkWrapper>
  );
}