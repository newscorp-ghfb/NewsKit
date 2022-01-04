import React, {useState} from 'react';
import {
  styled,
  getColorFromTheme,
  getSizingFromTheme,
  getBorderFromTheme,
  newskitLightTheme,
  ThemeProvider,
  theSunTheme,
  theTimesTheme,
} from 'newskit';
import {Block, BlockProps} from '../block';
import {MultiChoiceKnob} from './knobs/multichoice-knob';
import {TextKnob} from './knobs/text-knob';
import {BooleanKnob} from './knobs/boolean-knob';
import {
  PlaygroundProps,
  MultiChoiceKnobConfig,
  TextKnobConfig,
  BooleanKnobConfig,
  KnobsConfig,
} from './types';
import {CodeExample} from './code-example';
import {generateSource} from './source-generator';
import {ArrayKnob} from './knobs/array-knob';
import {Selector} from './selector';
import {ErrorBoundary} from './error-boundary';

const PlaygroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px ${getColorFromTheme('interface030')};
  box-shadow: 0 3px 4px 2px ${getColorFromTheme('interface010')};
  background-color: ${getColorFromTheme('interface010')};
  max-width: 960px;
`;

const StyledMockTab = styled.span`
  display: inline-block;
  padding: ${getSizingFromTheme('spacingSize040')};
  border-bottom-style: solid;
  border-bottom-width: ${getBorderFromTheme('borderWidth020')};
  border-bottom-color: ${getColorFromTheme('interactive010')};
`;

const isMultiChoiceKnobConfig = (
  config: unknown,
): config is MultiChoiceKnobConfig =>
  Boolean(config && (config as MultiChoiceKnobConfig).options);

const isTextKnobConfig = (config: unknown): config is TextKnobConfig =>
  config && typeof (config as TextKnobConfig).value === 'string';

const isBooleanKnobConfig = (config: unknown): config is BooleanKnobConfig =>
  config && typeof (config as BooleanKnobConfig).value === 'boolean';

const renderKnob = (
  state: Record<string, unknown>,
  updateState: (prop: string) => (value: unknown) => void,
) => (knobConfig: KnobsConfig) => {
  if (isMultiChoiceKnobConfig(knobConfig)) {
    return (
      <MultiChoiceKnob
        key={knobConfig.propName}
        label={knobConfig.name}
        options={knobConfig.options}
        value={state[knobConfig.propName] as string}
        onChange={updateState(knobConfig.propName)}
      />
    );
  }
  if (Array.isArray(knobConfig.value)) {
    return (
      <ArrayKnob
        key={knobConfig.propName}
        label={knobConfig.name}
        value={state[knobConfig.propName] as unknown[]}
        onChange={updateState(knobConfig.propName)}
      />
    );
  }
  if (isTextKnobConfig(knobConfig)) {
    return (
      <TextKnob
        key={knobConfig.propName}
        label={knobConfig.name}
        value={(state[knobConfig.propName] as string) || ''}
        onChange={updateState(knobConfig.propName)}
      />
    );
  }
  if (isBooleanKnobConfig(knobConfig)) {
    return (
      <BooleanKnob
        key={knobConfig.propName}
        label={knobConfig.name}
        value={(state[knobConfig.propName] as boolean) || false}
        onChange={updateState(knobConfig.propName)}
      />
    );
  }
  return null;
};

export const Playground: React.FC<
  PlaygroundProps | {componentName: false}
> = props => {
  const [theme, setTheme] = useState(newskitLightTheme);
  const [componentIndex, setComponentIndex] = useState(0);

  const {knobs = []} = props as PlaygroundProps;

  const [state, setState] = useState(() =>
    knobs.reduce(
      (acc, knobConfig) => {
        const defaultOption = isMultiChoiceKnobConfig(knobConfig)
          ? knobConfig.options.find(opt => opt.isDefault)
          : {value: knobConfig.value};

        return {
          ...acc,
          [knobConfig.propName]: defaultOption && defaultOption.value,
        };
      },
      {} as Record<string, unknown>,
    ),
  );

  const {componentName} = props;

  if (!componentName) {
    return null;
  }

  const {newskitPath, component} = props as PlaygroundProps;

  const updateState = (prop: string) => (value: unknown) =>
    setState({
      ...state,
      [prop]: value,
    });

  const Component = Array.isArray(component)
    ? component[componentIndex]
    : component;

  const selectedCompName = Array.isArray(componentName)
    ? componentName[componentIndex]
    : componentName;

  const componentOptions = Array.isArray(componentName)
    ? componentName.map((name, index) => [name, index] as [string, number])
    : false;

  const commonBlockProps: Partial<BlockProps> = {
    $display: 'flex',
    $justifyContent: 'center',
    $alignItems: 'center',
    $flexDirection: 'column',
    $border: 'solid 1px',
    $borderColor: 'interface030',
  };

  const source = generateSource({
    componentName: selectedCompName,
    newskitPath,
    state,
  });

  const errorBoundaryKey = JSON.stringify(state, (k, v) =>
    v && v.$$typeof && v.displayName ? v.displayName : v,
  );

  return (
    <PlaygroundContainer>
      <Block
        data-testid="playground-element"
        {...commonBlockProps}
        $minHeight="200px"
      >
        <ErrorBoundary key={errorBoundaryKey}>
          <ThemeProvider theme={theme}>
            <Component {...state} />
          </ThemeProvider>
        </ErrorBoundary>
      </Block>
      <Block $font="body030">
        <StyledMockTab>Props</StyledMockTab>
      </Block>
      <Selector
        options={[
          ['NewsKit Light', newskitLightTheme],
          ['The Sun', theSunTheme],
          ['The Times', theTimesTheme],
        ]}
        onChange={setTheme}
      >
        Theme
      </Selector>
      {componentOptions && (
        <Selector options={componentOptions} onChange={setComponentIndex}>
          Component
        </Selector>
      )}
      <Block {...commonBlockProps} $alignItems="left" $padding="sizing030">
        {knobs.map(renderKnob(state, updateState))}
      </Block>
      <Block {...commonBlockProps}>
        <CodeExample
          componentName={selectedCompName}
          source={source.code || source.error}
          error={Boolean(source.error)}
        />
      </Block>
    </PlaygroundContainer>
  );
};
export default Playground;
