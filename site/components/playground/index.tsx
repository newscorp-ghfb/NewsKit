/* eslint-disable react/destructuring-assignment */
import React, {useState} from 'react';
import {
  styled,
  getColorFromTheme,
  deepMerge,
  InstrumentationProvider,
} from 'newskit';
import {LegacyBlock, LegacyBlockProps} from '../legacy-block';
import {MultiChoiceKnob} from './knobs/multichoice-knob';
import {InputKnob} from './knobs/input-knob';
import {BooleanKnob} from './knobs/boolean-knob';
import {
  PlaygroundProps,
  MultiChoiceKnobConfig,
  InputKnobConfig,
  BooleanKnobConfig,
  KnobsConfig,
  GenericComponent,
} from './types';
import {CodeExample} from './code-example';
import {generateSource} from './source-generator';
import {ArrayKnob} from './knobs/array-knob';
import {Selector} from './selector';
import {ErrorBoundary} from './error-boundary';
import {isComponent} from './utils';

const PlaygroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 4px 2px ${getColorFromTheme('interfaceBackground')};
  background-color: ${getColorFromTheme('interfaceBackground')};
`;

const isMultiChoiceKnobConfig = <T extends GenericComponent>(
  config: KnobsConfig<T>,
): config is MultiChoiceKnobConfig<T> =>
  Boolean(config && (config as MultiChoiceKnobConfig<T>).options);

const isInputKnobConfig = <T extends GenericComponent>(
  config: KnobsConfig<T>,
): config is InputKnobConfig<T> =>
  !!config &&
  ['string', 'number'].includes(typeof (config as InputKnobConfig<T>).value);

const isBooleanKnobConfig = <T extends GenericComponent>(
  config: KnobsConfig<T>,
): config is BooleanKnobConfig<T> =>
  !!config && typeof (config as BooleanKnobConfig<T>).value === 'boolean';

const renderKnob = <T extends GenericComponent>(
  state: React.ComponentProps<T>,
  updateState: (
    prop: keyof React.ComponentProps<T>,
  ) => (value: unknown) => void,
) => (knobConfig: KnobsConfig<T>) => {
  if (isMultiChoiceKnobConfig(knobConfig)) {
    return (
      <MultiChoiceKnob
        key={knobConfig.name}
        label={knobConfig.name}
        options={knobConfig.options}
        value={state[knobConfig.propName]}
        onChange={updateState(knobConfig.propName)}
      />
    );
  }
  if (Array.isArray(knobConfig.value)) {
    return (
      <ArrayKnob
        key={knobConfig.name}
        label={knobConfig.name}
        value={state[knobConfig.propName]}
        onChange={updateState(knobConfig.propName)}
      />
    );
  }
  if (isInputKnobConfig(knobConfig)) {
    let value = state[knobConfig.propName] as string | number;
    if (!value && value !== 0) {
      value = '';
    }
    return (
      <InputKnob
        key={knobConfig.propName}
        label={knobConfig.name}
        value={value}
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

export const Playground = <T extends GenericComponent>(
  props: PlaygroundProps<T> | {componentName: false},
) => {
  const [componentIndex, setComponentIndex] = useState(0);

  const {knobs = []} = props as PlaygroundProps<T>;

  const [state, setState] = useState<React.ComponentProps<T>>(() =>
    knobs.reduce((acc, knobConfig) => {
      const defaultOption = isMultiChoiceKnobConfig(knobConfig)
        ? knobConfig.options.find(opt => opt.isDefault)
        : {value: knobConfig.value};

      return {
        ...acc,
        [knobConfig.propName]:
          defaultOption &&
          (acc[knobConfig.propName] !== undefined
            ? deepMerge(acc[knobConfig.propName], defaultOption.value)
            : defaultOption.value),
      };
    }, {} as React.ComponentProps<T>),
  );

  const {componentName} = props;

  if (!componentName) {
    return null;
  }

  const {component} = props as PlaygroundProps<T>;

  const updateState = (prop: keyof React.ComponentProps<T>) => (
    value: unknown,
  ) => {
    let newValue = value;

    if (
      !Array.isArray(value) &&
      typeof value === 'object' &&
      value !== null &&
      typeof state[prop] === 'object' &&
      state[prop] !== null
    ) {
      newValue = deepMerge(state[prop] as object, value);
    }
    return setState({
      ...state,
      [prop]: newValue,
    });
  };

  const Component = Array.isArray(component)
    ? component[componentIndex]
    : component;

  const selectedCompName = Array.isArray(componentName)
    ? componentName[componentIndex]
    : componentName;

  const componentOptions = Array.isArray(componentName)
    ? componentName.map((name, index) => [name, index] as [string, number])
    : false;

  const commonBlockProps: Partial<LegacyBlockProps> = {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column',
    border: 'solid 1px',
    borderColor: 'interface030',
    borderRadius: '12px 12px 0px 0px',
    color: 'inkBase',
  };

  const source = generateSource({
    componentName: selectedCompName,
    state,
  });

  const errorBoundaryKey = JSON.stringify(state, (k, v) =>
    isComponent(v) ? v.displayName : v,
  );

  return (
    <InstrumentationProvider context={{area: 'playground'}}>
      <PlaygroundContainer>
        <LegacyBlock
          data-testid="playground-element"
          {...commonBlockProps}
          minHeight="280px"
          backgroundColor="interfaceBackground"
          padding="sizing070"
        >
          <ErrorBoundary key={errorBoundaryKey}>
            <Component {...state} />
          </ErrorBoundary>
        </LegacyBlock>
        {componentOptions && (
          <Selector options={componentOptions} onChange={setComponentIndex}>
            Component
          </Selector>
        )}
        <LegacyBlock
          {...commonBlockProps}
          alignItems="left"
          padding="sizing070"
          overflow="scroll"
          maxHeight="450px"
          borderRadius="0px 0px 0px 0px"
        >
          {knobs.map(renderKnob(state, updateState))}
        </LegacyBlock>
        <LegacyBlock {...commonBlockProps} borderRadius="0px 0px 12px 12px">
          <CodeExample
            componentName={selectedCompName}
            source={source.code || source.error || ''}
            error={Boolean(source.error)}
          />
        </LegacyBlock>
      </PlaygroundContainer>
    </InstrumentationProvider>
  );
};

export default Playground;
export {withProps} from './utils';
