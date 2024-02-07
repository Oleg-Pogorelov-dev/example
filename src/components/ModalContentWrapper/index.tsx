import { FC } from 'react';

import Icons from '@/utils/icons';
import Button from '../Button';

import * as S from './styles';

interface ModalContentWrapperProps {
  children: JSX.Element;
  title?: string;
  onModalCancel: () => void;
  hideCloseButton?: boolean;
}

const ModalContentWrapper: FC<ModalContentWrapperProps> = ({
  children,
  title,
  onModalCancel,
  hideCloseButton,
}) => {
  return (
    <S.Wrapper>
      <S.Header role="header">
        <Icons.Logo size={17} />
        {title && <S.HeaderTitle>{title}</S.HeaderTitle>}
        {!hideCloseButton && (
          <Button
            variant="borderless"
            icon={<Icons.Close />}
            onClick={onModalCancel}
          />
        )}
      </S.Header>
      {children}
    </S.Wrapper>
  );
};

export default ModalContentWrapper;
