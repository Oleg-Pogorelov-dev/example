import styled from 'styled-components';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import TextArea from 'antd/lib/input/TextArea';

import Checkbox from '@/components/Inputs/Checkbox';
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

export const SurveyHeader = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  padding-top: 15px;
  padding-bottom: 15px;
  padding-inline: 18px;
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
`;

export const CollapseWrapper = styled.div`
  .ant-collapse-item > .ant-collapse-header {
    align-items: center;
    padding: 10px 12px;
  }
`;

export const CollapsePanelWrapper = styled(CollapsePanel)`
  div > span {
    margin-left: 18px;
  }
`;

export const CollapsePanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey600};
`;

export const Points = styled.p`
  color: ${({ theme }) => theme.colors.blue900};
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export const Gap = styled.div`
  height: 70px;
  background: transparent;
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

export const GreenButton = styled.button<{ disabled: boolean }>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey1300 : theme.colors.green500};
  color: white;
  padding: 8px 32px;
  width: 170px;
  border-radius: 2.5px;
`;

export const StyledCheckbox = styled(Checkbox)`
  & input {
    height: 32px;
    width: 32px;
    &::before {
      right: 9px;
      top: 4px;
      width: 12px;
      height: 17px;
    }
  }
`;

export const SurveyFooterText = styled.label`
  color: ${({ theme }) => theme.colors.grey600};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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

export const IcfInterpretationItem = styled.div`
  color: #6796ad;
  text-align: right;
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const TextfieldLabel = styled.div`
  color: #42687b;
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TextInput = styled(TextArea)`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #a9aaaf;
  background: #fff;
`;

export const Comment = styled.div`
  padding: 10px 12px;
  background: white;
`;
