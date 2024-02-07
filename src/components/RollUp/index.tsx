import { FC, memo } from 'react';
import Icons from '@/utils/icons';

import * as S from './styles';

interface RollUpProps {
  isActive?: boolean;
}
const RollUp: FC<RollUpProps> = ({ isActive }) => {
  return (
    <S.RollUp isActive={isActive}>
      <Icons.RollUp size={32} />
    </S.RollUp>
  );
};

export default memo(RollUp);
