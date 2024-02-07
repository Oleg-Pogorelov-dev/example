import styled from 'styled-components';

export const CheckboxElement = styled.div<{ checked: boolean }>`
  & input {
    flex-shrink: 0;

    position: relative;
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.blue600};
    transition: 0.3s ease;
    outline: none;
    cursor: pointer;
    &::before {
      content: '';
      opacity: ${({ checked }) => (checked ? 1 : 0)};
      position: absolute;
      right: 6px;
      top: 3px;
      width: 7px;
      height: 12px;
      border-bottom: 3px solid ${({ theme }) => theme.colors.blue600};
      border-right: 3px solid ${({ theme }) => theme.colors.blue600};
      transform: rotate(45deg);
      transition: 0.3s ease;
    }
  }
  & label {
    display: flex;
    align-items: center;
    column-gap: 10px;
    cursor: pointer;
    font-size: 13px;
    letter-spacing: -0.2px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.black100};
    & a {
      color: ${({ theme }) => theme.colors.blue1200};
    }
  }
`;
