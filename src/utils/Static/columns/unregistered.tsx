import { ColumnsType } from 'antd/es/table';
import { ColumnFilterItem, Key } from 'antd/lib/table/interface';

import { colors } from '@/utils/theme';
import NameCell from '@/components/Cells/Name';
import { TablePatient } from '@/utils/types/column';
import { Sex } from '../common';
import FilterDropdown from '@/components/FilterDropdown';

export const useUnregisteredColumns = (
  depts: ColumnFilterItem[],
  assigments: ColumnFilterItem[],
  planEmp: ColumnFilterItem[],
  setSelectedKeysDepts: React.Dispatch<React.SetStateAction<Key[]>>,
  setSelectedKeysAssigments: React.Dispatch<React.SetStateAction<Key[]>>,
  setSelectedKeysPlanEmp: React.Dispatch<React.SetStateAction<Key[]>>
) => {
  const unregisteredColumns: ColumnsType<TablePatient> = [
    {
      title: <div style={{ fontSize: '13px' }}>ФИО</div>,
      dataIndex: 'fio',
      key: 'fio',
      className: 'col-fio',
      sorter: (a, b) => a.fio?.localeCompare(b.fio),
      render: (_, { age, sex, fio }) => {
        const patientIconColor =
          sex === Sex.male
            ? colors.blue500
            : sex === Sex.female
            ? colors.red400
            : colors.grey100;

        return <NameCell name={fio} age={age} color={patientIconColor} />;
      },
    },
    {
      title: <div style={{ fontSize: '13px' }}>№ пал</div>,
      dataIndex: 'ward',
      key: 'ward',
      className: 'col-ward',
      sorter: (a, b) => a.ward?.localeCompare(b.ward),
      render: (_, { ward }) => {
        return (
          <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
            {ward}
          </div>
        );
      },
    },
    {
      title: <div style={{ fontSize: '13px' }}>Отделение</div>,
      dataIndex: 'dept_name',
      key: 'dept_name',
      className: 'col-dept',
      filters: depts,
      filterDropdown: ({
        selectedKeys,
        setSelectedKeys,
        filters,
        close,
        confirm,
      }) => (
        <FilterDropdown
          selectedKeys={selectedKeys}
          setSelectedKeys={(keys) => {
            setSelectedKeys(keys);
            setSelectedKeysDepts(keys);
          }}
          filters={filters}
          close={close}
          confirm={confirm}
        />
      ),
      sorter: (a, b) => a.dept_name?.localeCompare(b.dept_name),
      onFilter: (value, record) =>
        record.dept_name.indexOf(value as string) === 0,
      render: (_, { dept_name }) => {
        return (
          <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
            {dept_name}
          </div>
        );
      },
    },
    {
      title: <div style={{ fontSize: '13px' }}>Назначение</div>,
      dataIndex: 'naz_name',
      key: 'naz_name',
      className: 'col-naz',
      filters: assigments,
      filterDropdown: ({
        selectedKeys,
        setSelectedKeys,
        filters,
        close,
        confirm,
      }) => (
        <FilterDropdown
          selectedKeys={selectedKeys}
          setSelectedKeys={(keys) => {
            setSelectedKeys(keys);
            setSelectedKeysAssigments(keys);
          }}
          filters={filters}
          close={close}
          confirm={confirm}
        />
      ),
      sorter: (a, b) => a.naz_name?.localeCompare(b.naz_name),
      onFilter: (value, record) =>
        record.naz_name.indexOf(value as string) === 0,
      render: (_, { naz_name }) => {
        return (
          <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
            {naz_name}
          </div>
        );
      },
    },
    {
      title: <div style={{ fontSize: '13px' }}>исполнитель</div>,
      dataIndex: 'plan_emp',
      key: 'plan_emp',
      className: 'col-plan_emp',
      filters: planEmp,
      filterDropdown: ({
        selectedKeys,
        setSelectedKeys,
        filters,
        close,
        confirm,
      }) => (
        <FilterDropdown
          selectedKeys={selectedKeys}
          setSelectedKeys={(keys) => {
            setSelectedKeys(keys);
            setSelectedKeysPlanEmp(keys);
          }}
          filters={filters}
          close={close}
          confirm={confirm}
        />
      ),
      onFilter: (value, record) => {
        return record.plan_emp.includes(value as string);
      },
      sorter: (a, b) =>
        (a?.plan_emp[0] || '')?.localeCompare(b?.plan_emp[0] || ''),
      render: (_, { plan_emp }) => {
        return (
          <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
            {plan_emp.join(', ')}
          </div>
        );
      },
    },
  ];

  return unregisteredColumns;
};
