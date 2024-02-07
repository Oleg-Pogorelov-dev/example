import styled from 'styled-components';

import Icons from '@/utils/icons';

export const Title = styled.span`
  font-weight: 600;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey300};
  font-size: 14px;
  div {
    ::-webkit-scrollbar {
      width: 8px;
      height: 6px;
      transition: 1s;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.1);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.2);
      :hover {
        background: rgba(0, 0, 0, 0.4);
      }
      :active {
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export const TableContainer = styled.div`
  overflow-y: auto;
  position: relative;
  height: 100%;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white300};
`;

export const Spinner = styled(Icons.Spinner)`
  width: 32px;
  height: 32px;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
  line-height: 17px;
`;

export const StatusWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const DoctorInfoWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 15px;
`;

export const StatusContainer = styled.div`
  margin: 10px;
  padding: 16px 10px;
  background: ${({ theme }) => theme.colors.white};
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DoctorInfo = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  text-align: right;
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 14.784px;
  font-style: normal;
  font-weight: bold;
  line-height: 17.119px; /* 115.789% */
`;

export const StatusBlock = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  font-family: HelveticaNeueCyr;
  font-size: 15px;
  font-style: normal;
  line-height: 19px;
`;

export const StatusField = styled.div``;

export const StatusName = styled.div`
  margin-top: 2px;
  margin-right: 5px;
  float: left;
  width: max-content;
  font-weight: bold;
  border-bottom: 1px solid grey;
  line-height: 12px;
`;

export const StatusValue = styled.div`
  margin-left: 2px;
`;
