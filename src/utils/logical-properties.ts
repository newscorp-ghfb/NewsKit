import {CSSObject, getXFromTheme, MQ} from './style';
import {ThemeProp} from './style-types';
import {deepMerge} from './deep-merge';
import {get} from './get';
import {rejectObject} from './filter-object';

export interface LogicalMargins {
  marginInlineStart?: MQ<string>;
  marginInlineEnd?: MQ<string>;
  marginInline?: MQ<string>;
  marginBlockStart?: MQ<string>;
  marginBlockEnd?: MQ<string>;
  marginBlock?: MQ<string>;
}

export interface LogicalPadding {
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
  defaultsPath?: string,
) => {
  let defaultToken;
  if (defaultsPath) {
    defaultToken = get(
      props.theme.componentDefaults,
      `${defaultsPath}.${cssProperty}`,
    );
  }

  const overrideToken = get(
    props,
    props.overrides ? `overrides.${cssProperty}` : cssProperty,
  );

  return getXFromTheme('spacePresets')(
    cssProperty,
    overrideToken || defaultToken,
  )(props);
};

const generateLogicalProps = (prefix: string, defaultsPath?: string) => (
  props: ThemeProp,
) => {
  const inlineStart = getResponsiveSpace(
    `${prefix}InlineStart`,
    props,
    defaultsPath,
  ) as CSSObject;

  const inlineEnd = getResponsiveSpace(
    `${prefix}InlineEnd`,
    props,
    defaultsPath,
  ) as CSSObject;

  const inline = getResponsiveSpace(
    `${prefix}Inline`,
    props,
    defaultsPath,
  ) as CSSObject;

  const blockStart = getResponsiveSpace(
    `${prefix}BlockStart`,
    props,
    defaultsPath,
  ) as CSSObject;

  const blockEnd = getResponsiveSpace(
    `${prefix}BlockEnd`,
    props,
    defaultsPath,
  ) as CSSObject;

  const block = getResponsiveSpace(
    `${prefix}Block`,
    props,
    defaultsPath,
  ) as CSSObject;

  return deepMerge(inlineStart, inlineEnd, inline, blockStart, blockEnd, block);
};

export const logicalMargins = (
  props: ThemeProp,
  defaultsPath?: string,
): CSSObject => generateLogicalProps('margin', defaultsPath)(props);

export const logicalPadding = (
  props: ThemeProp,
  defaultsPath?: string,
): CSSObject => generateLogicalProps('padding', defaultsPath)(props);

export const logicalProps = (defaultsPath?: string) => (
  props: ThemeProp,
): CSSObject => {
  const margin = logicalMargins(props, defaultsPath);
  const padding = logicalPadding(props, defaultsPath);
  return deepMerge(margin, padding);
};

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
