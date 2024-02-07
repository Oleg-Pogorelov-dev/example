import styled from 'styled-components';

import Icons from '@/utils/icons';
import { BREAKPOINTS } from '@/utils/breakpoints';

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 6px 20px;
  gap: 16px;
  background: ${({ theme }) => theme.colors.blue400};

  @media (max-width: ${BREAKPOINTS[2]}px) {
    padding: 8px 16px;
    gap: 8px 10px;
  }

  @media (max-width: ${BREAKPOINTS[4]}px) {
    padding: 6px 12px;
    flex-wrap: wrap;
  }
`;

export const HeaderButton = styled.button`
  width: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 17px;
  border-radius: 5.2px;
  background: ${({ theme }) => theme.colors.blue900};
  color: ${({ theme }) => theme.colors.white};
  font-family: SegoeUI;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 20px;
  color: ${({ theme }) => theme.colors.white};
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

export const StyledLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;

  &:hover {
    color: white;
  }
`;
