import styled from 'styled-components';

export const RadioElement = styled.input`
  width: 24px;
  height: 24px;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 50%;
  border: 8px solid ${({ theme }) => theme.colors.white};
  outline: 1px solid ${({ theme }) => theme.colors.grey600};
  :hover {
    outline: ${({ theme }) => theme.colors.grey600}90 solid 1px;
  }
  :checked {
    background: ${({ theme }) => theme.colors.blue700};
    outline: 1px solid ${({ theme }) => theme.colors.blue700};
  }
`;
