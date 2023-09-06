import styled from 'styled-components';
import MEDIA_SIZES from '../../constants';

export const PageLayoutContainer = styled.div`
  width: 142rem;
  margin: 0 auto;

  @media ${MEDIA_SIZES.width_1440} {
    width: 100%;
  }
`;
