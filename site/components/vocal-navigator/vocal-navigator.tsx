import React, {useState} from 'react';
import VocalNavigatorButton from './vocal-navigator-button';
import VocalNavigatorModal from './vocal-navigator-modal';

const VocalNavigator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVocalNavigatorButtonClick = () => {
    setIsOpen(prevState => !prevState);
  };
  
  return (
    <>
      <VocalNavigatorButton onClick={handleVocalNavigatorButtonClick} />
      <VocalNavigatorModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default VocalNavigator;
