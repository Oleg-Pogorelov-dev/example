import { FC } from 'react';
import * as S from './styles';
interface CheckboxProps {
  value: boolean;
  children?: JSX.Element;
  onChange?: (state: boolean) => void;
}
const Checkbox: FC<CheckboxProps> = ({ value, children, onChange }) => {
  return (
    <S.CheckboxElement checked={value}>
      <label>
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
