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
  Tabs,
  Tab,
  Scroll,
} from 'newskit';

export const InspectorForm = ({
  rows = [],
  name = '',
  values = {},
  onSubmit,
}) => {
  const props = rows.filter(f => f.name !== 'overrides');
  const overrides = rows.filter(f => f.name === 'overrides');

  const overridesList = [];
  if (overrides.length) {
    flatOverrides(overrides[0].type, 'overrides', overridesList);
  }

  // TOOD: reset the form on component
  return (
    <Form onSubmit={onSubmit} key={name}>
      <Tabs>
        <Tab label="Props">
          <FormTab rows={props} values={values} />
        </Tab>
        <Tab label="Overrides">
          <FormTab rows={overridesList} values={values} />
        </Tab>
      </Tabs>

      <Button type="submit" overrides={{marginBlock: 'space050'}}>
        Update
      </Button>
    </Form>
  );
};

const FormTab = ({rows, values}) => (
  <GridLayout
    columns="auto"
    rowGap="10px"
    overrides={{height: 'calc(100vh - 300px)'}}
  >
    <Scroll vertical>
      {rows.map(item => (
        <FormRow {...item} value={values[item.name]} />
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
  if (type === 'ReactNode') return makeTextInput({value});
  if (type === 'string') return makeTextInput({value});
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

const makeTextInput = ({value}) => <FormInputTextField value={value} />;

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
