import styled, { css } from 'styled-components';
import { InputVariant } from '.';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 2.7px;
  border: 1px solid;
  outline: none;
  transition: 0.5s ease;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ value, theme }) =>
      !!value ? theme.colors.white : 'transparent'};
    -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    transition: background-color 100000s ease-in-out 0s;
  }
`;

export const Label = styled.label<{ animated: boolean; opened: boolean }>`
  display: block;
  position: ${({ animated }) => (animated ? 'absolute' : 'static')};
  transform: ${({ animated }) => (animated ? 'translateY(-50%)' : 'none')};
  padding: ${({ animated }) => (animated ? '0 4px' : '0')};
  line-height: ${({ animated }) => (animated ? 1 : 1.2)};
  margin-bottom: ${({ animated }) => (animated ? 0 : '4px')};
  background: ${({ animated, theme }) =>
    animated ? theme.colors.blue1000 : 'transparent'};
  top: ${({ opened }) => (opened ? '0' : '50%')};
  pointer-events: ${({ animated }) => animated && 'none'};
  left: 6px;
  transform-origin: center;
  transition: top 200ms;
  z-index: 10;
`;

export const Wrapper = styled.div<{
  disabled: boolean;
  variant: keyof typeof InputVariant;
  error: boolean;
}>`
  position: relative;
  width: 100%;

  ${({ theme, variant, disabled, error }) => {
    switch (variant) {
      case InputVariant.regular:
        return css`
          ${Input} {
            border: none;
            padding: 5px 10px;
            background-color: ${theme.colors.white};
          }
        `;
      case InputVariant.blue:
        return css`
          ${Input} {
            border: 1px solid ${disabled ? 'transparent' : theme.colors.blue600};
            padding: 4px 6px;
            background-color: ${disabled
              ? theme.colors.grey300
              : 'transparent'};
            color: ${disabled ? theme.colors.grey700 : theme.colors.blue600};
            caret-color: ${theme.colors.blue600};
          }
          ${Label} {
            color: ${disabled ? theme.colors.grey700 : theme.colors.blue600};
          }
        `;
      case InputVariant.white:
        return css`
          ${Input} {
            border: 1px solid
              ${error ? theme.colors.red400 : theme.colors.white};
            padding: 8px 12px;
            background-color: ${error ? theme.colors.red800 : 'transparent'};
            color: ${theme.colors.white};
            caret-color: ${theme.colors.white};
            font-size: 16px;
          }
          ${Label} {
            color: ${theme.colors.white};
            font-size: 16px;
          }
        `;
    }
  }}

  :focus-within {
    ${Label} {
      top: 0%;
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;
