import styled from 'styled-components';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';

export const CollapsePanelWrapper = styled(CollapsePanel)`
  div > span {
    margin-left: 18px;
  }
`;

export const CollapsePanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey600};
`;

export const Points = styled.p`
  color: ${({ theme }) => theme.colors.blue900};
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.colors.grey600};
  justify-content: end;
`;

export const Content = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 95%;
  margin-left: 50px;
`;

export const Title = styled.div`
  width: 95%;
  color: ${({ theme }) => theme.colors.grey600};
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
`;
