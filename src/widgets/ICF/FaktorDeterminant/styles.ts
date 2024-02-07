import styled from 'styled-components';

export const FaktorDeterminant = styled.div`
  color: ${({ theme }) => theme.colors.grey1300};
  min-width: 55px;
  height: 30px;
  border-radius: 2.5px;
  border: 1px solid ${({ theme }) => theme.colors.grey1300};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  cursor: pointer;
`;

export const FaktorDeterminantDots = styled.div`
  margin-bottom: 12px;
  font-size: 24px;
`;

export const Code = styled.div`
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.grey600};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
