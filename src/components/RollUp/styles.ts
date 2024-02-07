import styled from 'styled-components';

export const RollUp = styled.div<{
  isActive?: boolean;
}>`
  display: flex !important;
  justify-content: space-between;
  aligin-items: center;
  transform: rotate(${({ isActive }) => (isActive ? 90 : 0)}deg);
  transition: transform 0.3s ease-in;
`;
