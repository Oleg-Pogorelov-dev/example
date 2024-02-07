import styled from 'styled-components';
import Radio from '@/components/Inputs/Radio';

export const RadioItem = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled(Radio)``;

export const Label = styled.label`
  max-width: 85%;
  color: ${({ theme }) => theme.colors.grey600};
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-left: 10px;
`;
