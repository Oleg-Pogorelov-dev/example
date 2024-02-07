import { Modal as AntdModal } from 'antd';
import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils/breakpoints';
import Icons from '@/utils/icons';

export const DiagnosisModal = styled(AntdModal)`
  border-radius: 8px;
  overflow: hidden;
  .ant-modal-content {
    max-width: 80vw;
  }
  .ant-modal-body {
    padding: 0;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  min-width: 400px;
  margin-top: 24px;
  gap: 20px;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2.7px;
  align-self: center;
  margin-left: 0px;
  width: 100%;
  border-radius: 2.517px;
  border: 0.956px solid ${({ theme }) => theme.colors.grey1300};

  @media (max-width: ${BREAKPOINTS[2]}px) {
    gap: 6px;
  }
  @media (max-width: ${BREAKPOINTS[4]}px) {
    margin-left: 0;
  }
`;

export const IconsWrapper = styled.div`
  margin-right: 8px;
  top: 20%;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(Icons.Search)`
  margin-right: 9px;
  fill: ${({ theme }) => theme.colors.blue800};
  cursor: pointer;
`;

export const CloseIcon = styled(Icons.Close)`
  margin-left: 9px;
  fill: ${({ theme }) => theme.colors.red900};
  cursor: pointer;
`;

export const Stick = styled.div`
  color: ${({ theme }) => theme.colors.grey1300};
`;

export const ModalList = styled.div`
  margin-top: 24px;
  overflow: auto;
`;

export const ModalItem = styled.div<{ index: number }>`
  display: flex;
  padding: 8px 14px;
  gap: 14px;
  align-items: center;
  background: ${({ theme, index }) =>
    index % 2 ? theme.colors.white : theme.colors.blue1100};
  color: ${({ theme }) => theme.colors.grey600};
`;

export const ModalItemText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
