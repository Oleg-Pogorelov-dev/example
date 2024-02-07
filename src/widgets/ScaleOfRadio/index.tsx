import { Dispatch, SetStateAction, memo, useCallback } from 'react';

import { Value } from '@/utils/types/scale';

import * as S from './styles';

interface ScaleOfRadioProps {
  name: string;
  item: Value;
  inputName: string;
  scaleKey: string;
  setScaleData: (val: { [x: string]: string | number }) => void;
  setValue: Dispatch<SetStateAction<number | null | undefined>>;
  value?: number | null;
}

const ScaleOfRadio = ({
  name,
  item,
  inputName,
  scaleKey,
  setScaleData,
  setValue,
  value,
}: ScaleOfRadioProps) => {
  const handleOnChange = useCallback(() => {
    setValue(item.value as number | null);
    setScaleData({ [scaleKey]: item.value });
  }, [setValue, setScaleData]);

  return (
    <S.RadioItem>
      <S.RadioInput
        checked={value === item.value}
        id={`${inputName}${scaleKey}${item.value}`}
        name={name}
        onChange={handleOnChange}
      />
      <S.Label
        htmlFor={`${inputName}${scaleKey}${item.value}`}
      >{`(${item.value}) ${item.title}`}</S.Label>
    </S.RadioItem>
  );
};

export default memo(ScaleOfRadio);
