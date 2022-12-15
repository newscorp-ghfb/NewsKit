import React, {useEffect, useState} from 'react';
import {useSpeechSynthesis, useSpeechRecognition} from 'react-speech-kit';
import {Modal} from '../../../src/modal';
import {routes} from '../../routes';

// TODO MAKE IT AN inferface
const VocalNavigatorModal: React.FC<{isOpen: boolean; setIsOpen: Function}> = ({
  isOpen,
  setIsOpen,
}) => {
  const [transcript, setTranscript] = useState<string>();
  const [
    displayConfirmationButtons,
    setDisplayConfirmationButton,
  ] = useState<boolean>();
  const {speak} = useSpeechSynthesis();
  const test = 'Hello I am Newskit';
  useEffect(() => {
    if (isOpen) {
      speak({text: test});
      // cancel();
    }
    // speak({text: test});
  }, [isOpen]);

  const askUserConfirmation = () => {
    speak({text: `Did you say ${transcript}?`});
  };
  const {listen, listening, stop} = useSpeechRecognition({
    onResult: (result: string) => {
      setTranscript(result);
    },
    onEnd: () => {
      askUserConfirmation();
      setDisplayConfirmationButton(true);
    },
  });

  const startListening = () => {
    listen();
  };

  const handleStopListening = () => {
    stop();
  };

  const searchAndTakeUserToPage = () => {
    // @ts-ignore
    routes[3].subNav[1].subNav.forEach((nav: {title: string}) => {
      if (nav.title.toLowerCase() === transcript?.toLowerCase()) {
        window.location.href = `${nav.id}`;
      }
    });
  };

  return (
    <>
      <Modal
        open={isOpen}
        onDismiss={() => {
          setIsOpen(!isOpen);
        }}
        header="Vocal Search"
      >
        <p style={{color: 'white'}}> Microphone: {listening ? 'on' : 'off'} </p>

        <button
          type="button"
          onTouchStart={startListening}
          onMouseDown={startListening}
          onKeyDown={startListening}
          onTouchEnd={handleStopListening}
          onMouseUp={handleStopListening}
          onKeyUp={handleStopListening}
        >
          Hold to talk
        </button>
        <p style={{color: 'white'}}>You said: {transcript}</p>

        {displayConfirmationButtons && (
          <div>
            <button
              onClick={() => {
                searchAndTakeUserToPage();
              }}
            >
              yes
            </button>
            <button>no</button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default VocalNavigatorModal;
