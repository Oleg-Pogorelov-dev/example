import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  scaleOfWassermanSelector,
  wassermanIsLoadSelector,
} from '@/store/scaleOfWasserman/selectors';
import {
  hospitalDysphagiaIsLoadSelector,
  hospitalDysphagiaScaleSelector,
} from '@/store/hospitalDysphagiaScale/selectors';
import {
  dysarthriaRatingIsLoadSelector,
  dysarthriaRatingScaleSelector,
} from '@/store/dysarthriaRatingScale/selectors';
import { getAssignmentNaz } from '@/store/survey/thunks';
import {
  scaleScoreIsLoadSelector,
  scaleScoreSelector,
} from '@/store/scales/selectors';
import { protocolIdSelector } from '@/store/survey/selectors';
import { resetProtocolId } from '@/store/survey/reducer';
import { resetHospitalDysphagiaScale } from '@/store/hospitalDysphagiaScale/reducer';
import { resetScaleOfWasserman } from '@/store/scaleOfWasserman/reducer';
import { resetDysarthriaRatingScale } from '@/store/dysarthriaRatingScale/reducer';
import {
  resetDysarthriaScaleScore,
  resetKimScaleScore,
  resetScaleScore,
  resetWassermanScaleScore,
} from '@/store/scales/reducer';
import { getHospitalDysphagiaScale } from '@/store/hospitalDysphagiaScale/thunks';
import { getScaleOfWasserman } from '@/store/scaleOfWasserman/thunks';
import { getDysarthriaRatingScale } from '@/store/dysarthriaRatingScale/thunks';
import { setOpen } from '@/store/confirmScalesModal/reducer';
import {
  checkPartiallyPoints,
  makeInterpretationIcf,
  partiallyFilledMessage,
} from '@/utils/functions';
import { getScaleScore } from '@/store/scales/thunks';
import { getIcf } from '@/store/icf/thunks';
import {
  resetSavedIcf,
  resetSelected,
  resetText,
  setIcfDescription,
  setIcfRecomendation,
} from '@/store/icf/reducer';
import {
  icfDescriptionSelector,
  icfRecomendationSelector,
  savedIcfSelector,
} from '@/store/icf/selector';

const useScales = () => {
  const dispatch = useAppDispatch();
  const { ehrCaseId, nazId } = useParams();

  const [isOpenDysarthriaRating, setIsOpenDysarthriaRating] = useState(false);
  const [isOpenHospitalDysphagia, setIsOpenHospitalDysphagia] = useState(false);
  const [isOpenScaleOfWasserman, setIsOpenScaleOfWasserman] = useState(false);
  const [isSurvied, setIsSurvied] = useState(false);

  const savedIcf = useAppSelector(savedIcfSelector);
  const icfDescription = useAppSelector(icfDescriptionSelector);
  const icfRecomendation = useAppSelector(icfRecomendationSelector);
  const scaleOfWasserman = useAppSelector(scaleOfWassermanSelector);
  const hospitalDysphagiaScale = useAppSelector(hospitalDysphagiaScaleSelector);
  const dysarthriaRatingScale = useAppSelector(dysarthriaRatingScaleSelector);
  const scaleScore = useAppSelector(scaleScoreSelector);
  const wassermanIsLoad = useAppSelector(wassermanIsLoadSelector);
  const hospitalDysphagiaIsLoad = useAppSelector(
    hospitalDysphagiaIsLoadSelector
  );
  const dysarthriaRatingIsLoad = useAppSelector(dysarthriaRatingIsLoadSelector);
  const scaleScoreIsLoad = useAppSelector(scaleScoreIsLoadSelector);
  const protocolId = useAppSelector(protocolIdSelector);

  useEffect(() => {
    dispatch(getAssignmentNaz(nazId!));

    return () => {
      dispatch(resetProtocolId());
      dispatch(resetHospitalDysphagiaScale());
      dispatch(resetScaleOfWasserman());
      dispatch(resetDysarthriaRatingScale());
      dispatch(resetScaleScore());
      dispatch(resetSelected());
      dispatch(resetSavedIcf());
      dispatch(resetText());
    };
  }, []);

  useEffect(() => {
    if (protocolId) {
      dispatch(
        getScaleScore({
          protocolId,
        })
      );
      dispatch(getIcf(protocolId));
    }
  }, [protocolId]);

  const interpretationIcfString = useMemo(
    () =>
      savedIcf?.map(
        (item, index) =>
          makeInterpretationIcf(item) + `${!!savedIcf[index + 1] ? ', ' : ''}`
      ),
    [savedIcf]
  );

  const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setIcfDescription(e.target.value));
  };

  const changeRecomendation = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setIcfRecomendation(e.target.value));
  };

  const checkScales = () => {
    const isPartially =
      checkPartiallyPoints(hospitalDysphagiaScale) ||
      checkPartiallyPoints(scaleOfWasserman) ||
      checkPartiallyPoints(dysarthriaRatingScale);

    if (isSurvied && isPartially) {
      return partiallyFilledMessage();
    }

    dispatch(setOpen());
  };

  const getScale = (keys: string[]) => {
    if (protocolId) {
      if (!isOpenHospitalDysphagia && keys.includes('1')) {
        dispatch(
          getHospitalDysphagiaScale({
            protocolId,
          })
        );
        setIsOpenHospitalDysphagia(true);
      }
      if (!isOpenScaleOfWasserman && keys.includes('2')) {
        dispatch(
          getScaleOfWasserman({
            protocolId,
          })
        );
        setIsOpenScaleOfWasserman(true);
      }
      if (!isOpenDysarthriaRating && keys.includes('3')) {
        dispatch(
          getDysarthriaRatingScale({
            protocolId,
          })
        );
        setIsOpenDysarthriaRating(true);
      }
    }
  };

  const clearHospitalDysphagia = () => {
    dispatch(resetHospitalDysphagiaScale());
    dispatch(resetKimScaleScore());
  };

  const clearWasserman = () => {
    dispatch(resetScaleOfWasserman());
    dispatch(resetWassermanScaleScore());
  };

  const clearDysarthria = () => {
    dispatch(resetDysarthriaRatingScale());
    dispatch(resetDysarthriaScaleScore());
  };

  return {
    scaleOfWasserman,
    hospitalDysphagiaScale,
    dysarthriaRatingScale,
    ehrCaseId,
    wassermanIsLoad,
    hospitalDysphagiaIsLoad,
    dysarthriaRatingIsLoad,
    scaleScore,
    protocolId,
    checkScales,
    getScale,
    setIsSurvied,
    isSurvied,
    scaleScoreIsLoad,
    interpretationIcfString,
    clearHospitalDysphagia,
    clearWasserman,
    clearDysarthria,
    changeDescription,
    changeRecomendation,
    icfDescription,
    icfRecomendation,
  };
};

export default useScales;
