import { Select, SelectProps } from 'antd';
import { FC, useMemo } from 'react';
import * as S from './styles';

interface CustomSelectProps extends SelectProps {
  label?: string;
  className?: string;
}

const CustomSelect: FC<CustomSelectProps> = ({
  className,
  label,
  ...props
}) => {
  const isValueExist = useMemo(() => {
    const notNull = props.value !== null;
    const notUndefined = props.value !== undefined;
    const notEmpty = props.value !== '';

    return notNull && notUndefined && notEmpty
  }, [props.value]);

  return (
    <S.Wrapper className={className}>
      {!!label && <S.Label disabled={props.disabled}>{label}</S.Label>}
      <Select
        popupClassName="custom-select-dropdown"
        className="custom-select"
        suffixIcon={props.suffixIcon || <S.SelectChevron />}
        clearIcon={<S.ClearButton />}
        {...props}
        allowClear={!!props.onClear && isValueExist}
        showSearch={false}
        showArrow
        tagRender={({ label }) => {
          const isArray = Array.isArray(props.value);

          if (isArray) {
            const index = props.value.findIndex((el: string) => el === label);
            const isLast = index === props.value.length - 1;
            return (
              <>
                {label}
                {!isLast && ', '}
              </>
            );
          } else return <>{label}</>;
        }}
      />
    </S.Wrapper>
  );
};

export default CustomSelect;
