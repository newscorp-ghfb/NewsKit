import React, {useEffect, useState} from 'react';
// @ts-ignore
import {useSpeechSynthesis, useSpeechRecognition} from 'react-speech-kit';
import {Block} from '../../../src/block';
import {Button} from '../../../src/button';
import {Divider} from '../../../src/divider';
import {Image} from '../../../src/image';
import {Modal} from '../../../src/modal';
import {Accordion} from '../../../src/accordion';
import {TextBlock} from '../../../src/text-block';
import {routes} from '../../routes';

const howToGuideContent = (
  <TextBlock
    typographyPreset="editorialParagraph010"
    stylePreset="inkContrast"
    paddingBlockEnd="space010"
  >
    <br />
    Hold the button and tell me the name of a component, foundations or presets
    you want to read about:
    <br /> Eg: &quot;Button&quot; or &quot;Style Presets&quot; or
    &quot;Borders&quot;
  </TextBlock>
);

const VocalNavigatorModal: React.FC<{isOpen: boolean; setIsOpen: Function}> = ({
  isOpen,
  setIsOpen,
}) => {
  const [transcript, setTranscript] = useState<string>();
  const [
    displayConfirmationButtons,
    setDisplayConfirmationButton,
  ] = useState<boolean>();

  const [expanded, toggleExpanded] = React.useState(false);

  const {speak, voices} = useSpeechSynthesis();

  const speakEnhanced = (text: string) => {
    speak({text, voice: voices[39], pitch: 1.6, rate: 1});
  };

  const askUserConfirmation = () => {
    if (transcript === undefined || transcript === '') {
      speakEnhanced('I did not catch what you said');
    } else {
      speakEnhanced(`Did you say ${transcript}?`);
    }
  };

  const {listen, listening, stop} = useSpeechRecognition({
    onResult: (result: string) => {
      setTranscript(result);
    },
    onEnd: () => {
      askUserConfirmation();
      console.log(transcript);
      if (transcript !== undefined && transcript !== '')
        setDisplayConfirmationButton(true);
    },
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        speakEnhanced('Welcome');
      }, 500);
    }
  }, [isOpen]);

  const startListening = () => {
    listen();
  };

  const handleStopListening = () => {
    stop();
  };

  // eslint-disable-next-line consistent-return
  const searchPage = () => {
    let resultComponent;
    // @ts-ignore Components
    routes[3].subNav.forEach((componentSubNav: {subNav: []}) => {
      if (componentSubNav.subNav) {
        componentSubNav.subNav.forEach((nav: {title: string; id: string}) => {
          if (nav.title.toLowerCase() === transcript?.toLowerCase()) {
            resultComponent = nav.id;
          }
        });
      }
    });

    if (resultComponent) return resultComponent;

    let resultFoundation;
    // @ts-ignore Foundations
    routes[2].subNav[1].subNav.forEach((nav: {title: string; id: string}) => {
      if (nav.title.toLowerCase() === transcript?.toLowerCase()) {
        resultFoundation = nav.id;
      }
    });
    if (resultFoundation) return resultFoundation;

    let resultPreset;
    // @ts-ignore Presets Presets
    routes[2].subNav[2].subNav.forEach((nav: {title: string; id: string}) => {
      if (nav.title.toLowerCase() === transcript?.toLowerCase()) {
        resultPreset = nav.id;
      }
    });
    if (resultPreset) return resultPreset;
  };

  const handleNoButton = () => {
    speakEnhanced(`Please try again`);
    setTranscript('');
    setDisplayConfirmationButton(false);
  };

  const handleYesButton = () => {
    const result = searchPage();
    if (result === undefined) {
      speakEnhanced(`I did not find anything about ${transcript}, try again`);
      setDisplayConfirmationButton(false);
    } else {
      speakEnhanced(`Thank you, I am taking you there`);
      window.location.href = result;
    }
  };

  return (
    <>
      <Modal
        open={isOpen}
        onDismiss={() => {
          speakEnhanced('Thank you, goodbye');
          setDisplayConfirmationButton(false);
          setTranscript('');
          setIsOpen(!isOpen);
        }}
        header="Vocal Search"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2814/2814666.png"
          overrides={{width: '200px', height: '200px'}}
        />

        <Accordion
          header="How to guide"
          expanded={expanded}
          onClick={() => toggleExpanded(!expanded)}
          overrides={{
            header: {
              typographyPreset: 'utilityButton010',
            },
          }}
        >
          {howToGuideContent}
        </Accordion>
        <Divider />

        <TextBlock
          stylePreset="inkContrast"
          paddingBlockEnd="space030"
          paddingBlockStart="space030"
          typographyPreset="utilityButton010"
        >
          {' '}
          Microphone: {listening ? 'on' : 'off'}{' '}
        </TextBlock>

        <Button
          overrides={{
            paddingBlockEnd: 'space020',
          }}
          size="small"
          onTouchStart={startListening}
          onMouseDown={startListening}
          // @ts-ignore
          onKeyDown={e => {
            if (e.key !== 'Tab') startListening();
          }}
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
              onClick={handleYesButton}
            >
              yes
            </Button>
            <Block paddingInlineStart="space010" />
            <Button
              overrides={{
                paddingBlockEnd: 'space010',
              }}
              size="small"
              onClick={handleNoButton}
            >
              no
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default VocalNavigatorModal;
