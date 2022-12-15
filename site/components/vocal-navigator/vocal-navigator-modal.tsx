import React, {useState} from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import {useSpeechSynthesis} from 'react-speech-kit';
import {Modal} from '../../../src/modal';
import {routes} from '../../routes';

// TODO MAKE IT AN inferface
const VocalNavigatorModal: React.FC<{isOpen: boolean}> = ({isOpen}) => {
  const {transcript, listening, resetTranscript} = useSpeechRecognition();

  const [value, setValue] = useState('Welcome to Newskit how may I help?');
  const {speak, cancel} = useSpeechSynthesis();

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({continuous: true, language: 'en-GB'});
  };
  const searchAndTakeUserToPage = () => {
    // @ts-ignore
    routes[3].subNav[1].subNav.forEach((nav: {title: string}) => {
      console.log(nav.title.toLowerCase());
      if (nav.title.toLowerCase() === transcript) {
        window.location.href = `${nav.id}`;
      }
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    searchAndTakeUserToPage();
  };
  return (
    <>
      {/* TODO onDismisss */}
      <Modal
        open
        onDismiss={() => {
          console.log('TODO');
        }}
        header="Vocal Search"
        onChange={event =>
          setValue((event.target as HTMLTextAreaElement).value)
        }
      >
        {/* TODO fix styling and remove p tag */}
        {/* <TextBlock>Microphone: {listening ? 'on' : 'off'}</TextBlock> */}

        {/* here */}
        <p
          style={{color: 'white'}}
          onMouseEnter={() => speak({text: value})}
          onMouseLeave={() => cancel}
        >
          {' '}
          Microphone: {listening ? 'on' : 'off'}{' '}
        </p>

        <button
          type="button"
          onTouchStart={startListening}
          onMouseDown={startListening}
          onKeyDown={startListening}
          onTouchEnd={stopListening}
          onMouseUp={stopListening}
          onKeyUp={stopListening}
        >
          Hold to talk
        </button>
        <p style={{color: 'white'}}>You said: {transcript}</p>
      </Modal>
    </>
  );
};

export default VocalNavigatorModal;
