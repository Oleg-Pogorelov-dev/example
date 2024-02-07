import { FC, memo } from 'react';

import { ColumnFilterItem, FilterConfirmProps } from 'antd/lib/table/interface';

import Checkbox from '@/components/Inputs/ProcedureCheckbox';
import Icons from '@/utils/icons';
import { colors } from '@/utils/theme';

import * as S from './styles';

interface FilterDropdownProps {
  setSelectedKeys: (selectedKeys: React.Key[]) => void;
  selectedKeys: React.Key[];
  confirm: (param?: FilterConfirmProps) => void;
  filters?: ColumnFilterItem[];
  close: () => void;
}

const FilterDropdown: FC<FilterDropdownProps> = ({
  selectedKeys,
  setSelectedKeys,
  filters,
  close,
  confirm,
}) => {
  const handleClickFilterItem = (e: any, value: string) => {
    e.stopPropagation();
    if (selectedKeys.includes(value as string)) {
      setSelectedKeys(
        selectedKeys.filter((item) => item !== (value as string))
      );
      confirm({ closeDropdown: false });
      return;
    }
    setSelectedKeys([...selectedKeys, value as string]);
    confirm({ closeDropdown: false });
  };

  return (
    <S.FilterDropdownWrapper>
      <S.FilterDropdownHeader>
        <S.ClearFilter
          onClick={() => {
            setSelectedKeys([]);
            confirm({ closeDropdown: false });
          }}
        >
          Очистить фильтр
        </S.ClearFilter>
        <S.Close onClick={() => close()}>
          <Icons.Close color={colors.grey600} />
        </S.Close>
      </S.FilterDropdownHeader>
      <S.ContainerFilters>
        {filters?.map((i) => (
          <S.FilterItem
            key={i.value as string}
            onClick={(e) => handleClickFilterItem(e, i.value as string)}
          >
            <Checkbox value={selectedKeys.includes(i.value as string)} />
            <S.FilterValue>{i.value}</S.FilterValue>
          </S.FilterItem>
        ))}
      </S.ContainerFilters>
    </S.FilterDropdownWrapper>
  );
};

export default memo(FilterDropdown);
