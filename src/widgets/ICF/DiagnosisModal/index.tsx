import { FC } from 'react';

import {
  MODAL_CONTENT_TITLE,
  MODAL_DEFAULT_CONFIG,
} from '@/utils/Static/modal';
import { ModalContenTitle } from '@/utils/types/common';
import Icons from '@/utils/icons';
import ModalContentWrapper from '@/components/ModalContentWrapper';
import TextInput from '@/components/Inputs/TextInput';
import { makeInterpretationIcf } from '@/utils/functions';
import useDiagnosisModal from '@/utils/hooks/icfHooks/useDiagnosisModal';

import * as S from './styles';

interface FactorModalProps {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

const DiagnosisModal: FC<FactorModalProps> = ({ isOpen, setIsOpen }) => {
  const { contentName, searchValue, setSearchValue, filteredIcf, removeIcf } =
    useDiagnosisModal();

  return (
    <S.DiagnosisModal
      open={!!isOpen}
      onCancel={() => {
        setIsOpen(false);
        setSearchValue('');
      }}
      {...MODAL_DEFAULT_CONFIG}
    >
      <ModalContentWrapper
        onModalCancel={() => {
          setIsOpen(false);
          setSearchValue('');
        }}
        title={MODAL_CONTENT_TITLE[contentName as ModalContenTitle]}
      >
        <>
          <S.SearchContainer>
            <TextInput
              autoComplete='off'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Начните ввод названия или кода по МКФ'
            />
            <S.IconsWrapper>
              <S.SearchIcon />
              <S.Stick>|</S.Stick>
              <S.CloseIcon onClick={() => setSearchValue('')} />
            </S.IconsWrapper>
          </S.SearchContainer>
          <S.ModalList>
            {filteredIcf?.map((icf, index) => (
              <S.ModalItem key={icf.codeMkfCode} index={index}>
                <Icons.CancelRed onClick={() => removeIcf(icf)} />
                <S.ModalItemText>
                  {`${makeInterpretationIcf(icf)} ${icf.codeMkfValue}`}
                </S.ModalItemText>
              </S.ModalItem>
            ))}
          </S.ModalList>
        </>
      </ModalContentWrapper>
    </S.DiagnosisModal>
  );
};

export default DiagnosisModal;
