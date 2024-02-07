import React, {
  FC,
  InputHTMLAttributes,
  memo,
  RefObject,
  useRef,
  useState,
} from 'react';

import useEventListener from '@/utils/hooks/useEventListener';
import Icons from '@/utils/icons';

import * as S from './styles';

export enum InputVariant {
  regular = 'regular',
  blue = 'blue',
  white = 'white',
}

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  animatedLabel?: boolean;
  label?: string;
  variant?: keyof typeof InputVariant;
  inputRef?: RefObject<HTMLInputElement> | null;
  className?: string;
  disabled?: boolean;
  error?: boolean;
}

const TextInput: FC<TextInputProps> = ({
  id,
  value,
  placeholder,
  disabled = false,
  onChange,
  autoComplete = 'off',
  animatedLabel = false,
  label,
  variant = InputVariant.regular,
  inputRef,
  className,
  type,
  error = false,
  ...props
}) => {
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement | null>(null);

  useEventListener(
    'input',
    (event: Event) => onChange && onChange(event as any),
    inputRef ?? ref
  );

  return (
    <S.Wrapper
      className={className}
      disabled={disabled}
      variant={variant}
      error={error}
    >
      {label && id && (
        <S.Label htmlFor={id} animated={animatedLabel} opened={!!value}>
          {label}
        </S.Label>
      )}
      <S.InputContainer>
        <S.Input
          id={id}
          ref={inputRef ?? ref}
          name={props.name ?? id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
          disabled={disabled}
          type={isPasswordShow ? 'text' : type}
          {...props}
        />
        {type === 'password' && (
          <S.IconWrapper onClick={() => setIsPasswordShow((prev) => !prev)}>
            {isPasswordShow ? (
              <Icons.EyeOpen size={20} />
            ) : (
              <Icons.EyeClose size={20} />
            )}
          </S.IconWrapper>
        )}
      </S.InputContainer>
    </S.Wrapper>
  );
};

export default memo(TextInput);
