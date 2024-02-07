import { memo, useCallback, useEffect, useState } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

import { Scale } from '@/utils/types/scale';
import { scalePoints } from '@/utils/functions';
import { useAppDispatch } from '@/store/store';
import ScaleOfRadio from '../ScaleOfRadio';

import * as S from './styles';

interface SubscaleProps {
  scaleKey: string;
  scaleValue?: number | null;
  item: Scale;
  inputName: string;
  setReducer: ActionCreatorWithPayload<any, string>;
  isReset: boolean;
}

const Subscale = ({
  scaleKey,
  scaleValue,
  item,
  inputName,
  setReducer,
  isReset,
  ...props
}: SubscaleProps) => {
  const [valueScaleState, setValueScaleState] = useState<
    number | null | undefined
  >(scaleValue);

  useEffect(() => {
    setValueScaleState(scaleValue);
  }, [scaleValue]);

  useEffect(() => {
    setValueScaleState(null);
  }, [isReset]);

  const dispatch = useAppDispatch();

  const setScaleData = useCallback(
    (value: { [x: string]: number | string }) => {
      dispatch(setReducer(value));
    },
    []
  );

  return (
    <S.CollapsePanelWrapper
      header={
        <S.CollapsePanelHeader>
          <S.Title>{item.name}</S.Title>
          <S.Points>{scalePoints(valueScaleState)}</S.Points>
        </S.CollapsePanelHeader>
      }
      key={item.name}
      {...props}
    >
      <S.Block>
        <S.Content>
          {item.values?.map((value) => (
            <ScaleOfRadio
              key={value.title}
              item={value}
              scaleKey={scaleKey}
              name={item.name}
              setScaleData={setScaleData}
              setValue={setValueScaleState}
              inputName={inputName}
              value={valueScaleState}
            />
          ))}
        </S.Content>
      </S.Block>
    </S.CollapsePanelWrapper>
  );
};

export default memo(Subscale);
