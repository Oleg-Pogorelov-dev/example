import styled from 'styled-components';

export const Wrapper = styled.div<{
  cover: boolean;
  size?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${({ size }) => (size ? size + 'px' : '100%')};
  height: ${({ size }) => (size ? size + 'px' : '100%')};
  overflow: hidden;

  .spinner {
    z-index: 10;

    ${({ cover }) =>
      cover &&
      `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  `}
  }
`;

export const Overlay = styled.div<{ replace: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(
    255,
    255,
    255,
    ${({ replace }) => (replace ? 1 : 0.5)}
  );
  z-index: 5;
`;
