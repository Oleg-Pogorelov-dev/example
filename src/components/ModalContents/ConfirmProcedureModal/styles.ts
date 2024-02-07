import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: auto;
  user-select: none;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  padding-top: 25px;
  color: ${({ theme }) => theme.colors.blue1300};
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Button = styled.div`
  cursor: pointer;
`;
