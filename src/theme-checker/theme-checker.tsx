import React, {useEffect, useState} from 'react';
import {Flow, Stack} from '../stack';
import {TextBlock} from '../text-block';
import {MQ} from '../utils';
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
      spaceInline="space050"
      spaceStack="space050"
      wrap="wrap"
      flow={Flow.HorizontalTop}
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
  <StyledStack spaceInline="space030">
    <TextBlock typographyPreset="utilityBody030" stylePreset="inkContrast">
      {name}
    </TextBlock>
    {stylePresetVariations.includes(name) ? (
      <StylePresetsLoader name={name}>{children}</StylePresetsLoader>
    ) : (
      children({})
    )}
  </StyledStack>
);

export const ThemeChecker = () => (
  <>
    {scenarios.map(({name, component}) => (
      <ThemeCheckerScenario key={name} name={name}>
        {component}
      </ThemeCheckerScenario>
    ))}
  </>
);
