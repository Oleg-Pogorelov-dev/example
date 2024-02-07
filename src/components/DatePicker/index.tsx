import { FC } from 'react';
import { Moment } from 'moment';
import Icons from '@/utils/icons';
import * as S from './styles';

interface Props {
  onPrevClick?: () => void;
  onNextClick?: () => void;
  suffixIcon?: JSX.Element;
  placeholder?: string;
  allowClear?: boolean;
  showTime?: boolean;
  className?: string;
  onChange?: (date: Moment | null) => void;
  disabled?: boolean;
  value?: Moment | null;
  disabledDate?: (currentDate: Moment) => boolean;
  readOnly?: boolean;
}

const DatePicker: FC<Props> = ({
  onNextClick,
  onPrevClick,
  suffixIcon,
  placeholder,
  allowClear,
  showTime,
  className,
  onChange,
  disabled,
  value,
  disabledDate,
  readOnly,
}) => {
  return (
    <S.Container>
      {onPrevClick && (
        <S.RoundButton
          icon={<Icons.ChevronLeft size={20} />}
          variant="whitebordered"
          onClick={onPrevClick}
        />
      )}
      <S.Picker
        className={className}
        placeholder={placeholder || 'Выберите дату'}
        clearIcon={<S.Clear size={12} />}
        suffixIcon={suffixIcon}
        allowClear={allowClear}
        showTime={showTime && { format: 'HH:mm' }}
        format={showTime ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY'}
        onChange={onChange}
        disabled={disabled}
        value={value}
        disabledDate={disabledDate}
        inputReadOnly={readOnly}
      />
      {onNextClick && (
        <S.RoundButton
          icon={<Icons.ChevronRight size={20} />}
          variant="whitebordered"
          onClick={onNextClick}
        />
      )}
    </S.Container>
  );
};

export default DatePicker;
