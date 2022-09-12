import {CSSObject, getTypographyPreset, getXFromTheme, MQ} from './style';
import {ThemeProp} from './style-types';
import {deepMerge} from './deep-merge';
import {get} from './get';
import {filterObject, rejectObject} from './filter-object';

export interface LogicalMarginProps {
  marginInlineStart?: MQ<string>;
  marginInlineEnd?: MQ<string>;
  marginInline?: MQ<string>;
  marginBlockStart?: MQ<string>;
  marginBlockEnd?: MQ<string>;
  marginBlock?: MQ<string>;
}

export interface LogicalPaddingProps {
  paddingInlineStart?: MQ<string>;
  paddingInlineEnd?: MQ<string>;
  paddingInline?: MQ<string>;
  paddingBlockStart?: MQ<string>;
  paddingBlockEnd?: MQ<string>;
  paddingBlock?: MQ<string>;
}

export interface LogicalProps extends LogicalMarginProps, LogicalPaddingProps {}

const getResponsiveSpace = (
  cssProperty: string,
  props: ThemeProp & {overrides?: unknown},
  defaultsPath?: string,
  overridesPath?: string,
) => {
  let defaultToken;
  if (defaultsPath) {
    defaultToken = get(
      props.theme.componentDefaults,
      `${defaultsPath}.${cssProperty}`,
    );
  }
  const overrideToken = props.overrides
    ? get(
        props,
        overridesPath
          ? `overrides.${overridesPath}.${cssProperty}`
          : `overrides.${cssProperty}`,
      )
    : get(props, cssProperty);

  return getXFromTheme('spacePresets')(
    cssProperty,
    overrideToken || defaultToken,
  )(props);
};

const generateLogicalProps = (
  prefix: string,
  defaultsPath?: string,
  overridesPath?: string,
) => (props: ThemeProp) => {
  const inlineStart = getResponsiveSpace(
    `${prefix}InlineStart`,
    props,
    defaultsPath,
    overridesPath,
  ) as CSSObject;

  const inlineEnd = getResponsiveSpace(
    `${prefix}InlineEnd`,
    props,
    defaultsPath,
    overridesPath,
  ) as CSSObject;

  const inline = getResponsiveSpace(
    `${prefix}Inline`,
    props,
    defaultsPath,
    overridesPath,
  ) as CSSObject;

  const blockStart = getResponsiveSpace(
    `${prefix}BlockStart`,
    props,
    defaultsPath,
    overridesPath,
  ) as CSSObject;

  const blockEnd = getResponsiveSpace(
    `${prefix}BlockEnd`,
    props,
    defaultsPath,
    overridesPath,
  ) as CSSObject;

  const block = getResponsiveSpace(
    `${prefix}Block`,
    props,
    defaultsPath,
    overridesPath,
  ) as CSSObject;

  return deepMerge(inlineStart, inlineEnd, inline, blockStart, blockEnd, block);
};

export const logicalMargins = (
  props: ThemeProp,
  defaultsPath?: string,
  overridesPath?: string,
): CSSObject =>
  generateLogicalProps('margin', defaultsPath, overridesPath)(props);

export const logicalPadding = (
  props: ThemeProp,
  defaultsPath?: string,
  overridesPath?: string,
): CSSObject =>
  generateLogicalProps('padding', defaultsPath, overridesPath)(props);

export const logicalProps = (defaultsPath?: string, overridesPath?: string) => (
  props: ThemeProp,
): CSSObject => {
  const margin = logicalMargins(props, defaultsPath, overridesPath);
  const padding = logicalPadding(props, defaultsPath, overridesPath);
  return deepMerge(margin, padding);
};

export const logicalPaddingProps = (
  defaultsPath?: string,
  overridesPath?: string,
) => (props: ThemeProp): CSSObject =>
  logicalPadding(props, defaultsPath, overridesPath);

export const logicalMarginProps = (
  defaultsPath?: string,
  overridesPath?: string,
) => (props: ThemeProp): CSSObject =>
  logicalMargins(props, defaultsPath, overridesPath);

const logicalMarginPropsArray = [
  'marginInlineStart',
  'marginInlineEnd',
  'marginInline',
  'marginBlockStart',
  'marginBlockEnd',
  'marginBlock',
];

const logicalPaddingPropsArray = [
  'paddingInlineStart',
  'paddingInlineEnd',
  'paddingInline',
  'paddingBlockStart',
  'paddingBlockEnd',
  'paddingBlock',
];

const logicalPropsArray = [
  ...logicalPaddingPropsArray,
  ...logicalMarginPropsArray,
];

export const omitLogicalPropsFromOverrides = (overrides: object | undefined) =>
  rejectObject(overrides || {}, logicalPropsArray as keyof object);

export const omitLogicalMarginPropsFromOverrides = (
  overrides: object | undefined,
) => rejectObject(overrides || {}, logicalMarginPropsArray as keyof object);

export const omitLogicalPaddingPropsFromOverrides = (
  overrides: object | undefined,
) => rejectObject(overrides || {}, logicalPaddingPropsArray as keyof object);

export const extractLogicalPropsFromOverrides = (
  overrides: object | undefined,
) => filterObject(overrides || {}, logicalPropsArray as keyof object);

// TypographyPreset and spacing logical props can both set padding. This is a
// helper function that takes the TypographyPreset padding value unless there is
// another value set in the component defaults or overrides.
export const getLogicalPropsAndTypographyPreset = (
  defaultsPath?: string,
  overridesPath?: string,
) => (props: ThemeProp): CSSObject => {
  const padding = logicalPadding(props, defaultsPath, overridesPath);
  const margins = logicalMargins(props, defaultsPath, overridesPath);
  const typographyPreset = getTypographyPreset(defaultsPath, overridesPath, {
    // Only apply the crop padding if there are no padding overrides.
    withCrop: !Object.keys(padding).length,
  })(props);
  return deepMerge(margins, padding, typographyPreset);
};
