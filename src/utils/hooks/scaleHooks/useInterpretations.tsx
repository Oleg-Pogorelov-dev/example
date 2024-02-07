import { useMemo } from 'react';

import { useAppSelector } from '@/store/store';
import { scaleOfWassermanSelector } from '@/store/scaleOfWasserman/selectors';
import { hospitalDysphagiaScaleSelector } from '@/store/hospitalDysphagiaScale/selectors';
import { dysarthriaRatingScaleSelector } from '@/store/dysarthriaRatingScale/selectors';
import { scaleScoreSelector } from '@/store/scales/selectors';
import { calculateSum, checkValuesOfScale } from '@/utils/functions';

const useInterpretations = () => {
  const scaleOfWasserman = useAppSelector(scaleOfWassermanSelector);
  const hospitalDysphagiaScale = useAppSelector(hospitalDysphagiaScaleSelector);
  const dysarthriaRatingScale = useAppSelector(dysarthriaRatingScaleSelector);
  const scaleScore = useAppSelector(scaleScoreSelector);

  const interpretationHospitalDysphagia = useMemo(() => {
    let interpretation = '';

    if (
      checkValuesOfScale(hospitalDysphagiaScale) ||
      scaleScore.kim_score !== null
    ) {
      let sum = calculateSum(hospitalDysphagiaScale);

      if (!sum && !!scaleScore.kim_score) {
        sum = scaleScore.kim_score;
      }
      if (sum <= 3) {
        interpretation = 'дисфагии нет, диета без ограничений';
      }
      if (sum >= 4 && sum <= 6) {
        interpretation = `легкая дисфагия, диета с правильным 
                          позиционированием при питье`;
      }
      if (sum >= 7 && sum <= 9) {
        interpretation = `средне-легкая дисфагия, рекомендована 
                          диета с ограничением`;
      }
      if (sum >= 10 && sum <= 12) {
        interpretation = `средняя дисфагия, рекомендована 
                          диета с ограничением `;
      }
      if (sum >= 13) {
        interpretation = `тяжелая дисфагия, рекомендовано зондовое 
                          питание, тренировочное кормление пудингом`;
      }
    }

    return interpretation;
  }, [hospitalDysphagiaScale, scaleScore.kim_score]);

  const interpretationWasserman = useMemo(() => {
    let interpretation = '';

    if (
      checkValuesOfScale(scaleOfWasserman) ||
      scaleScore.wasserman_score !== null
    ) {
      let sum = calculateSum(scaleOfWasserman);

      if (!sum && !!scaleScore.wasserman_score) {
        sum = scaleScore.wasserman_score;
      }
      if (sum <= 20) {
        interpretation = 'Легкая степень';
      }
      if (sum >= 21 && sum <= 40) {
        interpretation = `Средняя степень`;
      }
      if (sum >= 41) {
        interpretation = `Грубая степень`;
      }
    }

    return interpretation;
  }, [scaleOfWasserman, scaleScore.wasserman_score]);

  const interpretationDysarthria = useMemo(() => {
    let interpretation = '';

    if (
      checkValuesOfScale(dysarthriaRatingScale) ||
      scaleScore.dysarthria_score !== null
    ) {
      let sum = calculateSum(dysarthriaRatingScale);

      if (!sum && !!scaleScore.dysarthria_score) {
        sum = scaleScore.dysarthria_score;
      }
      if (sum <= 5) {
        interpretation = 'речь в норме';
      }
      if (sum >= 6 && sum <= 19) {
        interpretation = `дизартрия легкой степени выраженности`;
      }
      if (sum >= 20 && sum <= 39) {
        interpretation = `дизартрия умеренной степени выраженности`;
      }
      if (sum >= 40 && sum <= 56) {
        interpretation = `дизартрия тяжелой степени выраженности`;
      }
      if (sum >= 57) {
        interpretation = `анартрия`;
      }
    }

    return interpretation;
  }, [dysarthriaRatingScale, scaleScore.dysarthria_score]);

  return {
    interpretationDysarthria,
    interpretationHospitalDysphagia,
    interpretationWasserman,
  };
};
export default useInterpretations;
