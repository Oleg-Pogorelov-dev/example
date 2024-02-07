import { useMemo } from 'react';

import { useWindowSize } from '@/utils/hooks/useWindowSize';
import { BREAKPOINTS } from '@/utils/breakpoints';
import {
  MAIN_TABLE_BOTTOM_SPACE,
  MAIN_TABLE_PADDING,
} from '@/utils/Static/common';

interface useTableHeightProps {
  headerRef: any;
  filterPanelRef: any;
  filterTagsRef: any;
  filteredTableData: any;
  footerRef: any;
}

const useTableHeight = ({
  headerRef,
  filterPanelRef,
  filteredTableData,
  footerRef,
}: useTableHeightProps) => {
  const windowsSize = useWindowSize();

  const headerHeight = useMemo(() => {
    if (headerRef.current) {
      const headerBounds = headerRef.current.getBoundingClientRect();
      return headerBounds.height;
    } else return 0;
  }, [windowsSize, headerRef.current]);

  const filterPanelHeight = useMemo(() => {
    if (filterPanelRef.current) {
      const filterPanelBounds = filterPanelRef.current.getBoundingClientRect();
      return filterPanelBounds.height;
    } else return 0;
  }, [windowsSize, filterPanelRef.current]);

  const tableHeaderHeight = useMemo(() => {
    const tableHeader = document.querySelector(
      '.main-table .ant-table-header thead'
    );
    return tableHeader?.getBoundingClientRect().height ?? 0;
  }, [windowsSize, filteredTableData]);

  const footerHeight = useMemo(
    () => footerRef.current?.getBoundingClientRect().height ?? 0,
    [windowsSize, footerRef.current]
  );

  const tableScrollHeight = useMemo(() => {
    return (
      windowsSize.height -
      headerHeight -
      filterPanelHeight -
      tableHeaderHeight -
      footerHeight -
      MAIN_TABLE_PADDING * (windowsSize.width > BREAKPOINTS[3] ? 2 : 1) -
      (windowsSize.width > BREAKPOINTS[3] ? MAIN_TABLE_BOTTOM_SPACE : 0)
    );
  }, [
    windowsSize.height,
    windowsSize.width,
    headerHeight,
    filterPanelHeight,
    tableHeaderHeight,
    footerHeight,
  ]);
  return tableScrollHeight;
};
export default useTableHeight;
