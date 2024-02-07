import Button from '@/components/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  user-select: none;
  padding: 10px 18px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const StyledUl = styled.ul`
  padding-left: 28px;
`;

export const Styledli = styled.li`
  color: ${({ theme }) => theme.colors.grey600};
  ::marker {
    color: ${({ theme }) => theme.colors.grey600};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey600};
`;

export const ButtonWrapper = styled.div`
  margin-top: 8px;
  justify-content: space-between;
  display: flex;
  gap: 16px;
`;
