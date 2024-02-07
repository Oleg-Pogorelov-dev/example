import styled from 'styled-components';

export const FilterDropdownWrapper = styled.div`
  padding: 24px;
  border-radius: 10px;
`;

export const FilterDropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ClearFilter = styled.div`
  color: ${({ theme }) => theme.colors.blue1000};
  font-family: HelveticaNeueCyr;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
  cursor: pointer;
`;

export const Close = styled.div`
  cursor: pointer;
`;

export const ContainerFilters = styled.div`
  margin-top: 25px;
  max-height: 300px;
  overflow: auto;
`;

export const FilterItem = styled.div`
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

export const FilterValue = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  font-family: HelveticaNeueCyr;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;
