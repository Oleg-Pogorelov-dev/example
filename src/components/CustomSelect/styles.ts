import Icons from '@/utils/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .custom-select {
    &.ant-select-multiple {
      .ant-select-selection-item {
        padding: 0;
        margin: 0;
        background: none;
        border: none;

        .ant-select-selection-item-remove {
          display: none;
        }
      }

      .ant-select-selector {
        padding-right: 30px;
      }

      .ant-select-selection-overflow,
      .ant-select-selection-overflow-item {
        display: inline;
        white-space: nowrap;
        overflow: hidden;
      }

      .ant-select-selection-overflow {
        text-overflow: ellipsis;
      }
      
      .ant-select-selection-overflow-item-suffix {
        display: none;
      }
    }

    &.ant-select-focused:not(.ant-select-disabled).ant-select:not(
        .ant-select-customize-input
      )
      .ant-select-selector,
    .ant-select-selector {
      border-color: ${({ theme }) => theme.colors.grey1300} !important;
      border-radius: 2px;
      box-shadow: none;
      padding: 0 11px;
      height: 32px;

      &:hover {
        border-color: ${({ theme }) => theme.colors.grey1300};
      }
    }

    &.ant-select-disabled .ant-select-arrow svg,
    &.ant-select-disabled .ant-select-selector {
      color: ${({ theme }) => theme.colors.grey1300};
    }

    &.ant-select-disabled .ant-select-selector {
      background: ${({ theme }) => theme.colors.grey300};
    }

    .ant-select-clear {
      margin-top: 0;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
    }
  }
`;

export const Label = styled.p<{ disabled?: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey1300 : theme.colors.blue900};
  line-height: 120%;
`;

export const SelectChevron = styled(Icons.ChevronLeft)`
  transform: rotate(-90deg);
  color: ${({ theme }) => theme.colors.blue600};
`;

export const ClearButton = styled(Icons.Close)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.red400};
`;
