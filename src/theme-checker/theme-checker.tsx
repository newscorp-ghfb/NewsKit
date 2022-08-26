/* istanbul ignore file */
import React, {useEffect, useState} from 'react';
import {Block} from '../block';
import {Stack} from '../stack';
import {TextBlock} from '../text-block';
import {MQ} from '../utils';
import {toKebabCase} from '../utils/to-kebab-case';
import {scenarios} from './scenarios';
import {StyledWrapper} from './styled';

const stylePresetVariations = ['Banner', 'Inline Message', 'Toast'];
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
      const stylePreset = (
        await import(`../${kebabComponentName}/style-presets`)
      ).default;

      setStylePresets(Object.keys(stylePreset));
    };
    dynamicallyImport();
  }, [name]);
  return (
    <Stack
      spaceInline="space100"
      spaceStack="space050"
      wrap="wrap"
      flow="horizontal-top"
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
    <Block spaceStack="space030">
      <TextBlock typographyPreset="utilityHeading010" stylePreset="inkContrast">
        {name}
      </TextBlock>
    </Block>
    {stylePresetVariations.includes(name) ? (
      <StylePresetsLoader key="name" name={name}>
        {children}
      </StylePresetsLoader>
    ) : (
      children({})
    )}
  </>
);

export const ThemeChecker = () => (
  <>
    {scenarios.map(({name, component}) => (
      <StyledWrapper key={`${name}-wrapper`}>
        <ThemeCheckerScenario key={name} name={name}>
          {component}
        </ThemeCheckerScenario>
      </StyledWrapper>
    ))}
  </>
);
