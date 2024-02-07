import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: white;
  padding: 6px 20px;
  border-radius: 8px 8px 0 0;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.5);

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 4px;
  }
`;
