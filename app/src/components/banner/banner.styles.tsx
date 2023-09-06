import styled from 'styled-components';
import MEDIA_SIZES from '../../constants';

export const BannerContainer = styled.div`
  --banner-image-url: url(../../../assets/shared/desktop/bg-beta.jpg);

  position: relative;
  width: 100%;
  padding: 6.8rem 16.5rem;

  background:
    linear-gradient(var(--image-gradient)),
    var(--banner-image-url);

  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;

    width: 0.6rem;
    height: 100%;
    background: linear-gradient(var(--main-accent));
  }

  @media ${MEDIA_SIZES.width_1200} {
    padding: 6.8rem 4rem;
  }

  @media ${MEDIA_SIZES.width_912} {
    --banner-image-url: url(../../../assets/shared/tablet/bg-beta.jpg);
  }

  @media ${MEDIA_SIZES.width_416} {
    --banner-image-url: url(../../../assets/shared/mobile/bg-beta.jpg);

    padding: 6.4rem 2.6rem;

    &::before {
      left: 3.2rem;
      width: 12.8rem;
      height: 6px;
    }
  }
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    width: 41.6rem;
    color: white;
  }

  @media ${MEDIA_SIZES.width_768} {
    h1 { width: 34.8rem; }
  }
  
  @media ${MEDIA_SIZES.width_656} {
    flex-direction: column;
    align-items: start;
    gap: 2.4rem;
  }

  @media ${MEDIA_SIZES.width_416} {
    h1 { width: 100%; }
  }
`;