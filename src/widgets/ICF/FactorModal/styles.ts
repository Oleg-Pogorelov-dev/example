import { Modal as AntdModal } from 'antd';
import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils/breakpoints';
import Icons from '@/utils/icons';

export const FactorModal = styled(AntdModal)`
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
  min-width: 400px;
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

export const ModalItemValue = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 16.075px;
  font-style: normal;
  font-weight: 550;
  line-height: 18px;
`;

export const ListContainer = styled.div`
  margin-top: 24px;
  overflow: auto;
`;

export const Qualifier = styled.div<{ isBlue: boolean }>`
  padding: 10px 3px;
  background: ${({ theme, isBlue }) =>
    isBlue ? theme.colors.blue1100 : theme.colors.white};
  cursor: pointer;
`;
