import Button from '@/components/Button';
import Spin from '@/components/Spin';
import Icons from '@/utils/icons';
import styled from 'styled-components';

export const Wrapper = styled.div<{ isLoading: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue1000};
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'auto')};
  padding: 0 20px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 340px;
  }
  .login-form {
    max-width: 300px;
  }

  .login-form-button {
    width: 100%;
  }
`;

export const Submit = styled(Button)<{ disabled?: boolean }>`
  padding: 10px;
  line-height: 100%;
  user-select: none;
  font-size: 16px;
  width: 100%;
  padding: 12px;
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey800 : theme.colors.blue900};
`;

export const Spinner = styled(Spin)`
  border-radius: 6px;
`;

export const Title = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 30px;
`;

export const StyledLogo = styled(Icons.LogoFull)`
  width: 109px;
  height: 32px;
  fill: ${({ theme }) => theme.colors.white};
  position: absolute;
  left: 16px;
  top: 16px;
  cursor: pointer;
`;

export const ErrorNetworkMessage = styled.p`
  border: 1px solid ${({ theme }) => theme.colors.red400};
  background: ${({ theme }) => theme.colors.red800};
  border-radius: 4px;
  padding: 2px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  text-align: center;
`;

export const ErrorLoginMessage = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
`;
