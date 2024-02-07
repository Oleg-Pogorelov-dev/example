import { notification } from 'antd';
import Icons from './icons';
import { colors } from './theme';

interface Message {
  title: string;
  description?: string;
  type?: 'error' | 'info';
  boundTop?: boolean;
}

export const message = ({
  boundTop,
  title,
  type = 'info',
  ...props
}: Message) => {
  const key = Date.now().toString();

  return notification[type]({
    message: title,
    className: 'custom-notification',
    duration: 3,
    closeIcon: <Icons.Close />,
    placement: 'topRight',
    key,
    style: { top: boundTop ? '0' : '120px' },
    onClick: () => {
      notification.close(key);
    },
    icon: (
      <Icons.Logo
        width={22}
        height={25}
        fill={type === 'info' ? colors.blue800 : colors.red400}
      />
    ),
    ...props,
  });
};
