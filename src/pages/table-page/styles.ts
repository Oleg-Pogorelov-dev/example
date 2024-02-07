import styled from 'styled-components';

import Icons from '@/utils/icons';
import {
  MAIN_TABLE_HORIZONTAL_SPACE,
  MAIN_TABLE_PADDING,
} from '@/utils/Static/common';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 100%;
`;

export const Spinner = styled(Icons.Spinner)`
  width: 48px;
  height: 48px;
`;

export const TableContainer = styled.div<{
  tableHeight: number;
}>`
  height: fit-content;
  margin: 0 ${MAIN_TABLE_HORIZONTAL_SPACE}px;
  max-height: 100%;
  padding: ${MAIN_TABLE_PADDING}px;

  background-color: ${({ theme }) => theme.colors.grey200};
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 0;
    border-radius: 0;
    padding: 0;
    padding-top: ${MAIN_TABLE_PADDING}px;

    *::-webkit-scrollbar {
      display: none;
    }
  }

  .ant-table-placeholder,
  .ant-table-body {
    height: ${({ tableHeight }) => tableHeight}px;

    @media (max-width: 768px) {
      padding: 0 ${MAIN_TABLE_PADDING}px;
    }
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: none;
  }

  .ant-spin-nested-loading > div > .ant-spin .ant-spin-dot {
    margin: 0;
    transform: translate(-50%, -50%);
  }

  .ant-table,
  .main-table tr:hover td,
  .ant-table-thead
    th.ant-table-column-has-sorters.ant-table-cell-fix-left:hover,
  .ant-table-thead
    th.ant-table-column-has-sorters.ant-table-cell-fix-right:hover,
  .ant-table-sticky-scroll {
    background: transparent;
  }

  .ant-table-cell-fix-left,
  .ant-table-cell-fix-right {
    background: ${({ theme }) => theme.colors.grey200};
  }

  .ant-table-thead > tr > th,
  .ant-table-thead th.ant-table-column-has-sorters:hover,
  .ant-table-thead
    th.ant-table-column-has-sorters.ant-table-cell-fix-left:hover,
  .ant-table-sticky-holder {
    background: ${({ theme }) => theme.colors.white};
  }

  .main-table .ant-table-row:hover td {
    background-color: ${({ theme }) => theme.colors.blue200};
  }

  .main-table th {
    border-bottom: none;
  }

  .main-table th:nth-last-child(2) {
    border-radius: 0 10px 10px 0;

    @media (max-width: 768px) {
      border-radius: 0;
    }
  }

  .ant-table-cell-scrollbar {
    display: none;
  }

  .ant-table-header {
    border-radius: 10px;

    @media (max-width: 768px) {
      border-radius: 0;
      padding: 0 ${MAIN_TABLE_PADDING}px;
    }
  }

  .ant-table-container table > thead > tr:first-child th:first-child {
    border-radius: 10px 0 0 10px;

    @media (max-width: 768px) {
      border-radius: 0;
    }
  }

  .ant-table-ping-right .ant-table-cell-fix-right-first:after,
  .ant-table-ping-right .ant-table-cell-fix-right-last:after,
  .ant-table-ping-right:not(.ant-table-has-fix-right)
    > .ant-table-container:after,
  .ant-table-ping-left:not(.ant-table-has-fix-left)
    > .ant-table-container:before {
    @media (min-width: 768px) {
      box-shadow: none;
    }
  }

  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan]):before {
    display: none;
  }

  .ant-table-container th {
    text-transform: uppercase;
  }

  .ant-table-thead > tr > th {
    color: ${({ theme }) => theme.colors.grey900};
  }

  .ant-table.ant-table-small .ant-table-thead > tr > th,
  .ant-table.ant-table-small .ant-table-tbody > tr > td {
    padding: 6px 8px;
  }

  .ant-table-container td,
  .ant-table-container th {
    min-width: 38px;
  }

  .ant-table-container .col-fio,
  .ant-table-container .col-dept,
  .ant-table-container .col-ward,
  .ant-table-container .col-naz {
    min-width: 10px;
  }
`;
