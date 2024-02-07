import { memo, RefObject } from 'react';
import * as S from './styles';
import { useAppSelector } from '@/store/store';
import { unregistereSurviesSelector } from '@/store/survies/selectors';

interface FooterProps {
  footerRef: RefObject<HTMLDivElement>;
}

const Footer = ({ footerRef }: FooterProps) => {
  const survies = useAppSelector(unregistereSurviesSelector);

  return <S.Footer ref={footerRef}>Пациенты: {survies}</S.Footer>;
};

export default memo(Footer);
