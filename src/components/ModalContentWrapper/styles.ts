import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  padding: 10px 18px;
  overflow: auto;
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

  &::-webkit-scrollbar {
    width: 8px;
    height: 6px;
    transition: 1s;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);

    :hover {
      background: rgba(0, 0, 0, 0.4);
    }

    :active {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;
export const Header = styled.div`
  user-select: none;
  color: ${({ theme }) => theme.colors.blue600};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const HeaderTitle = styled.span`
  margin-right: auto;
`;
