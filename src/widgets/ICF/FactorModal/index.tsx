import { FC } from 'react';

import {
  MODAL_CONTENT_TITLE,
  MODAL_DEFAULT_CONFIG,
} from '@/utils/Static/modal';
import { ModalContenTitle } from '@/utils/types/common';
import ModalContentWrapper from '@/components/ModalContentWrapper';
import TextInput from '@/components/Inputs/TextInput';
import ICFListItems from '../ICFListItems';
import useFactorModal from '@/utils/hooks/icfHooks/useFactorModal';

import * as S from './styles';

interface FactorModalProps {
  num?: number;
  currentFactor: number;
}

const FactorModal: FC<FactorModalProps> = ({ currentFactor, num }) => {
  const {
    icfCodes,
    icfCodesChildren,
    searchValue,
    handleOnSearchChange,
    contentName,
    searchedValues,
    clearSearchInput,
    postIcfCode,
    qualifiers,
    filteredQualifiers,
    postQualifier,
    resetIcf,
    cancel,
  } = useFactorModal();

  return (
    <S.FactorModal
      open={!!icfCodes.length || !!qualifiers.length}
      onCancel={cancel}
      {...MODAL_DEFAULT_CONFIG}
    >
      <ModalContentWrapper
        onModalCancel={cancel}
        title={MODAL_CONTENT_TITLE[contentName as ModalContenTitle]}
      >
        <>
          <S.SearchContainer>
            <TextInput
              autoComplete='off'
              value={searchValue}
              onChange={(e) => handleOnSearchChange(e.target.value)}
              placeholder='Начните ввод названия или кода по МКФ'
            />
            <S.IconsWrapper>
              <S.SearchIcon />
              <S.Stick>|</S.Stick>
              <S.CloseIcon onClick={clearSearchInput} />
            </S.IconsWrapper>
          </S.SearchContainer>
          {!!searchedValues.length && !qualifiers.length ? (
            <S.ListContainer>
              {searchedValues.map((item, index) => (
                <S.Qualifier
                  key={index}
                  isBlue={!!(index % 2)}
                  onClick={() => {
                    postIcfCode(currentFactor, item);
                    resetIcf();
                    handleOnSearchChange('');
                  }}
                >
                  <S.ModalItemValue>{item?.value}</S.ModalItemValue>
                </S.Qualifier>
              ))}
            </S.ListContainer>
          ) : (
            <S.ListContainer>
              {filteredQualifiers.map((item, index) => (
                <S.Qualifier
                  key={index}
                  isBlue={!!(index % 2)}
                  onClick={() => {
                    postQualifier(currentFactor, num, item);
                    resetIcf();
                    handleOnSearchChange('');
                  }}
                >
                  <S.ModalItemValue>
                    {item?.code} - {item?.value.split(' ').slice(1).join(' ')}
                  </S.ModalItemValue>
                </S.Qualifier>
              ))}
              <ICFListItems
                currentFactor={currentFactor}
                codes={icfCodes}
                codesChildren={icfCodesChildren}
                close={resetIcf}
                postIcfCode={postIcfCode}
              />
            </S.ListContainer>
          )}
        </>
      </ModalContentWrapper>
    </S.FactorModal>
  );
};

export default FactorModal;
