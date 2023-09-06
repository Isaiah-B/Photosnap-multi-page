import styled from 'styled-components';
import { BodyS } from '../../index.styles';
import MEDIA_SIZES from '../../constants';

export const StoriesHero = styled.div`
  --story-image-url: url(../../../assets/stories/desktop/moon-of-appalacia.jpg);

  position: relative;
  display: flex;
  justify-content: flex-start;

  width: 100%;
  padding: 12.2rem;
  color: white;
  
  background:
    linear-gradient(180deg, hsla(0, 0%, 0%, 0%), hsla(0, 0%, 0%, 20%)),
    var(--story-image-url);
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${MEDIA_SIZES.width_912} {
    --story-image-url: url(../../../assets/stories/tablet/moon-of-appalacia.jpg);
    padding: 12.2rem 4rem;
  }

  @media ${MEDIA_SIZES.width_528} {
    padding: 4.8rem 2.8rem;
    background: black;
  }
`;

export const StoriesHeroContent = styled.div`
  width: 38.7rem;

  h4 { margin-bottom: 2.4rem; }

  h1 { margin-bottom: 1.6rem; }

  p {
    margin-bottom: 2.4rem;
    opacity: 0.6;
  }
  
  span {
    ${BodyS};
    opacity: 0.75;

    &.hero-author { opacity: 1; }
  }
`;

export const StoriesHeroAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  margin-bottom: 2.4rem;
`;

export const StoriesMobileImage = styled.div`
  display: none;

  background:
    linear-gradient(180deg, hsla(0, 0%, 0%, 0%), hsla(0, 0%, 0%, 20%)),
    url(../../../assets/stories/mobile/moon-of-appalacia.jpg);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;
  aspect-ratio: 1 / 0.85;

  @media ${MEDIA_SIZES.width_528} {
    display: block;
  }
`;
