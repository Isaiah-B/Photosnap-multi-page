import styled from 'styled-components';
import { ButtonBase, LinkBase } from '../cta/cta.styles';
import MEDIA_SIZES from '../../constants';

export const StoryCardLinkWrapper = styled.a`
  text-decoration: none;

  &:hover {
    a { text-decoration: underline; }
  }
`;

export const StoryCardContainer = styled.div<{ $imgsrc: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: relative;
  width: 100%;
  height: 50rem;

  color: white;
  transition: transform 0.3s;

  background:
    linear-gradient(var(--image-gradient)),
    ${({ $imgsrc }) => `url(${$imgsrc})`};

  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 500;

    display: none;
    width: 100%;
    height: 0.6rem;
    background: linear-gradient(var(--main-accent));
  }

  &:hover {
    transform: translateY(-3.6rem);

    &::after {
      display: block;
    }
  }

  @media ${MEDIA_SIZES.width_576} {
    height: auto;
    aspect-ratio: 1 / 1;
  }
`;

export const StoryCardContent = styled.div`
  padding: 4rem;

  h3 {
    margin-bottom: 0.4rem;
  }

  span {
    font-size: 1.3rem;
    font-weight: 400;
  }

  hr {
    width: 100%;
    opacity: 0.25;
    margin-top: 1.6rem;
    margin-bottom: 2rem;
  }

  @media ${MEDIA_SIZES.width_416} {
    padding: 4rem 3.3rem;
  }
`;

export const StoryCardReadStory = styled.div`
  ${ButtonBase};
  ${LinkBase};

  justify-content: space-between;

  color: white;

  svg path {
    stroke: white;
  }
`;
