import styled from 'styled-components';
import Icons from '@/utils/icons';

export const ICFForm = styled.div`
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 10px;
`;

export const Faktor = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FaktorLabels = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FaktorLabel = styled.div`
  margin-bottom: 7px;
  font-family: HelveticaNeueCyr;
  font-size: 17px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  color: ${({ theme }) => theme.colors.blue900};
`;

export const FaktorInput = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 2.5px;
  border: 1px solid ${({ theme }) => theme.colors.grey1300};
  width: 120px;
  height: 30px;
  color: rgb(169, 170, 175);
  align-items: center;
  padding: 7px;
  cursor: pointer;
`;

export const FaktorValue = styled.div`
  padding: 8px 0px 5px;
  color: ${({ theme }) => theme.colors.grey600};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const DiagnosisField = styled.div<{ isGray: boolean }>`
  position: relative;
  background: ${({ theme, isGray }) =>
    isGray ? theme.colors.grey1600 : theme.colors.white};
  min-height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.grey1300};
  border-radius: 4px;
  resize: none;
  padding: 4px 8px;
  cursor: pointer;
`;

export const GreenButton = styled(Icons.AddButton)`
  width: 32px;
  height: 32px;
  align-self: end;
  cursor: pointer;
`;

export const Diagnosis = styled.div`
  margin-top: 14px;
  font-family: HelveticaNeueCyr;
  font-size: 17px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  color: ${({ theme }) => theme.colors.blue900};
`;

export const FaktorDeterminantList = styled.div`
  display: flex;
  gap: 16px;
`;

export const DiagnosisValue = styled.div`
  margin-top: 3px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.grey600};
  leading-trim: both;
  text-edge: cap;
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FillForm = styled(Icons.FillForm)`
  position: absolute;
  right: 6px;
  bottom: 6px;
`;

export const FaktorDeterminantDots = styled.div`
  margin-bottom: 12px;
  font-size: 24px;
`;

export const ClearButton = styled(Icons.Clear)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  width: 50%;
`;
