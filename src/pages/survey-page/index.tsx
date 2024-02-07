import { FC } from 'react';
import { Collapse } from 'antd';

import PatientHeader from '@/components/PatientHeader';
import ICFForm from '@/widgets/ICF/ICFForm';
import {
  dysarthriaRatingScaleText,
  hospitalDysphagiaScaleText,
  scaleOfWassermanTexts,
} from '@/utils/Static/dataOfScales';
import { setHospitalDysphagiaScaleValue } from '@/store/hospitalDysphagiaScale/reducer';
import { setScaleOfWassermanValue } from '@/store/scaleOfWasserman/reducer';
import Scale from '@/widgets/Scale';
import { setDysarthriaRatingScaleValue } from '@/store/dysarthriaRatingScale/reducer';
import useScales from '@/utils/hooks/scaleHooks/useScales';
import useInterpretations from '@/utils/hooks/scaleHooks/useInterpretations';
import ConfirmScalesModal from '@/components/ModalContents/ConfirmScalesModal';
import Modal from '@/components/Modal';
import { TotalsOfScales } from '@/utils/Static/common';
import usePatientInfoHeader from '@/utils/hooks/usePatientInfoHeader';
import RollUp from '@/components/RollUp';
import PatientInfo from '@/components/PatientInfo';

import * as S from './styles';

const SurveyPage: FC = () => {
  const { patient, patientLoading, nazName, refreshTable } =
    usePatientInfoHeader();
  const {
    scaleOfWasserman,
    hospitalDysphagiaScale,
    dysarthriaRatingScale,
    scaleScore,
    checkScales,
    getScale,
    setIsSurvied,
    isSurvied,
    wassermanIsLoad,
    hospitalDysphagiaIsLoad,
    dysarthriaRatingIsLoad,
    scaleScoreIsLoad,
    interpretationIcfString,
    clearHospitalDysphagia,
    clearWasserman,
    clearDysarthria,
    icfDescription,
    changeDescription,
    icfRecomendation,
    changeRecomendation,
  } = useScales();
  const {
    interpretationDysarthria,
    interpretationHospitalDysphagia,
    interpretationWasserman,
  } = useInterpretations();

  return (
    <S.Wrapper>
      <PatientHeader onRefreshClick={refreshTable} />
      {patientLoading || scaleScoreIsLoad ? (
        <S.SpinnerWrapper>
          <S.Spinner />
        </S.SpinnerWrapper>
      ) : (
        <>
          <PatientInfo patient={patient} />
          <S.TableContainer>
            <S.SurveyHeader>{nazName}</S.SurveyHeader>
            <S.CollapseWrapper>
              <Collapse
                expandIcon={({ isActive }) => <RollUp isActive={isActive} />}
                onChange={(key) => getScale(key as string[])}
              >
                <Scale
                  key='1'
                  name='Госпитальная шкала оценки дисфагии*КИМ'
                  scale={hospitalDysphagiaScale}
                  total={TotalsOfScales.hospital}
                  scaleText={hospitalDysphagiaScaleText}
                  setReducer={setHospitalDysphagiaScaleValue}
                  inputName='hospitalDysphagia'
                  interpretation={interpretationHospitalDysphagia}
                  score={scaleScore.kim_score}
                  isLoading={hospitalDysphagiaIsLoad}
                  clear={clearHospitalDysphagia}
                />
                <Scale
                  key='2'
                  name='Шкала оценки речи Вассермана (афазия)'
                  scale={scaleOfWasserman}
                  total={TotalsOfScales.wasserman}
                  scaleText={scaleOfWassermanTexts}
                  setReducer={setScaleOfWassermanValue}
                  inputName='wasserman'
                  interpretation={interpretationWasserman}
                  score={scaleScore.wasserman_score}
                  isLoading={wassermanIsLoad}
                  clear={clearWasserman}
                />
                <Scale
                  key='3'
                  name='Шкала дизартрии'
                  scale={dysarthriaRatingScale}
                  total={TotalsOfScales.dysarthria}
                  scaleText={dysarthriaRatingScaleText}
                  setReducer={setDysarthriaRatingScaleValue}
                  inputName='dysarthria'
                  interpretation={interpretationDysarthria}
                  score={scaleScore.dysarthria_score}
                  isLoading={dysarthriaRatingIsLoad}
                  clear={clearDysarthria}
                />
                <S.CollapsePanelWrapper
                  header={
                    <S.CollapsePanelHeader>
                      Международная классификация функционирования (МКФ)
                      <S.IcfInterpretationItem>
                        {interpretationIcfString}
                      </S.IcfInterpretationItem>
                    </S.CollapsePanelHeader>
                  }
                  key='4'
                >
                  <ICFForm />
                </S.CollapsePanelWrapper>
              </Collapse>
            </S.CollapseWrapper>
            <S.Comment>
              <S.TextfieldLabel>Описание</S.TextfieldLabel>
              <S.TextInput
                value={icfDescription}
                onChange={changeDescription}
                autoSize={{ minRows: 2 }}
              />
              <S.TextfieldLabel>Рекомендации</S.TextfieldLabel>
              <S.TextInput
                value={icfRecomendation}
                onChange={changeRecomendation}
                autoSize={{ minRows: 2 }}
              />
            </S.Comment>
            <S.Gap />
            <S.ButtonWrapper>
              <S.SurveyFooterText>Обследование завершено</S.SurveyFooterText>
              <S.StyledCheckbox
                value={isSurvied}
                onChange={() => setIsSurvied(!isSurvied)}
              />
              <S.GreenButton disabled={!isSurvied} onClick={checkScales}>
                Сохранить
              </S.GreenButton>
            </S.ButtonWrapper>
          </S.TableContainer>
          {isSurvied && <ConfirmScalesModal />}
          <Modal />
        </>
      )}
    </S.Wrapper>
  );
};

export default SurveyPage;
