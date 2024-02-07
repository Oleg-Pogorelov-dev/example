import { MODAL_CONTENT } from '../Static/modal';

export type ModalContentName = keyof typeof MODAL_CONTENT;

export type ModalContent = {
  [name in ModalContentName]: JSX.Element;
};
