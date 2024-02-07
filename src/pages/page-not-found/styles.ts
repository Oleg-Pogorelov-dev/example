import Button from '@/components/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
export const ErrorCode = styled.p`
  font-family: monospace;
  font-size: 160px;
  font-weight: 600;
  color: black;
  text-shadow: 4px 4px 0px ${({ theme }) => theme.colors.blue400};
  line-height: 100%;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  font-family: monospace;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  padding: 4px 40px;
  margin-top: 20px;
  font-size: 18px;
  border-radius: 14px;
`;
