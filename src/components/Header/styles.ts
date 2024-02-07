import styled from 'styled-components';
import Icons from '@/utils/icons';
import Button from '../Button';
import { BREAKPOINTS } from '@/utils/breakpoints';

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 6px 20px;
  gap: 16px;
  background: ${({ theme }) => theme.colors.blue400};
  @media (max-width: ${BREAKPOINTS[2]}px) {
    padding: 8px 16px;
    gap: 8px 10px;
  }
  @media (max-width: ${BREAKPOINTS[4]}px) {
    padding: 6px 12px;
  }
`;

export const SearchContainer = styled.div<{ hasPadding: boolean }>`
  display: flex;
  gap: 20px;
  width: 60%;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2.7px;

  @media (max-width: ${BREAKPOINTS[2]}px) {
    margin-left: 14px;
    gap: 6px;
  }
  @media (max-width: ${BREAKPOINTS[4]}px) {
    margin-left: 0;
  }
`;

export const SearchIcon = styled(Icons.Search)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  pointer-events: none;
  fill: ${({ theme }) => theme.colors.blue800};
  opacity: 0.5;
  @media (max-width: ${BREAKPOINTS[2]}px) {
    display: none;
  }
`;
export const CloseIcon = styled(Icons.Close)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.blue800};
  opacity: 0.5;
  cursor: pointer;
`;
export const Settings = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  column-gap: 20px;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${BREAKPOINTS[2]}px) {
    gap: 10px;
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const MobileLogo = styled(Icons.Logo)`
  color: white;
  width: 28px;
  height: 31px;
  @media (min-width: ${BREAKPOINTS[2]}px) {
    display: none;
  }
`;

export const Logo = styled(Icons.LogoFull)`
  width: 109px;
  height: 32px;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${BREAKPOINTS[2]}px) {
    display: none;
  }
`;

export const Reload = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  &.fade {
    > svg {
      transform-origin: center;
      animation: fadeRotate 0.5s cubic-bezier(0.37, 0.37, 0.18, 1);
    }
  }
  @keyframes fadeRotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(720deg);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: ${BREAKPOINTS[2]}px) {
    gap: 6px;
  }
`;

export const DatePickerWrapper = styled.div`
  width: 140px;
`;
