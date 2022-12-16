/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {
  GridLayout,
  GridLayoutItem,
  FormInputTextField,
  FormInput,
  FormInputSelect,
  FormInputLabel,
  FormInputCheckbox,
  Form,
  SelectOption,
  Button,
  Scroll,
  Accordion,
  AccordionGroup,
} from 'newskit';
import {ElementsList} from './elements-list';

export const InspectorForm = ({
  rows = [],
  name = '',
  values = {},
  onSubmit,
  elements,
  moveItem,
  onSelect,
  onHover,
  onUnhover,
  onRemove,
  onClone,
  inspectId,
}) => {
  const props = rows.filter(f => f.name !== 'overrides');
  const overrides = rows.filter(f => f.name === 'overrides');

  const overridesList = [];
  if (overrides.length) {
    flatOverrides(overrides[0].type, 'overrides', overridesList);
  }

  // TOOD: reset the form on component

  return (
    <div>
      <GridLayout
        columnGap="space030"
        columns="auto auto"
        overrides={{marginBlockEnd: 'space030'}}
      >
        <Button
          size="small"
          overrides={{stylePreset: 'buttonOutlinedNegative'}}
          onClick={() => onRemove(inspectId)}
        >
          Remove
        </Button>
        <Button
          size="small"
          overrides={{stylePreset: 'buttonOutlinedPrimary'}}
          onClick={() => onClone(inspectId)}
        >
          Clone
        </Button>
      </GridLayout>
      <Form onSubmit={onSubmit} key={name}>
        <AccordionGroup defaultExpanded={[0]} expandSingle>
          <Accordion header="Props" defaultExpanded>
            <FormTab rows={props} values={values} />
            <Button type="submit" overrides={{marginBlock: 'space050'}}>
              Update
            </Button>
          </Accordion>
          <Accordion header="Overrides">
            <FormTab rows={overridesList} values={values} />
            <Button type="submit" overrides={{marginBlock: 'space050'}}>
              Update
            </Button>
          </Accordion>

          <Accordion header="Children">
            <ElementsList
              elements={elements}
              moveItem={moveItem}
              onSelect={onSelect}
              onHover={onHover}
              onUnhover={onUnhover}
            />
          </Accordion>
        </AccordionGroup>
      </Form>
    </div>
  );
};

const FormTab = ({rows, values}) => (
  <GridLayout
    columns="auto"
    rowGap="10px"
    overrides={{height: 'calc(100vh - 400px)'}}
  >
    <Scroll vertical>
      {rows.map(item => (
        <FormRow {...item} value={_.get(values, item.name)} />
      ))}
    </Scroll>
  </GridLayout>
);

const FormRow = ({name, isOptional, type, value}) => (
  <GridLayoutItem>
    <FormInput name={name} size="small">
      <FormInputLabel>
        {name} {!isOptional && '( * )'}
      </FormInputLabel>
      {getInput({type, name, value})}
    </FormInput>
  </GridLayoutItem>
);

const getInput = ({type, name, value}) => {
  if (type === 'ReactNode') return makeTextInput({value, name});
  if (type === 'string') return makeTextInput({value, name});
  if (type === 'boolean') return makeCheckbox({value});
  if (Array.isArray(type) && typeof type[0] === 'string')
    return makeSelect({options: type, value});

  if (name === 'overrides') {
    const overridesList = [];
    flatOverrides(type, 'overrides', overridesList);
    return overridesList.map(item => <FormRow {...item} />);
  }

  return 'no available';
};

const makeSelect = ({options, value}) => (
  <FormInputSelect>
    {options.map(v => (
      <SelectOption value={v} selected={value === v}>
        {v}
      </SelectOption>
    ))}
  </FormInputSelect>
);

const makeTextInput = ({value, name}) => {
  const datalist = getDataList(name);
  return <FormInputTextField defaultValue={value} list={datalist} />;
};

const makeCheckbox = ({value}) => <FormInputCheckbox checked={value} />;

const flatOverrides = (type = [], prefix = 'overrides', list = []) => {
  type.forEach(l => {
    const name = `${prefix}.${l.name}`;
    const {isOptional} = l;

    if (Array.isArray(l.type)) {
      flatOverrides(l.type, name, list);
    } else {
      list.push({
        name,
        isOptional,
        type: l.type,
      });
    }
  });
};

const getDataList = name => {
  if (
    name.includes('height') ||
    name.includes('width') ||
    name.includes('iconSize')
  ) {
    return 'list-sizing';
  }
  if (name.includes('stylePreset')) {
    return 'list-stylePresets';
  }
  if (name.includes('typographyPreset')) {
    return 'list-typographyPresets';
  }
  if (
    name.includes('spaceInset') ||
    name.includes('spaceInline') ||
    name.includes('margin') ||
    name.includes('padding')
  ) {
    return 'list-spacePresets';
  }
  return null;
};
