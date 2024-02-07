import useFaktorDeterminant from '@/utils/hooks/icfHooks/useFaktorDeterminant';

import * as S from './styles';

interface FaktorDeterminant {
  code: string;
  num: number;
  id: number;
  setCurrentDeterNum: (num: number) => void;
  setCurrentFactor: (num: number) => void;
}

const FaktorDeterminant = ({
  code,
  num,
  id,
  setCurrentFactor,
  setCurrentDeterNum,
}: FaktorDeterminant) => {
  const { selectedCodes, getQualifier } = useFaktorDeterminant();

  return (
    <S.FaktorDeterminant
      onClick={() =>
        getQualifier(code, num, id, setCurrentDeterNum, setCurrentFactor)
      }
    >
      <S.Code>
        {!!selectedCodes[id]?.qualifiers?.[num] &&
          selectedCodes[id]?.qualifiers?.[num].code}
      </S.Code>
      <S.FaktorDeterminantDots>...</S.FaktorDeterminantDots>
    </S.FaktorDeterminant>
  );
};

export default FaktorDeterminant;
