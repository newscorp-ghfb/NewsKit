import React from 'react';
import {
  EnhancerOverrides,
  CommonInputProps,
  FormInputState,
} from '../form/types';
import {EventData} from '../instrumentation';
import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export type TextFieldSize = 'small' | 'medium' | 'large';

export interface FormInputTextFieldProps
  extends Omit<CommonInputProps, 'size'> {
  size?: TextFieldSize; // remove this override when https://nidigitalsolutions.jira.com/browse/PPDSC-1872 is implemented
  overrides?: EnhancerOverrides & {
    stylePreset?: MQ<string>;
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingBlock` and `paddingInline` instead.
     */
    spaceInset?: MQ<string>;
    minHeight?: MQ<string>;
    width?: MQ<string>;
    typographyPreset?: MQ<string>;
    spaceStack?: MQ<string>;
    spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap for the enhancers. Should be renamed.
  } & LogicalProps;
  spellCheck?: boolean;
}

export interface TextFieldProps extends FormInputTextFieldProps, EventData {
  rules?: FormValidationRules;
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<any> | undefined;
}

type FormEntryChildrenProps = {
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state?: FormInputState;
  ref: React.Ref<HTMLInputElement>;
  error?: string;
};

type FormValidationRules = Record<string, string | object>;

export type FormEntryProps = {
  rules?: FormValidationRules;
  name?: string;
  children: (props: FormEntryChildrenProps) => React.ReactElement;
};
