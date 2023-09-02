import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  padding: 6.8rem 16.5rem;

  background: url(../../../assets/shared/desktop/bg-beta.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    width: 38%;
    color: white;
  }
`;