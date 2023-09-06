import styled from 'styled-components';
import MEDIA_SIZES from '../../constants';

export const FeatureGridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 10.4rem;

  width: var(--container-width);
  margin: 0 auto;
  padding: 12rem 0;

  @media ${MEDIA_SIZES.width_1008} {
    &:not(.preview) {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 7.2rem;
    }
  }

  @media ${MEDIA_SIZES.width_912} {
    &.preview {
      grid-template-columns: 1fr;
      row-gap: 8rem;
      
      padding: 12rem 15%;
    }
  }

  @media ${MEDIA_SIZES.width_576} {
    padding: 6.4rem 3.2rem;

    &:not(.preview) {
      grid-template-columns: 1fr;
      row-gap: 5.6rem;
    }
  }
`;

