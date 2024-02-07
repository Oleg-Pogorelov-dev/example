import { FC } from 'react';
import { Collapse } from 'antd';

import { useAppDispatch } from '@/store/store';
import { getIcfCodes } from '@/store/icf/thunks';
import { IcfCode, IcfCodesChilds } from '@/utils/types/icf';
import Icons from '@/utils/icons';

import * as S from './styles';

interface ICFListItems {
  codes: IcfCode[];
  codesChildren: IcfCodesChilds;
  currentFactor: number;
  close: (isOpen: boolean) => void;
  postIcfCode: (currentFactor: number, item: IcfCode) => void;
}

const ICFListItems: FC<ICFListItems> = ({
  codes,
  codesChildren,
  currentFactor,
  close,
  postIcfCode,
}) => {
  const dispatch = useAppDispatch();

  return (
    <S.CollapseWrapper>
      <Collapse
        collapsible='icon'
        onChange={(keys) => {
          if (codes[+keys[keys.length - 1]]?.haveChild) {
            dispatch(getIcfCodes(codes[+keys[keys.length - 1]]?.id));
          }
        }}
        expandIcon={({ isActive }) => (
          <S.ArrowWrapper isActive={isActive}>
            <Icons.ChevronRight />
          </S.ArrowWrapper>
        )}
      >
        {codes.map((code, index: number) => {
          if (!code.haveChild) {
            return (
              <S.ModalItemCode
                key={code.code}
                onClick={() => {
                  postIcfCode(currentFactor, code);
                  close(false);
                }}
              >
                <S.ModalItemValue>{code?.value}</S.ModalItemValue>
              </S.ModalItemCode>
            );
          }
          return (
            <S.CollapsePanelWrapper
              header={
                <S.ModalItemValue
                  selectable={code.selectable}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (code.selectable) {
                      postIcfCode(currentFactor, code);
                      close(false);
                    }
                  }}
                >
                  {code?.value}
                </S.ModalItemValue>
              }
              key={index}
            >
              {!!codesChildren[code.id] && (
                <ICFListItems
                  currentFactor={currentFactor}
                  close={close}
                  codes={codesChildren[code.id]}
                  codesChildren={codesChildren}
                  postIcfCode={postIcfCode}
                />
              )}
            </S.CollapsePanelWrapper>
          );
        })}
      </Collapse>
    </S.CollapseWrapper>
  );
};

export default ICFListItems;
