import { memo, useState, useEffect } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Collapse } from 'antd';

import RollUp from '@/components/RollUp';
import { scalePointsSum } from '@/utils/functions';
import { Scale, ScaleData } from '@/utils/types/scale';
import Subscale from '../Subscale';

import * as S from './styles';

interface ScaleProps {
  name: string;
  scale: ScaleData;
  total: number;
  scaleText: Scale[];
  setReducer: ActionCreatorWithPayload<any, string>;
  inputName: string;
  key: string;
  interpretation?: string;
  score: number | null;
  isLoading: boolean;
  clear: () => void;
}

const ScaleComponent = ({
  name,
  scale,
  total,
  scaleText,
  setReducer,
  inputName,
  key,
  interpretation = '',
  score,
  isLoading,
  clear,
  ...props
}: ScaleProps) => {
  const [scaleState, setScaleState] = useState(scale);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    setScaleState(scale);
  }, [isLoading]);

  return (
    <S.CollapsePanelWrapper
      header={
        <S.CollapsePanelHeader>
          <S.Title>{name}</S.Title>
          <S.InfoBlock>
            <S.Interpretation>{interpretation}</S.Interpretation>
            <S.Points>{scalePointsSum(scale, total, score)}</S.Points>
          </S.InfoBlock>
        </S.CollapsePanelHeader>
      }
      key={key}
      {...props}
    >
      <S.ButtonClear
        onClick={() => {
          clear();
          setScaleState({});
          setIsReset(!isReset);
        }}
      />
      <S.Block>
        <S.Content>
          <Collapse
            className='ant-collapse-custom-item'
            expandIcon={(pop) => <RollUp isActive={pop.isActive} />}
            accordion
          >
            {scaleText.map((item) => (
              <Subscale
                key={item.name}
                item={item}
                scaleKey={`val_${item.id}`}
                scaleValue={scaleState[`val_${item.id}`]}
                inputName={inputName}
                setReducer={setReducer}
                isReset={isReset}
              />
            ))}
          </Collapse>
        </S.Content>
      </S.Block>
    </S.CollapsePanelWrapper>
  );
};

export default memo(ScaleComponent);
