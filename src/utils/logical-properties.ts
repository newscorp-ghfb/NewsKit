import {CSSObject, getXFromTheme, MQ} from './style';
import {ThemeProp} from './style-types';
import {deepMerge} from './deep-merge';
import {get} from './get';
import {rejectObject} from './filter-object';

interface LogicalMargins {
  marginInlineStart?: MQ<string>;
  marginInlineEnd?: MQ<string>;
  marginInline?: MQ<string>;
  marginBlockStart?: MQ<string>;
  marginBlockEnd?: MQ<string>;
  marginBlock?: MQ<string>;
}

interface LogicalPadding {
  paddingInlineStart?: MQ<string>;
  paddingInlineEnd?: MQ<string>;
  paddingInline?: MQ<string>;
  paddingBlockStart?: MQ<string>;
  paddingBlockEnd?: MQ<string>;
  paddingBlock?: MQ<string>;
}

export interface LogicalProps extends LogicalMargins, LogicalPadding {}

const getResponsiveSpace = (
  cssProperty: string,
  props: ThemeProp & {overrides?: unknown},
) => {
  const token = get(
    props,
    props.overrides ? `overrides.${cssProperty}` : cssProperty,
  );

  return getXFromTheme('spacePresets')(cssProperty, token)(props);
};

const generateLogicalProps = (prefix: string) => (props: ThemeProp) => {
  const inlineStart = getResponsiveSpace(
    `${prefix}InlineStart`,
    props,
  ) as CSSObject;

  const inlineEnd = getResponsiveSpace(
    `${prefix}InlineEnd`,
    props,
  ) as CSSObject;

  const inline = getResponsiveSpace(`${prefix}Inline`, props) as CSSObject;

  const blockStart = getResponsiveSpace(
    `${prefix}BlockStart`,
    props,
  ) as CSSObject;

  const blockEnd = getResponsiveSpace(`${prefix}BlockEnd`, props) as CSSObject;

  const block = getResponsiveSpace(`${prefix}Block`, props) as CSSObject;

  return deepMerge(inlineStart, inlineEnd, inline, blockStart, blockEnd, block);
};

const useLogicalMargins = (props: ThemeProp): CSSObject =>
  generateLogicalProps('margin')(props);

const useLogicalPadding = (props: ThemeProp): CSSObject =>
  generateLogicalProps('padding')(props);

export const useLogicalProps = (props: ThemeProp): CSSObject =>
  deepMerge(useLogicalMargins(props), useLogicalPadding(props));

export const omitLogicalPropsFromOverrides = (
  overrides: Record<string, unknown>,
) =>
  rejectObject(overrides, [
    'marginInlineStart',
    'marginInlineEnd',
    'marginInline',
    'marginBlockStart',
    'marginBlockEnd',
    'marginBlock',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingInline',
    'paddingBlockStart',
    'paddingBlockEnd',
    'paddingBlock',
  ]);
