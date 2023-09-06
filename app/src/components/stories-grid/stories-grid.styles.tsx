import styled from 'styled-components';
import MEDIA_SIZES from '../../constants';

export const StoriesGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(24.8rem, 1fr));
  grid-template-rows: auto;

  width: 100%;

  @media ${MEDIA_SIZES.width_1008} {
    grid-template-columns: repeat(2, minmax(28rem, 1fr));
  }

  @media ${MEDIA_SIZES.width_576} {
    grid-template-columns: 1fr;
  }
`;
