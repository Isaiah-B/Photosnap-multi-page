import styled from 'styled-components';

export const FeatureGridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 10.4rem;

  width: var(--container-width);
  margin: 0 auto;
  padding: 12rem 0;
`;

