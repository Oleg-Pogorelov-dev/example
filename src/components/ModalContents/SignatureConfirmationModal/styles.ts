import Button from '@/components/Button';
import Icons from '@/utils/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: auto;
  padding: 20px;
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.colors.blue900};
`;

export const Spinner = styled(Icons.Spinner)`
  width: 48px;
  height: 48px;
`;

export const StyledButton = styled(Button)`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.blue900};
`;
