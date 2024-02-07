import FactorModal from '../FactorModal';
import FaktorDeterminant from '../FaktorDeterminant';
import DiagnosisModal from '../DiagnosisModal';
import { makeInterpretationIcf } from '@/utils/functions';
import { SavedIcf } from '@/utils/types/icf';
import useICFForm from '@/utils/hooks/icfHooks/useICFForm';

import * as S from './styles';

const ICFForm = () => {
  const {
    icfSelectedCodes,
    isOpen,
    currentDeterNum,
    currentFactor,
    savedIcf,
    setIsOpen,
    setCurrentFactor,
    setCurrentDeterNum,
    reset,
    openIcfModal,
    createNewField,
  } = useICFForm();

  return (
    <S.ICFForm>
      <S.FaktorLabels>
        <S.FaktorLabel>Фактор (домен)</S.FaktorLabel>
        <S.FaktorLabel>Определитель</S.FaktorLabel>
        <S.ClearButton onClick={reset} />
      </S.FaktorLabels>
      {icfSelectedCodes.map((icfSelectedCode, index) => (
        <S.Faktor key={index}>
          <div>
            <S.FaktorInput onClick={() => openIcfModal(index)}>
              <S.FaktorValue>{icfSelectedCode.code}</S.FaktorValue>
              <S.FaktorDeterminantDots>...</S.FaktorDeterminantDots>
            </S.FaktorInput>
          </div>
          {!!icfSelectedCode.qualifierQuantity && (
            <S.ListWrapper>
              <S.FaktorDeterminantList>
                {[...Array(icfSelectedCode.qualifierQuantity)].map((_, idx) => (
                  <FaktorDeterminant
                    id={index}
                    key={idx}
                    code={icfSelectedCode.code}
                    num={idx + 1}
                    setCurrentFactor={setCurrentFactor}
                    setCurrentDeterNum={setCurrentDeterNum}
                  />
                ))}
              </S.FaktorDeterminantList>
            </S.ListWrapper>
          )}
          <S.GreenButton onClick={createNewField} />
        </S.Faktor>
      ))}
      <S.Diagnosis>Диагноз по МКФ</S.Diagnosis>
      <S.DiagnosisField
        isGray={!!savedIcf.length}
        onClick={() => {
          if (!!savedIcf.length) {
            setIsOpen(true);
          }
        }}
      >
        {savedIcf?.map((icf: SavedIcf) => (
          <S.DiagnosisValue key={icf.codeMkfCode}>{`${makeInterpretationIcf(
            icf
          )} ${icf.codeMkfValue.replace(
            icf.codeMkfCode,
            ''
          )}`}</S.DiagnosisValue>
        ))}
        {!!savedIcf.length && <S.FillForm />}
      </S.DiagnosisField>
      <DiagnosisModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <FactorModal currentFactor={currentFactor} num={currentDeterNum} />
    </S.ICFForm>
  );
};

export default ICFForm;
