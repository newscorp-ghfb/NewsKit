import React, {useState} from 'react';
import VocalNavigatorButton from './vocal-navigator-button';
import VocalNavigatorModal from './vocal-navigator-modal';

const VocalNavigator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVocalNavigatorButtorClick = () => {
    console.log('hi');
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      {/* TODO fix onClick, not working, onClick is undefined down there */}
      <VocalNavigatorButton onClick={handleVocalNavigatorButtorClick} />
      <VocalNavigatorModal isOpen />
    </>
  );
};

export default VocalNavigator;
