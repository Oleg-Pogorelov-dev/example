import { Modal as AntdModal } from 'antd';
import styled from 'styled-components';

export const Modal = styled(AntdModal)`
  border-radius: 8px;
  overflow: hidden;
  .ant-modal-body {
    padding: 0;
  }
`;
