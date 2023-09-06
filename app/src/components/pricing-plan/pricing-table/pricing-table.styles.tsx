import styled from 'styled-components';
import MEDIA_SIZES from '../../../constants';

export const PricingTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.6rem;

  width: 73.1rem;

  @media ${MEDIA_SIZES.width_1088} {
    width: 100%;
  }
`;

export const PricingTableComponent = styled.tbody`
  display: table;
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
    padding: 2.3rem 0 1rem;
    text-align: center;

    svg { vertical-align: middle; }
  }

  th:first-child,
  td:first-child {
    width: auto;
    padding-left: 2.4rem;
    text-align: left;
  }

  @media ${MEDIA_SIZES.width_656} {
    th:first-child {
      padding: 0 0 2.3rem;
    }

    tr:first-child th:not(:first-child) {
      display: none;
    }

    tr:not(:first-child) {
      td:first-child {
        display: none;
      }

      td:not(:first-child) {
        position: relative;
        width: 33%;
        text-align: start;
        padding: 2.3rem 0;

        &::before {
          position: absolute;
          transform: translateY(-1.8rem);

          font-size: 1rem;
          opacity: 0.5;
        }

        &:nth-child(2)::before {
          content: "Basic";
        }
        &:nth-child(3)::before {
          content: "Pro";
        }
        &:nth-child(4)::before {
          content: "Business";
        }
      }
    }
  }
`;

export const MobileTableHead = styled.th`
  display: none;
  width: max-content !important;
  text-align: left !important;
  padding: 2.3rem 0 1rem !important;

  @media ${MEDIA_SIZES.width_656} {
    display: table-cell;
  }
`;