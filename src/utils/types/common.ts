import { MODAL_CONTENT_TITLE } from '../Static/modal';

export type Error = {
  message: string;
};

export type ModalContenTitle = keyof typeof MODAL_CONTENT_TITLE;
