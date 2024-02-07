import { FC, memo } from 'react';
import Icons from '@/utils/icons';
import * as S from './styles';

interface NameCellProps {
  name: string;
  age: number;
  color: string;
  onDoubleClick?: () => void;
  className?: string;
}

const NameCell: FC<NameCellProps> = ({
  age,
  color,
  name,
  onDoubleClick: onDoubleClickProps,
  className,
}) => {
  const onDoubleClick = () => {
    onDoubleClickProps && onDoubleClickProps();
  };
  return (
    <S.Cell onDoubleClick={onDoubleClick} className={className}>
      <S.ManIconWrapper>
        <Icons.Human size={20} fill={color} />
        <S.ManAge color={color}>{age}</S.ManAge>
      </S.ManIconWrapper>
      <S.Name>{name}</S.Name>
    </S.Cell>
  );
};
export default memo(NameCell);
