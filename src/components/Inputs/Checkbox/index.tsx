import { FC } from 'react';
import * as S from './styles';
interface CheckboxProps {
  value: boolean;
  children?: JSX.Element;
  onChange?: (state: boolean) => void;
  className?: string;
}
const Checkbox: FC<CheckboxProps> = ({
  value,
  children,
  onChange,
  className,
}) => {
  return (
    <S.CheckboxElement checked={value}>
      <label className={className}>
        <input
          type="checkbox"
          checked={value}
          onChange={({ target: { checked } }) => {
            onChange && onChange(checked);
          }}
        />
        {children}
      </label>
    </S.CheckboxElement>
  );
};
export default Checkbox;
