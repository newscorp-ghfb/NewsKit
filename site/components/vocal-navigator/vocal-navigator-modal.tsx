import React, {useEffect, useState} from 'react';
import {useSpeechSynthesis, useSpeechRecognition} from 'react-speech-kit';
import {Block} from '../../../src/block';
import {Button} from '../../../src/button';
import { Divider } from '../../../src/divider';
import {Modal} from '../../../src/modal';
import {TextBlock} from '../../../src/text-block';
import {routes} from '../../routes';

const VocalNavigatorModal: React.FC<{isOpen: boolean; setIsOpen: Function}> = ({
  isOpen,
  setIsOpen,
}) => {

  const [transcript, setTranscript] = useState<string>();
  const [displayConfirmationButtons, setDisplayConfirmationButton,] = useState<boolean>();
  const {speak, voices, onEnd} = useSpeechSynthesis();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        speak({text: 'Welcome, what can I find for you?', voice: voices[1]});
      }, 500)
    }
  }, [isOpen]);

  const askUserConfirmation = () => {
    speak({text: `Did you say ${transcript}?`, voice: voices[1]});
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

  const handleNoButton = () => {
    speak({text: `I am sorry, please try again`, voice: voices[1]});
    setTranscript('');
    setDisplayConfirmationButton(false)
  };

  const handleYesButton = () => {
    searchAndTakeUserToPage()
  }

  const searchAndTakeUserToPage = () => {
    // @ts-ignore SEARCHING COMPONENTS DOCS
    routes[3].subNav[1].subNav.forEach((nav: {title: string}) => {
      if (nav.title.toLowerCase() === transcript?.toLowerCase()) {
        window.location.href = `${nav.id}`;
      }
    });

    // @ts-ignore Foundations
    routes[2].subNav[1].subNav.forEach((nav: {title: string}) => {
      if (nav.title.toLowerCase() === transcript?.toLowerCase()) {
        window.location.href = `${nav.id}`;
      }
    });

     // @ts-ignore Presets Presets
    routes[2].subNav[2].subNav.forEach((nav: {title: string}) => {
      if (nav.title.toLowerCase() === transcript?.toLowerCase()) {
        window.location.href = `${nav.id}`;
      }
    });
  }

  return (
    <>
      <Modal
        open={isOpen}
        onDismiss={() => {
          speak({text: 'Thank you, goodbye', voice: voices[1]});
          setIsOpen(!isOpen);
        }}
        header="Vocal Search"
      > 
        
        <img src='https://cdn-icons-png.flaticon.com/512/2814/2814666.png' width='200px' height='200px'></img>

        <Divider/>
        <TextBlock typographyPreset="utilityButton010" stylePreset='inkContrast'  paddingBlockStart="space020"  paddingBlockEnd="space020">
          How to guide
          <br/>
          Hold the button and tell me the name of a component, foundations or presets you want to read about:
          Eg: "Button" or "Style Presets" or "Borders"
        </TextBlock>
        <Divider />

        <TextBlock
          stylePreset="inkContrast"
          paddingBlockEnd="space030"
          paddingBlockStart="space030"
          typographyPreset="utilityButton010"
        >
          {' '} Microphone: {listening ? 'on' : 'off'}{' '}
        </TextBlock>

        <Button
          overrides={{
            paddingBlockEnd: 'space020',
          }}
          size="small"
          onTouchStart={startListening}
          onMouseDown={startListening}
          onKeyDown={startListening}
          onTouchEnd={handleStopListening}
          onMouseUp={handleStopListening}
          onKeyUp={handleStopListening}
        >
          Hold to talk
        </Button>
        <TextBlock
          paddingBlock="space030"
          stylePreset="inkContrast"
          typographyPreset="utilityButton010"
        >
          You said: {transcript}
        </TextBlock>

        {displayConfirmationButtons && (
          <div style={{display: 'inline-flex'}}>
            <Button
              overrides={{
                paddingBlock: 'space020',
              }}
              size="small"
              onClick={handleYesButton}>
              yes
            </Button>
            <Block paddingInlineStart="space010" />
            <Button
              overrides={{
                paddingBlockEnd: 'space010',
              }}
              size="small"
              onClick={handleNoButton}> no</Button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default VocalNavigatorModal;
