import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 15px;
  border: 1px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || 'row'};
  img {
    width: 100%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`