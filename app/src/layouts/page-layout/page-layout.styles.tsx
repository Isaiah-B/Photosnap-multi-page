import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const PageLayoutContainer = styled.div`
  width: 144rem;
  margin: 0 auto;

  @media ${MEDIA_SIZES.width_1440} {
    width: 100%;
  }
`;
