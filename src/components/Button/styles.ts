import styled, { css } from 'styled-components';
import { colors } from '@/utils/theme';
import { ButtonVariant } from '.';

interface ButtonProps {
  isActive?: boolean;
  disabled?: boolean;
  variant: keyof typeof ButtonVariant;
}

export const Text = styled.div`
  margin: 0 auto;
`;

export const Loader = styled.div`
  margin: 2px auto;

  .ant-spin {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-spin-dot-item {
    background-color: ${colors.white};
  }
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  transition: 0.5s ease;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ variant, theme, isActive, disabled }) => {
    switch (variant) {
      case ButtonVariant.regular:
        return css`
          background-color: ${isActive ? theme.colors.blue600 : 'transparent'};
          @media ${theme.breakpoints.hover} {
            &:hover {
              background-color: ${theme.colors.blue600};
            }
          }
        `;
      case ButtonVariant.grey:
        return css`
          border: 1px solid ${theme.colors.grey500};
          color: ${({ theme }) => theme.colors.grey600};
          background-color: ${isActive
            ? theme.colors.grey500
            : theme.colors.grey100};
          @media ${theme.breakpoints.hover} {
            &:hover {
              background-color: ${theme.colors.grey500};
            }
          }
        `;
      case ButtonVariant.blue:
        return css`
          color: ${theme.colors.white};
          background-color: ${disabled
            ? theme.colors.grey400
            : isActive
            ? theme.colors.blue600
            : theme.colors.blue400};
          @media ${theme.breakpoints.hover} {
            &:hover {
              background-color: ${!disabled && theme.colors.blue600};
            }
          }
        `;
      case ButtonVariant.red:
        return css`
          background-color: ${theme.colors.red500};
          color: ${theme.colors.white};
          @media ${theme.breakpoints.hover} {
            &:hover {
              background-color: ${theme.colors.red400};
            }
          }
        `;
      case ButtonVariant.orange:
        return css`
          background-color: ${theme.colors.orange400};
          color: ${theme.colors.white};
          @media ${theme.breakpoints.hover} {
            &:hover {
              background-color: ${theme.colors.orange500};
            }
          }
        `;
      case ButtonVariant.green:
        return css`
          padding: 5px 15px;
          border-radius: 2px;
          background-color: ${disabled
            ? theme.colors.grey400
            : theme.colors.green500};
          color: ${theme.colors.white};
          @media ${theme.breakpoints.hover} {
            &:hover {
              background-color: ${theme.colors.green400};
            }
          }
        `;
      case ButtonVariant.transparent:
        return css`
          border: 1px solid transparent;
          background-color: transparent;
          @media ${theme.breakpoints.hover} {
            &:hover {
              border: 1px solid ${theme.colors.grey500};
            }
          }
        `;
      case ButtonVariant.whitebordered:
        return css`
          background: ${theme.colors.white300};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.white};

          @media ${theme.breakpoints.hover} {
            &:hover {
              background-color: ${theme.colors.white};
              color: ${theme.colors.blue600};
            }
          }
        `;
      case ButtonVariant.borderless:
        return css`
          background-color: transparent;
          color: ${theme.colors.blue100};
          padding: 0;
          @media ${theme.breakpoints.hover} {
            &:hover {
              color: ${theme.colors.blue600};
            }
          }
        `;
    }
  }}
`;
