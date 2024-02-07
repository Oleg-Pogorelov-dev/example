import styled from 'styled-components';

import Checkbox from '@/components/Inputs/Checkbox';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';

export const Title = styled.span`
  font-weight: 600;
`;

export const ProcedureItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
`;

export const CustomCheckbox = styled(Checkbox)<{ value: boolean }>`
  position: relative;
  background: ${({ theme, value }) =>
    value ? theme.colors.blue900 : theme.colors.white};
  border-radius: 50%;
  & input {
    &::before {
      border-bottom: 3px solid white;
      border-right: 3px solid white;
    }
  }
  & div {
    background: white;
    opacity: 1;
    position: absolute;
    right: 7px;
    top: 4px;
    width: 7px;
    height: 12px;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(45deg);
    transition: all 0.3s ease 0s;
  }
`;

export const CollapsePanelWrapper = styled(CollapsePanel)``;

export const CollapsePanelHeader = styled.div`
  margin-left: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey600};
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.colors.grey600};
  justify-content: end;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 45px;
  gap: 10px;
`;

export const ProceduresStatus = styled.div`
  display: flex;
  gap: 23px;
`;

export const TextInterpritation = styled.div`
  flex: 1;
`;

export const Time = styled.div`
  flex: 1;
`;

export const Status = styled.div`
  flex: 2;
`;
