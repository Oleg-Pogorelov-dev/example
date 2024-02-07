import { FC } from 'react';
import * as S from './styles';
interface WarningModalContentProps {
  onSubmit: () => void;
  onCancel: () => void;
}

const WarningModalContent: FC<WarningModalContentProps> = ({
  onCancel,
  onSubmit,
}) => {
  return (
    <S.Wrapper>
      <S.Text>Смена профиля повлечет к:</S.Text>
      <S.StyledUl>
        <S.Styledli>закрытию всех активных форм</S.Styledli>
        <S.Styledli>потере несохраненных данных</S.Styledli>
      </S.StyledUl>
      <S.Text>Продолжить?</S.Text>
      <S.ButtonWrapper>
        <S.StyledButton variant="grey" onClick={onSubmit}>
          Да
        </S.StyledButton>
        <S.StyledButton variant="grey" onClick={onCancel}>
          Нет
        </S.StyledButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default WarningModalContent;
