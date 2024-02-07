import { useEffect, useRef, useState } from 'react';

import Icons, { CustomSvgProp } from '@/utils/icons';

import * as S from './styles';

interface SpinProps extends CustomSvgProp {
  delay?: number;
  children?: JSX.Element | JSX.Element[];
  spinning: boolean;
  className?: string;
  size?: number;
  iconSize?: number;
  replace?: boolean;
}

const Spin = ({
  delay = 350,
  spinning,
  children,
  className,
  size,
  iconSize = 20,
  replace = false,
  ...props
}: SpinProps) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (spinning) {
      timeout.current = setTimeout(() => {
        setMounted(true);
      }, delay);
    } else {
      clearTimeout(timeout.current);
      setMounted(false);
    }
  }, [spinning]);

  return (
    <S.Wrapper cover={!!children} size={size} className={className}>
      {isMounted && (
        <>
          <S.Overlay replace={replace} />
          <Icons.Spinner className='spinner' size={iconSize} {...props} />
        </>
      )}
      {children && children}
    </S.Wrapper>
  );
};

export default Spin;
