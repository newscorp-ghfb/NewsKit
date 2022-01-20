import {CSSObject, getResponsiveSpace, MQ, ThemeProp} from '.';

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

const generateLogicalProps = (prefix: string) => (props: ThemeProp) => {
  const inlineStart = getResponsiveSpace(
    `${prefix}InlineStart`,
    '', // these defaults won't work for all components so maybe this generating in advance approach isn't going to work
    // or maybe it will require some extra params to configure the behaviour, but I'm keeping it simple for now
    '',
    `${prefix}InlineStart`,
  )(props) as CSSObject;

  const inlineEnd = getResponsiveSpace(
    `${prefix}InlineEnd`,
    '',
    '',
    `${prefix}InlineEnd`,
  )(props) as CSSObject;

  const inline = getResponsiveSpace(
    `${prefix}Inline`,
    '',
    '',
    `${prefix}Inline`,
  )(props) as CSSObject;

  const blockStart = getResponsiveSpace(
    `${prefix}BlockStart`,
    '',
    '',
    `${prefix}BlockStart`,
  )(props) as CSSObject;

  const blockEnd = getResponsiveSpace(
    `${prefix}BlockEnd`,
    '',
    '',
    `${prefix}BlockEnd`,
  )(props) as CSSObject;

  const block = getResponsiveSpace(
    `${prefix}Block`,
    '',
    '',
    `${prefix}Block`,
  )(props) as CSSObject;

  return {
    ...inlineStart,
    ...inlineEnd,
    ...inline,
    ...blockStart,
    ...blockEnd,
    ...block,
  };
};

export const useLogicalMargins = (props: ThemeProp): CSSObject =>
  generateLogicalProps('margin')(props);

export const useLogicalPadding = (props: ThemeProp): CSSObject =>
  generateLogicalProps('padding')(props);
