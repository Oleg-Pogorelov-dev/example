import { ButtonHTMLAttributes, FC, memo, MouseEvent } from 'react';
import * as S from './styles';

export enum ButtonVariant {
  regular = 'regular',
  grey = 'grey',
  blue = 'blue',
  red = 'red',
  orange = 'orange',
  transparent = 'transparent',
  borderless = 'borderless',
  whitebordered = 'whitebordered',
  green = 'green',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: keyof typeof ButtonVariant;
  icon?: JSX.Element;
  isActive?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = ButtonVariant.regular,
  icon,
  isActive,
  className,
  ...props
}) => {
  return (
    <S.Button
      className={className}
      onClick={onClick}
      variant={variant}
      isActive={isActive}
      {...props}
    >
      {!!icon && icon}
      {!!children && <S.Text>{children}</S.Text>}
    </S.Button>
  );
};

export default memo(Button);
