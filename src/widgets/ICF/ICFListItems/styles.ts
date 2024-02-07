import styled from 'styled-components';

import CollapsePanel from 'antd/lib/collapse/CollapsePanel';

export const ModalItemCode = styled.div`
  display: flex;
  padding: 10px 25px;
  align-items: center;
  padding: 15px 25px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const ModalItemValue = styled.div<{ selectable?: boolean }>`
  color: ${({ theme }) => theme.colors.grey600};
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 16.075px;
  font-style: normal;
  font-weight: 550;
  line-height: 18px;
  user-select: none;
  cursor: ${({ selectable }) => selectable && 'pointer'};
`;

export const CollapseWrapper = styled.div`
  .ant-collapse-item > .ant-collapse-header {
    align-items: center;
    padding: 10px 12px;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0 16px;
  }
  .ant-collapse-item,
  .ant-collapse,
  .ant-collapse-content {
    border: none;
  }
`;

export const CollapsePanelWrapper = styled(CollapsePanel)`
  background: ${({ theme }) => theme.colors.white};
`;

export const ArrowWrapper = styled.div<{ isActive?: boolean }>`
  transition: 0.3s ease;
  transform: rotate(${({ isActive }) => (isActive ? 90 : 0)}deg);
`;
