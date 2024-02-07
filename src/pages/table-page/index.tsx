import { Table } from 'antd';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import { TABLE_DEFAULT_PROPS } from '@/utils/Static/common';
import useTablePage from '@/utils/hooks/tableHooks/useTablePage';

import * as S from './styles';

const TablePage = () => {
  const {
    headerRef,
    headerSearchRef,
    tableScrollHeight,
    tableDataLoading,
    filteredTableData,
    footerRef,
    unregisteredColumns,
    onRowClick,
    refreshTable,
  } = useTablePage();

  return (
    <S.Wrapper>
      <Header
        headerRef={headerRef}
        headerSearchRef={headerSearchRef}
        onRefreshClick={refreshTable}
      />
      <S.Content>
        <Table
          {...TABLE_DEFAULT_PROPS}
          onRow={(record) => ({
            onClick: () =>
              onRowClick(record.ehr_case_id, record.naz_id, record.kind),
          })}
          showHeader={!!filteredTableData.length}
          loading={{
            spinning: tableDataLoading,
            indicator: <S.Spinner />,
            delay: 350,
          }}
          columns={unregisteredColumns}
          dataSource={filteredTableData}
          scroll={{
            y: tableScrollHeight,
          }}
          className='main-table'
        />
        <Footer footerRef={footerRef} />
      </S.Content>
      <Modal />
    </S.Wrapper>
  );
};

export default TablePage;
