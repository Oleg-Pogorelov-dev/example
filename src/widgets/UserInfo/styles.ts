import { Popover } from 'antd';
import styled from 'styled-components';

import Icons from '@/utils/icons';
import { BREAKPOINTS } from '@/utils/breakpoints';
import Button from '@/components/Button';

export const PopoverContainer = styled(Popover)`
  svg {
    width: 50px;
    height: 50px;
  }
`;

export const Wrapper = styled.div<{ active: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 300ms;
  user-select: none;
  background: ${({ active, theme }) =>
    active ? theme.colors.blue600 : 'transparent'};
  @media (min-width: ${BREAKPOINTS[2]}px) {
    &:hover {
      background: ${({ theme }) => theme.colors.blue600};
    }
  }
  @media (max-width: ${BREAKPOINTS[2]}px) {
    padding: 4px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: ${BREAKPOINTS[2]}px) {
    display: none;
  }
`;

export const StyledProfileIcon = styled(Icons.Profile)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  @media (min-width: ${BREAKPOINTS[2]}px) {
    display: none;
  }
`;

export const Chevron = styled(Icons.Arrow)`
  transform: rotate(-90deg);
`;

export const Name = styled.p`
  font-weight: 350;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
  max-width: 136px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Employee = styled(Name)`
  font-size: 12px;
  line-height: 16px;
  max-width: 136px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const PopoverHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.grey600};
`;

export const PopoverName = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.24;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const PopoverSubtitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.38;
  color: ${({ theme }) => theme.colors.grey600};
  margin-bottom: 2px;
  margin-top: 4px;
`;

export const PopoverValue = styled(PopoverSubtitle)`
  font-weight: 400;
  margin: 0;
  line-height: 1.15;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 16px;
  font-size: 16px;
  padding: 6px;
  background-color: ${({ theme }) => theme.colors.grey1000};
  border: 1px solid transparent;

  :hover {
    background-color: ${({ theme }) => theme.colors.grey1100};
    border: 1px solid ${({ theme }) => theme.colors.grey1200};
  }
`;

export const Logout = styled(Button)`
  width: 100%;
  margin-top: 16px;
  font-size: 16px;
  padding: 6px;
`;
