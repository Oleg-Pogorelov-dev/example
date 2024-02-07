import styled from 'styled-components';

import NameCell from '@/components/Cells/Name';

export const Title = styled.span`
  font-weight: 600;
`;

export const Patient = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 12px;
  column-gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  ${Title} {
    text-transform: uppercase;
  }
`;

export const DateOfbirth = styled.div`
  margin-right: auto;
  @media (max-width: 580px) {
    margin-right: 0;
  }
`;

export const StyledNameCell = styled(NameCell)`
  p {
    font-weight: 600;
  }
`;
