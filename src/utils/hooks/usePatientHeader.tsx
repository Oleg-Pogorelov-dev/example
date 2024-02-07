import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const usePatientHeader = (onRefreshClick: () => void) => {
  const navigate = useNavigate();

  const [isAnimation, setIsAnimation] = useState(false);

  const onRefreshButtonClick = () => {
    if (!isAnimation) {
      onRefreshClick();
    }
    setIsAnimation(true);
  };

  const onLogoClick = () => {
    navigate('/');
  };

  return {
    onLogoClick,
    isAnimation,
    setIsAnimation,
    onRefreshButtonClick,
  };
};

export default usePatientHeader;
