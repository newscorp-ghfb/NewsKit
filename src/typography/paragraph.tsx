import React from 'react';
import {
  styled,
  getTypographyPreset,
  MQ,
  getSpace,
  getStylePreset,
} from '../utils/style';

import {ScreenReaderOnly} from '../screen-reader-only';

export interface ParagraphProps {
  // eslint-disable-next-line
  children: any;
  dropCap?: boolean;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    dropCap?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      space?: MQ<string>;
    };
  };
}

export const ParagraphText = styled.p<ParagraphProps>`
  margin: 0;
  ${getStylePreset('paragraph', '')};
  ${getTypographyPreset('paragraph', '')};
`;

export const ParagraphDropCap = styled.span<ParagraphProps>`
  margin: 0;
  float: left;
  margin-right: 0.15em;

  margin-top: ${getSpace('paragraph.dropCap', 'dropCap')};
  ${getTypographyPreset('paragraph.dropCap', 'dropCap')};
  ${getStylePreset('paragraph.dropCap', 'dropCap')};
`;

const ParagraphContainer = styled.div`
  display: inline-flex;
  max-width: 100%;
`;

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  overrides = {},
  dropCap = false,
}) =>
  dropCap && children ? (
    <ParagraphContainer>
      <ParagraphText aria-hidden="true" overrides={overrides}>
        <ParagraphDropCap overrides={overrides}>{children[0]}</ParagraphDropCap>
        {children.slice(1)}
      </ParagraphText>

      <ScreenReaderOnly>{children}</ScreenReaderOnly>
    </ParagraphContainer>
  ) : (
    <ParagraphText overrides={overrides}>{children}</ParagraphText>
  );

Paragraph.displayName = 'Paragraph';
export const P = Paragraph;

export const Subscript = styled.sub`
  font-size: 80%;
`;
Subscript.displayName = 'Subscript';
export const Sub = Subscript;

export const Superscript = styled.sup`
  font-size: 80%;
`;
Superscript.displayName = 'Superscript';
export const Sup = Superscript;
