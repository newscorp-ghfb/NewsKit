import React, {useEffect, useState} from 'react';
import {Stack} from '../stack';
import {TextBlock} from '../text-block';
import {getSSRId, MQ} from '../utils';
import {toKebabCase} from '../utils/to-kabab-case';
import {scenarios} from './scenarios';
import {StyledStack} from './styled';

const noStylePresetVariations = [
  'Audio Player',
  'Block',
  'Byline',
  'Card',
  'Caption',
  'Checkbox',
  'Date Time',
  'Divider',
  'Drawer',
  'Email Input',
  'Fieldset',
  'FormInput',
  'Headline',
  'Link',
  'Menu',
  'OrderedList',
  'Scroll',
  'Select',
  'Share Bar',
  'Slider',
  'Tabs',
  'Tag',
  'Text Block',
  'Text Field',
  'Title Bar',
  'UnorderedList',
  'Volume Control',
];

const StylePresetsLoader = ({
  name,
  children,
}: {
  name: string;
  children: ({stylePreset}?: {stylePreset: MQ<string>}) => React.ReactNode;
}) => {
  const [stylePresets, setStylePresets] = useState([] as string[]);

  useEffect(() => {
    const dynamicallyImport = async () => {
      const kebabComponentName = toKebabCase(name);
      try {
        const stylePreset = (
          await import(`../${kebabComponentName}/style-presets`)
        ).default;

        setStylePresets(Object.keys(stylePreset));
      } catch (error) {
        // To catch components with style variation but do not have style-preset file
      }
    };
    dynamicallyImport();
  }, [name]);
  return (
    <Stack
      spaceInline="space030"
      spaceStack="space050"
      flow="horizontal-top"
      wrap
      key={getSSRId()}
    >
      {stylePresets.map(stylePreset => children({stylePreset}))}
    </Stack>
  );
};

const ThemeCheckerScenario = ({
  children,
  name,
}: {
  children: () =>
    | React.ReactNode
    | (({stylePreset}?: {stylePreset: MQ<string>}) => React.ReactNode);
  name: string;
}) => (
  <>
    <StyledStack spaceInline="space030">
      <TextBlock typographyPreset="utilityBody030">{name}</TextBlock>
      {noStylePresetVariations.includes(name) ? (
        children()
      ) : (
        <StylePresetsLoader name={name}>{children}</StylePresetsLoader>
      )}
    </StyledStack>
  </>
);

export const ThemeChecker = () => (
  <>
    {scenarios.map(({name, component}) => (
      <ThemeCheckerScenario key={getSSRId()} name={name}>
        {/* @ts-ignore */}
        {component}
      </ThemeCheckerScenario>
    ))}
  </>
);
