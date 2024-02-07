import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ColumnFilterItem, Key } from 'antd/lib/table/interface';
import { UUID } from 'crypto';

import {
  filteredTableDataSelector,
  tableDataLoadingSelector,
} from '@/store/selectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useUnregisteredColumns } from '@/utils/Static/columns/unregistered';
import useTableHeight from './useTableHeight';
import { getAssignmentThunk } from '@/store/survies/thunks';
import { setUregisteredTableFilters } from '@/store/survies/reducer';
import { dateSelector } from '@/store/common/selector';

import moment from 'moment';

const useTablePage = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const tableDataLoading = useAppSelector(tableDataLoadingSelector);
  const filteredTableData = useAppSelector(filteredTableDataSelector);
  const date = useAppSelector(dateSelector);
  const [selectedKeysDepts, setSelectedKeysDepts] = useState<Key[]>([]);
  const [selectedKeysAssigments, setSelectedKeysAssigments] = useState<Key[]>(
    []
  );
  const [selectedKeysPlanEmp, setSelectedKeysPlanEmp] = useState<Key[]>([]);

  const depts = useMemo(() => {
    const unicNames: { [key: string]: boolean } = {};
    const newFilteredTableData = filteredTableData.filter((i) => {
      if (
        (selectedKeysAssigments.length &&
          !selectedKeysAssigments.includes(i.naz_name)) ||
        (selectedKeysPlanEmp.length &&
          !i.plan_emp.some((j) => selectedKeysPlanEmp.includes(j)))
      ) {
        return false;
      } else {
        return true;
      }
    });
    const arr: { text: string; value: string }[] = [];

    newFilteredTableData.forEach((item) => {
      if (!unicNames[item.dept_name]) {
        unicNames[item.dept_name] = true;
        arr.push({
          text: item.dept_name,
          value: item.dept_name,
        });
      }
    });

    return arr;
  }, [filteredTableData, selectedKeysAssigments, selectedKeysPlanEmp]);

  const assigments = useMemo(() => {
    const unicNames: { [key: string]: boolean } = {};
    const newFilteredTableData = filteredTableData.filter((i) => {
      if (
        (selectedKeysDepts.length &&
          !selectedKeysDepts.includes(i.dept_name)) ||
        (selectedKeysPlanEmp.length &&
          !i.plan_emp.some((j) => selectedKeysPlanEmp.includes(j)))
      ) {
        return false;
      } else {
        return true;
      }
    });

    const arr: { text: string; value: string }[] = [];

    newFilteredTableData.forEach((item) => {
      if (!unicNames[item.naz_name]) {
        unicNames[item.naz_name] = true;
        arr.push({
          text: item.naz_name,
          value: item.naz_name,
        });
      }
    });

    return arr;
  }, [filteredTableData, selectedKeysDepts, selectedKeysPlanEmp]);

  const planEmp = useMemo(() => {
    const newFilteredTableData = filteredTableData.filter((i) => {
      if (
        (selectedKeysDepts.length &&
          !selectedKeysDepts.includes(i.dept_name)) ||
        (selectedKeysAssigments.length &&
          !selectedKeysAssigments.includes(i.naz_name))
      ) {
        return false;
      } else {
        return true;
      }
    });

    const allNamesEmp = new Set();

    newFilteredTableData.forEach((i) => {
      i.plan_emp.forEach((j) => {
        allNamesEmp.add(j);
      });
    });

    const arr = [...allNamesEmp].map((item) => ({
      text: item,
      value: item,
    })) as { text: string; value: string }[];

    return arr;
  }, [filteredTableData, selectedKeysAssigments, selectedKeysDepts]);

  const unregisteredColumns = useUnregisteredColumns(
    depts as ColumnFilterItem[],
    assigments as ColumnFilterItem[],
    planEmp as ColumnFilterItem[],
    setSelectedKeysDepts,
    setSelectedKeysAssigments,
    setSelectedKeysPlanEmp
  );
  const headerRef = useRef<HTMLDivElement | null>(null);
  const filterPanelRef = useRef<HTMLDivElement | null>(null);
  const filterTagsRef = useRef<HTMLDivElement | null>(null);
  const headerSearchRef = useRef<HTMLInputElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const tableScrollHeight = useTableHeight({
    headerRef,
    filterPanelRef,
    filterTagsRef,
    filteredTableData,
    footerRef,
  });

  const onRowClick = (ehrCaseId: string, nazId: string, kind: string) => {
    if (kind === 'proc') {
      return nav(`procedure/${ehrCaseId}/${nazId}`);
    }
    nav(`survey/${ehrCaseId}/${nazId}`);
  };

  const refreshTable = () => {
    const profileId = localStorage.getItem('profileId') as UUID;

    if (profileId) {
      const newDate = date ? date : moment(new Date()).format('YYYY-MM-DD');
      dispatch(getAssignmentThunk(newDate));
    }
  };

  useEffect(() => {
    dispatch(
      setUregisteredTableFilters({
        filterName: 'search',
        value: '',
      })
    );
  }, []);

  useEffect(() => {
    refreshTable();
  }, [dispatch]);

  return {
    headerRef,
    headerSearchRef,
    filterPanelRef,
    filterTagsRef,
    tableScrollHeight,
    tableDataLoading,
    unregisteredColumns,
    filteredTableData,
    footerRef,
    onRowClick,
    refreshTable,
  };
};

export default useTablePage;
