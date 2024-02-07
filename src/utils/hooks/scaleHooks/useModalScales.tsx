import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { checkValuesOfScale } from '@/utils/functions';
import { setClose } from '@/store/confirmScalesModal/reducer';
import { isOpenSelector } from '@/store/confirmScalesModal/selector';
import { scaleOfWassermanSelector } from '@/store/scaleOfWasserman/selectors';
import { hospitalDysphagiaScaleSelector } from '@/store/hospitalDysphagiaScale/selectors';
import { dysarthriaRatingScaleSelector } from '@/store/dysarthriaRatingScale/selectors';
import { ScalePostData } from '@/utils/types/scale';
import { postConsultation } from '@/store/thunk';
import { postScales } from '@/store/scales/thunks';
import { message } from '@/utils/message';
import { postIcf } from '@/store/icf/thunks';
import {
  icfDescriptionSelector,
  icfIsChangedSelector,
  icfRecomendationSelector,
  icfSelectedCodeSelector,
  savedIcfSelector,
} from '@/store/icf/selector';
import { nazCodeSelector, protocolIdSelector } from '@/store/survey/selectors';

const useModalScales = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { ehrCaseId, nazId } = useParams();

  const scaleOfWasserman = useAppSelector(scaleOfWassermanSelector);
  const hospitalDysphagiaScale = useAppSelector(hospitalDysphagiaScaleSelector);
  const dysarthriaRatingScale = useAppSelector(dysarthriaRatingScaleSelector);
  const isModalOpen = useAppSelector(isOpenSelector);
  const icfCodes = useAppSelector(icfSelectedCodeSelector);
  const protocolId = useAppSelector(protocolIdSelector);
  const savedIcf = useAppSelector(savedIcfSelector);
  const icfDescription = useAppSelector(icfDescriptionSelector);
  const icfRecomendation = useAppSelector(icfRecomendationSelector);
  const icfIsChanged = useAppSelector(icfIsChangedSelector);
  const nazCode = useAppSelector(nazCodeSelector);

  const onCancel = () => {
    dispatch(setClose());
  };

  const onSubmit = async () => {
    const objPostScales: ScalePostData = { emp_id: '', protocol_id: '' };

    const minValidQualifiers = {
      b: '1',
      s: '1',
      d: '1,2',
      e: '1',
    };

    const isInvalidCountQualifier = icfCodes.some((i) => {
      const isInvalidCount =
        !!i.code &&
        !Object.keys(i.qualifiers)
          .sort()
          .join(',')
          .includes(
            minValidQualifiers[i.group as keyof typeof minValidQualifiers]
          );

      return isInvalidCount;
    });

    if (isInvalidCountQualifier) {
      return message({
        title: `Заполните определители МКФ`,
        type: 'error',
      });
    }

    const objIcf = {
      caseId: ehrCaseId,
      mkf: [
        ...savedIcf,
        ...icfCodes
          .filter((i) => i.code)
          .map((item) => ({
            categoryMkf: item.category,
            codeMkfCode: item.code,
            codeMkfValue: item.value,
            qualifierCode1: item.qualifiers[1]?.code || null,
            qualifierValue1: item.qualifiers[1]?.value || null,
            qualifierType1: item.qualifiers[1]?.type || null,
            qualifierCode2: item.qualifiers[2]?.code || null,
            qualifierValue2: item.qualifiers[2]?.value || null,
            qualifierType2: item.qualifiers[2]?.type || null,
            qualifierCode3: item.qualifiers[3]?.code || null,
            qualifierValue3: item.qualifiers[3]?.value || null,
            qualifierType3: item.qualifiers[3]?.type || null,
            qualifierCode4: item.qualifiers[4]?.code || null,
            qualifierValue4: item.qualifiers[4]?.value || null,
            qualifierType4: item.qualifiers[4]?.type || null,
          })),
      ],
      description: icfDescription,
      recomendation: icfRecomendation,
    };

    if (checkValuesOfScale(hospitalDysphagiaScale)) {
      objPostScales.kim = { ...hospitalDysphagiaScale };
    }
    if (checkValuesOfScale(scaleOfWasserman)) {
      objPostScales.wasserman = { ...scaleOfWasserman };
    }
    if (checkValuesOfScale(dysarthriaRatingScale)) {
      objPostScales.dysarthria = { ...dysarthriaRatingScale };
    }

    const isEditedScales =
      !!objPostScales.dysarthria ||
      !!objPostScales.kim ||
      !!objPostScales.wasserman;

    const id =
      protocolId ||
      (await dispatch(postConsultation(nazId as string)).unwrap());

    if (isEditedScales) {
      dispatch(
        postScales({
          ...objPostScales,
          protocol_id: id,
          ehr_case_id: ehrCaseId,
        })
      );
    }
    if (icfIsChanged) {
      dispatch(
        postIcf({
          ...objIcf,
          protocolId: id,
          ehrCaseId,
          nazCode,
        })
      );
    }

    onCancel();
    nav('/');
  };

  return {
    isModalOpen,
    onSubmit,
    onCancel,
  };
};

export default useModalScales;
