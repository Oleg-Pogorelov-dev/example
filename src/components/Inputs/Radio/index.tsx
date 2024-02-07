import { FC, InputHTMLAttributes } from 'react';
import * as S from './styles';
interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
}
const Radio: FC<RadioProps> = ({ id, name, ...props }) => {
  return <S.RadioElement type="radio" id={id} name={name} {...props} />;
};
export default Radio;
