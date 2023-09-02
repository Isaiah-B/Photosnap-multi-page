import styled from 'styled-components';
import { BodyS } from '../../index.styles';

export const StoriesHero = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  padding: 12.2rem;
  color: white;

  background:
    linear-gradient(180deg, hsla(0, 0%, 0%, 0%), hsla(0, 0%, 0%, 20%)),
    url(../../../assets/stories/desktop/moon-of-appalacia.jpg);
`;

export const StoriesHeroContent = styled.div`
  width: 38.7rem;

  h4 { margin-bottom: 2.4rem; }

  h1 { margin-bottom: 1.6rem; }

  p {
    margin-bottom: 0.8rem;
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