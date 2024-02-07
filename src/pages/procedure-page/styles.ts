import styled from 'styled-components';

import Icons from '@/utils/icons';

export const Title = styled.span`
  font-weight: 600;
`;
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey300};
  font-size: 14px;
  div {
    ::-webkit-scrollbar {
      width: 8px;
      height: 6px;
      transition: 1s;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.1);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.2);
      :hover {
        background: rgba(0, 0, 0, 0.4);
      }
      :active {
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export const TableContainer = styled.div`
  overflow-y: auto;
  position: relative;
  height: 100%;
`;

export const HeaderProcedure = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  padding: 16px 20px;
`;

export const Additionally = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  padding: 0px 20px 10px 20px;
`;

export const Gap = styled.div`
  height: 70px;
  background: transparent;
`;

export const CollapseWrapper = styled.div`
  .ant-collapse-item > .ant-collapse-header {
    align-items: center;
    padding: 10px 12px;
  }
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  gap: 10px;
  display: flex;
  padding: 16px;
  justify-content: flex-end;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey300};
`;

export const GreenButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey1300 : theme.colors.green500};
  color: white;
  padding: 8px 32px;
  width: 170px;
  border-radius: 2.5px;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white300};
`;

export const Spinner = styled(Icons.Spinner)`
  width: 32px;
  height: 32px;
`;
