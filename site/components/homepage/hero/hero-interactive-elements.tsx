import {DarkMode, KeyboardArrowDown, AddCircle} from '@emotion-icons/material';
import {LightMode} from '@emotion-icons/material-outlined';
import {
  Block,
  Button,
  Checkbox,
  Label,
  StatefulSlider,
  Switch,
  TextField,
  Tooltip,
  toNewsKitIcon,
  TextBlock,
  IconButton,
} from 'newskit*';
import React, {useState} from 'react';
import {HeroInteractiveContainer, InteractiveElementContainer} from './styled';
import {HeroInteractiveElementsProps} from './types';
import {Illustration} from '../../illustrations/illustration-loader';
import {
  SelectionList,
  SelectionListOption,
} from '../../../../src/selection-list';

export const IconFilledDarkMode = toNewsKitIcon(DarkMode);
export const IconFilledLightMode = toNewsKitIcon(LightMode);
export const IconFilledKeyboardArrowDown = toNewsKitIcon(KeyboardArrowDown);
export const IconFilledAddCircle = toNewsKitIcon(AddCircle);

const HeroInteractiveElements = ({
  themeMode,
  toggleTheme,
}: HeroInteractiveElementsProps) => {
  const [selectionListValue, setSelectionListValue] = useState(1);

  return (
    <HeroInteractiveContainer>
      <InteractiveElementContainer top={65} left={34}>
        <Button
          overrides={{
            width: '176px',
            stylePreset: 'heroInteractiveSelectButton',
          }}
          tabIndex={-1}
        >
          <TextBlock
            typographyPreset="utilityBody020"
            paddingInlineEnd="space050"
          >
            Select option
          </TextBlock>
          <IconFilledKeyboardArrowDown />
        </Button>
        <Block stylePreset="heroInteractiveSelectPanel">
          <SelectionList overrides={{paddingBlock: 'space020'}}>
            {['News', 'Radio', 'TV'].map(item => (
              <SelectionListOption
                key={item}
                overrides={{
                  minHeight: 'sizing060',
                  paddingBlock: 'space040',
                  paddingInline: 'space040',
                  marginBlock: 'space000',
                }}
                value="teal"
              >
                {item}
              </SelectionListOption>
            ))}
          </SelectionList>
        </Block>
      </InteractiveElementContainer>
      <InteractiveElementContainer top={55} left={250}>
        <Checkbox
          overrides={{marginBlock: 'space030'}}
          label="Design"
          size="medium"
          defaultChecked
          tabIndex={-1}
        />
        <Checkbox
          overrides={{marginBlock: 'space030'}}
          label="Code"
          size="medium"
          defaultChecked
          tabIndex={-1}
        />
        <Checkbox label="Guidance" size="medium" defaultChecked tabIndex={-1} />
      </InteractiveElementContainer>
      <InteractiveElementContainer top={20} left={390} width={110}>
        <Block stylePreset="heroInteractiveSelectionList">
          <SelectionList overrides={{paddingBlock: 'space020'}}>
            {[0.5, 0.8, 1, 1.2, 1.5, 2].map(speed => (
              <SelectionListOption
                key={speed}
                overrides={{
                  minHeight: 'sizing060',
                  paddingBlock: 'space000',
                  paddingInline: 'space030',
                  marginBlock: 'space000',
                }}
                selected={speed === selectionListValue}
                onClick={() => {
                  setSelectionListValue(speed);
                }}
                tabIndex={-1}
              >
                {speed}x
              </SelectionListOption>
            ))}
          </SelectionList>
        </Block>
      </InteractiveElementContainer>
      <InteractiveElementContainer top={240} left={440}>
        <Switch
          checked={themeMode === 'light'}
          onChange={toggleTheme}
          size="medium"
          overrides={{
            onIcon: IconFilledLightMode,
            offIcon: IconFilledDarkMode,
          }}
          // Using invisible character here is a bit hacky but
          // that's an exception where we don't want to show
          // any label even though it's required.
          label="ㅤ"
          tabIndex={-1}
        />
      </InteractiveElementContainer>
      <InteractiveElementContainer top={345} left={120} width={120}>
        <StatefulSlider
          overrides={{
            feedback: {size: 'sizing060'},
            thumb: {size: 'sizing040'},
            track: {
              size: 'sizing020',
              stylePreset: 'heroInteractiveSliderTrack',
            },
          }}
          values={[25]}
          max={50}
          min={0}
          tabIndex={-1}
        />
      </InteractiveElementContainer>
      <InteractiveElementContainer top={430} left={130}>
        <Button
          size="small"
          overrides={{
            paddingInline: 'space070',
            paddingBlock: 'space040',
          }}
          tabIndex={-1}
        >
          Button
        </Button>
      </InteractiveElementContainer>
      <InteractiveElementContainer top={426} left={50} zIndex={0}>
        <Tooltip
          overrides={{
            pointer: {size: 'sizing020', edgeOffset: 'sizing020'},
            distance: 'space030',
            transitionPreset: 'fade',
          }}
          open
          content="Tooltip"
          asLabel
          placement="top"
          trigger={['focus', 'hover']}
        >
          <div>
            <IconButton size="medium" tabIndex={-1}>
              <IconFilledAddCircle />
            </IconButton>
          </div>
        </Tooltip>
      </InteractiveElementContainer>
      <InteractiveElementContainer top={290} left={270} width={230}>
        <Block
          stylePreset="heroInteractiveForm"
          paddingBlock="space045"
          paddingInline="space040"
        >
          <Label htmlFor="name" size="small">
            Name
          </Label>
          <TextField
            overrides={{
              stylePreset: 'heroInteractiveFormInput',
              marginBlockEnd: 'space040',
            }}
            id="name"
            size="small"
            defaultValue="NewsKit"
            tabIndex={-1}
          />
          <Label htmlFor="email" size="small">
            Email address
          </Label>
          <TextField
            overrides={{
              stylePreset: 'heroInteractiveFormInput',
            }}
            id="email"
            size="small"
            defaultValue="newskit@news.co.uk"
            tabIndex={-1}
          />
        </Block>
      </InteractiveElementContainer>
      {/* This element should be the last as it is absolute positioned over the rest of the elements */}
      <InteractiveElementContainer top={210} left={175}>
        <Illustration
          width="60%"
          viewBox="0 0 179 118"
          path="landing-page/hero-grid-logo"
        />
      </InteractiveElementContainer>
    </HeroInteractiveContainer>
  );
};

export default HeroInteractiveElements;
