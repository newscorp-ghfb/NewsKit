import React from 'react';
import {
  styled,
  getTypographyPresetFromTheme,
  getSizingFromTheme,
  getColorFromTheme,
  IconButton,
  Stack,
  toNewsKitIcon,
} from 'newskit';
import {Remove as FilledRemove} from '@emotion-icons/material/Remove';
import {Add as FilledAdd} from '@emotion-icons/material/Add';
import {LegacyBlock} from '../../legacy-block';
import {KnobContainer, StyledTitle} from './common';
import {InputKnob} from './input-knob';

const IconFilledRemove = toNewsKitIcon(FilledRemove);
const IconFilledAdd = toNewsKitIcon(FilledAdd);

type UpdateFunction = (
  index: number,
  key?: string,
) => (newValue: unknown) => void;

const ButtonContainer = styled.div`
  margin-bottom: 10px;
`;

export interface ArrayKnobProps {
  label: string;
  value: unknown[];
  onChange?: (value: unknown) => void;
}

export const StyledLabel = styled.label`
  display: block;
  ${getTypographyPresetFromTheme('utilityBody030')};
  margin: ${getSizingFromTheme('sizing040')} 0px;
`;

export const StyledInput = styled.input`
  ${getTypographyPresetFromTheme('utilityBody010')};
  display: block;
  padding: ${getSizingFromTheme('sizing020')};
  background-color: ${getColorFromTheme('interface020')};
  color: ${getColorFromTheme('inkContrast')};

  width: 300px;
  border-radius: ${({theme}) => theme.borders.borderRadiusDefault};
  border-style: solid;
  border-width: ${({theme}) => theme.borders.borderWidth020};
  border-color: ${getColorFromTheme('interface040')};

  :focus {
    outline: none;
    border-color: ${getColorFromTheme('inkBrand010')};
  }
`;

const renderRow = (
  label: string,
  value: unknown,
  index: number,
  length: number,
  update: UpdateFunction,
) => {
  if (typeof value === 'object') {
    return Object.entries(value as Record<string, string>).map(([k, v]) => (
      <LegacyBlock
        display="flex"
        flexGrow={1}
        maxWidth="350px"
        key={label + k + length}
      >
        <InputKnob
          label={k}
          labelVisible={!index}
          value={v}
          onChange={update(index, k)}
        />
      </LegacyBlock>
    ));
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return (
      <LegacyBlock display="flex" flexGrow={1} maxWidth="350px">
        <InputKnob
          label={label}
          labelVisible={false}
          value={value}
          onChange={update(index)}
        />
      </LegacyBlock>
    );
  }

  return false;
};

const TEST_ID_PREFIX = 'array-knob';

export const ArrayKnob: React.FC<ArrayKnobProps> = ({
  label,
  value: values,
  onChange = () => {},
}) => {
  const add = () => {
    const lastEntry = values[values.length - 1];
    const newEntry = typeof lastEntry === 'object' ? {...lastEntry} : lastEntry;
    onChange([...values, newEntry]);
  };

  const remove = (index: number) => () => {
    const newValues = [...values];
    newValues.splice(index, 1);
    onChange(newValues);
  };

  const update: UpdateFunction = (index, key) => newValue => {
    const newValues = [...values];
    newValues[index] = key
      ? {...(values[index] as object), [key]: newValue}
      : newValue;
    onChange(newValues);
  };

  const lowercaseLabel = label.toLowerCase().replace(' ', '-');

  return (
    <KnobContainer data-testid={`${TEST_ID_PREFIX}-${lowercaseLabel}`}>
      <StyledTitle>{label}</StyledTitle>
      <LegacyBlock>
        {values.map((value, i, arr) => {
          if (typeof value === 'undefined' || Array.isArray(value)) {
            // eslint-disable-next-line no-console
            console.error(
              'Arrays of arrays not currently supported by ArrayKnob. Entries must be strings or objects of string values',
            );
            return null;
          }

          const row = renderRow(label, value, i, arr.length, update);
          return row ? (
            <Stack
              flow="horizontal-bottom"
              spaceInline="space020"
              /* eslint-disable-next-line react/no-array-index-key */
              key={label + i}
            >
              {row}
              <ButtonContainer>
                <IconButton
                  size="small"
                  disabled={arr.length < 2}
                  onClick={remove(i)}
                  data-testid={`${TEST_ID_PREFIX}-button-remove`}
                  aria-label="Remove"
                >
                  <IconFilledRemove />
                </IconButton>
              </ButtonContainer>
            </Stack>
          ) : null;
        })}
        <IconButton
          size="small"
          onClick={add}
          data-testid={`${TEST_ID_PREFIX}-button-add`}
          aria-label="Add"
        >
          <IconFilledAdd />
        </IconButton>
      </LegacyBlock>
    </KnobContainer>
  );
};

export default ArrayKnob;
