import styled from 'styled-components';

export const Cell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
  word-wrap: break-word;
  word-break: break-word;
`;

export const ManIconWrapper = styled.div`
  position: relative;
  width: 40px;
  flex-shrink: 0;
`;

export const ManAge = styled.div<{ color: string }>`
  position: absolute;
  left: 15px;
  bottom: 0;
  font-weight: 500;
  color: ${({ color }) => color};
`;
export const Name = styled.p``;
