import React, {useState} from 'react';
import {useSpeechSynthesis, useSpeechRecognition} from 'react-speech-kit';
import { Divider } from '../../../src/divider';
import {Modal} from '../../../src/modal';
import { TextBlock } from '../../../src/text-block';
import {routes} from '../../routes';

const VocalNavigatorModal: React.FC<{isOpen: boolean, setIsOpen: Function}> = ({isOpen, setIsOpen}) => {
  const [transcript, setTranscript] = useState<string>();
  const [displayConfirmationButtons, setDisplayConfirmationButton] = useState<boolean>();
  
  const {speak, voices, onEnd} = useSpeechSynthesis();
  const {listen, listening, stop} = useSpeechRecognition({
    onResult: (result: string) => {
      setTranscript(result);
    },
    onEnd: () => {
      askUserConfirmation()
      setDisplayConfirmationButton(true)
    }
  });
  
  const startListening = () => {
    listen()
  };

  const handleStopListening = () => {
    stop()
  }

  const askUserConfirmation = () => {
    speak({text: `Did you say ${transcript}?`,  voice: voices[1]})
  }

  const handleNoButton = () => { 
    speak({text: `I am sorry, please try again`,  voice: voices[1]})
    setTranscript('')
  }

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
      <Modal open={isOpen} onDismiss={() => {setIsOpen(!isOpen)}} header="Vocal Search">
        
        <Divider/>
        <TextBlock stylePreset='inkContrast'>How to guide</TextBlock>
        <TextBlock stylePreset='inkContrast'>Hold the button and tell me the name of the component you want to read about, or one of our guides:</TextBlock>
        <TextBlock stylePreset='inkContrast'>Eg: "Button" or.. "Style Presets"</TextBlock>
        <Divider/>

        <p style={{color: 'white'}}>
          {' '}
          Microphone: {listening ? 'on' : 'off'}{' '}
        </p>

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

        {displayConfirmationButtons &&
          <div>
            <button onClick={() => {searchAndTakeUserToPage()}}>yes</button>
            <button onClick={() => {handleNoButton()}}>no</button>
          </div>
        }
      </Modal>
    </>
  );
};

export default VocalNavigatorModal;
