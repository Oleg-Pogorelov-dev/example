import Icons from '@/utils/icons';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RoundButton = styled(Button)`
  border-radius: 50%;
`;

export const Picker = styled(DatePicker)`
  width: 128px;
  border-color: ${({ theme }) => theme.colors.blue900};
  padding: 5px 10px;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue900};
  }

  input {
    line-height: 120%;
    cursor: pointer;
  }

  .ant-picker-clear,
  .ant-picker-suffix {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }

  &.ant-picker.ant-picker-disabled,
  &.ant-picker {
    border-color: ${({ theme }) => theme.colors.grey1300};
  }

  &.ant-picker.ant-picker-disabled {
    background: ${({ theme }) => theme.colors.grey300};
  }

  &.ant-picker.ant-picker-disabled .ant-picker-suffix svg {
    color: ${({ theme }) => theme.colors.grey1300};
  }
`;

export const Clear = styled(Icons.Close)`
  color: ${({ theme }) => theme.colors.red400};
`;
