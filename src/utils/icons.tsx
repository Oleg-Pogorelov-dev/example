import React, { SVGProps } from 'react';
import { ReactComponent as Arrow } from '@/assets/arrow.svg';
import { ReactComponent as Basket } from '@/assets/basket.svg';
import { ReactComponent as Barcode } from '@/assets/barcode.svg';
import { ReactComponent as Close } from '@/assets/close.svg';
import { ReactComponent as Human } from '@/assets/human.svg';
import { ReactComponent as Repeat } from '@/assets/repeat.svg';
import { ReactComponent as Spinner } from '@/assets/spinner.svg';
import { ReactComponent as LogoFull } from '@/assets/logo-full.svg';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Account } from '@/assets/acount.svg';
import { ReactComponent as Search } from '@/assets/search.svg';
import { ReactComponent as Profile } from '@/assets/profile.svg';
import { ReactComponent as Camera } from '@/assets/camera.svg';
import { ReactComponent as EyeOpen } from '@/assets/Eye-open.svg';
import { ReactComponent as EyeClose } from '@/assets/Eye-close.svg';
import { ReactComponent as ChevronLeft } from '@/assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '@/assets/chevron-right.svg';
import { ReactComponent as Filter } from '@/assets/filter.svg';
import { ReactComponent as Ok } from '@/assets/ok.svg';
import { ReactComponent as RollUp } from '@/assets/roll_up.svg';
import { ReactComponent as CancelRed } from '@/assets/cancel_red.svg';
import { ReactComponent as FillForm } from '@/assets/fill_form.svg';
import { ReactComponent as AddButton } from '@/assets/add_button.svg';
import { ReactComponent as Clear } from '@/assets/clear.svg';

export type CustomSvgProp = SVGProps<SVGElement> & {
  size?: number | string;
};

const useIcon = (
  props: CustomSvgProp,
  Icon: React.ComponentType<SVGProps<SVGElement>>
) => {
  return (
    <Icon
      width={props.size || props.width || 16}
      height={props.size || props.height || 16}
      {...props}
    />
  );
};

const Icons = {
  Camera: (props: CustomSvgProp) => useIcon(props, Camera),
  Ok: (props: CustomSvgProp) => useIcon(props, Ok),
  Basket: (props: CustomSvgProp) => useIcon(props, Basket),
  EyeClose: (props: CustomSvgProp) => useIcon(props, EyeClose),
  EyeOpen: (props: CustomSvgProp) => useIcon(props, EyeOpen),
  Arrow: (props: CustomSvgProp) => useIcon(props, Arrow),
  Barcode: (props: CustomSvgProp) => useIcon(props, Barcode),
  Close: (props: CustomSvgProp) => useIcon(props, Close),
  Human: (props: CustomSvgProp) => useIcon(props, Human),
  Repeat: (props: CustomSvgProp) => useIcon(props, Repeat),
  Spinner: (props: CustomSvgProp) => useIcon(props, Spinner),
  LogoFull: (props: CustomSvgProp) => useIcon(props, LogoFull),
  Logo: (props: CustomSvgProp) => useIcon(props, Logo),
  Account: (props: CustomSvgProp) => useIcon(props, Account),
  Search: (props: CustomSvgProp) => useIcon(props, Search),
  Profile: (props: CustomSvgProp) => useIcon(props, Profile),
  ChevronRight: (props: CustomSvgProp) => useIcon(props, ChevronRight),
  Filter: (props: CustomSvgProp) => useIcon(props, Filter),
  ChevronLeft: (props: CustomSvgProp) => useIcon(props, ChevronLeft),
  RollUp: (props: CustomSvgProp) => useIcon(props, RollUp),
  CancelRed: (props: CustomSvgProp) => useIcon(props, CancelRed),
  FillForm: (props: CustomSvgProp) => useIcon(props, FillForm),
  AddButton: (props: CustomSvgProp) => useIcon(props, AddButton),
  Clear: (props: CustomSvgProp) => useIcon(props, Clear),
};

export default Icons;
