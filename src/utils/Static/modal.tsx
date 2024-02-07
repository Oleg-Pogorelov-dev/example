import ProfilesLoginModal from '@/components/ModalContents/ProfilesLoginModal';
import ProfilesModal from '@/components/ModalContents/ProfilesModal';

export const MODAL_CONTENT = {
  ProfilesLoginModal: <ProfilesLoginModal />,
  ProfilesModal: <ProfilesModal />,
};

export const MODAL_CONTENT_TITLE = {
  RegisterProbsForm: 'Регистрация пробы',
  ProfilesModal: 'Выбор профиля',
  ConfirmModal: 'Завершить обследование?',
};

export const MODAL_DEFAULT_CONFIG = {
  className: 'basic-modal',
  closable: false,
  centered: true,
  width: 'fit-content',
  footer: null,
  destroyOnClose: true,
  maskStyle: { backdropFilter: 'blur(1px)' },
};
