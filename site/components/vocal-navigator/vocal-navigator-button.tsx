import react, {MouseEventHandler} from 'react';
import {RecordVoiceOver} from '@emotion-icons/material/RecordVoiceOver';
import {IconButton} from '../../../src/icon-button';
import {toNewsKitIcon} from '../../../src/icons/to-newskit-icon';

export const IconFilledRecordVoiceOver = toNewsKitIcon(RecordVoiceOver);

const VocalNavigatorButton: React.FC<{
  onClick: MouseEventHandler<HTMLButtonElement>;
}> = ({onClick}) => {
  
  return (
    <>
      <IconButton
        onClick={onClick}
        aria-label="Vocal Navigator icon"
        size="medium"
      >
        <IconFilledRecordVoiceOver />
      </IconButton>
    </>
  );
};

export default VocalNavigatorButton;
