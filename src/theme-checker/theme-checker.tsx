import React, {useEffect, useState} from 'react';
import {Stack} from '../stack';
import {TextBlock} from '../text-block';
import {getSSRId, MQ} from '../utils';
import {toKebabCase} from '../utils/to-kabab-case';
import {scenarios} from './scenarios';
import {StyledStack} from './styled';

const stylePresetVariations = [
  'Banner',
  'Button',
  'Flag',
  'Icon Button',
  'Inline Message',
  'Toast',
];
const StylePresetsLoader = ({
  name,
  children,
}: {
  name: string;
  children: ({stylePreset}: {stylePreset?: MQ<string>}) => JSX.Element;
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
  children: ({stylePreset}: {stylePreset?: MQ<string>}) => JSX.Element;
  name: string;
}) => (
  <>
    <StyledStack spaceInline="space030">
      <TextBlock typographyPreset="utilityBody030">{name}</TextBlock>
      {stylePresetVariations.includes(name) ? (
        <StylePresetsLoader name={name}>{children}</StylePresetsLoader>
      ) : (
        children({})
      )}
    </StyledStack>
  </>
);

export const ThemeChecker = () => (
  <>
    {scenarios.map(({name, component}) => (
      <ThemeCheckerScenario key={getSSRId()} name={name}>
        {component}
      </ThemeCheckerScenario>
    ))}
  </>
);
