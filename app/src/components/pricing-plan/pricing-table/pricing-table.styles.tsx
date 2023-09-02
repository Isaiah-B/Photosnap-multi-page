import styled from 'styled-components';

export const PricingTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.6rem;

  width: 73.1rem;
`;

export const PricingTableComponent = styled.table`
  width: 100%;

  border-collapse: collapse;

  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 2px;
  text-transform: uppercase;

  tr {
    border-bottom: 1px solid var(--light-grey);
  }
  tr:first-child { border-bottom: 1px solid black; }
  
  th, td {
    width: 19%;
    padding: 2.4rem 0;
    text-align: center;

    svg { vertical-align: middle; }
  }

  th:first-child,
  td:first-child {
    width: auto;
    padding-left: 2.4rem;
    text-align: left;
  }
`;