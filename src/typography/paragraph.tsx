import React from 'react';
import {styled, getTypePreset, MQ, getSpace} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {ScreenReaderOnly} from '../screen-reader-only';

import {StylePresetKeys, TypePresetKeys, SpacePresetKeys} from '../theme';

export interface ParagraphProps {
  // eslint-disable-next-line
  children: any;
  dropCap?: boolean;
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
    typePreset?: MQ<TypePresetKeys>;
    dropCap?: {
      stylePreset?: MQ<StylePresetKeys>;
      typePreset?: MQ<TypePresetKeys>;
      space?: MQ<SpacePresetKeys>;
    };
  };
}

export const ParagraphText = styled.p<ParagraphProps>`
  margin: 0;
  padding: 1px 0;
  ${getStylePreset('paragraph', '')};
  ${getTypePreset('paragraph', '', {withCrop: true})};
`;

export const ParagraphDropCap = styled.span<ParagraphProps>`
  margin: 0;
  padding: 1px 0;
  float: left;
  margin-right: 0.15em;

  margin-top: ${getSpace('paragraph.dropCap', 'dropCap')};
  ${getTypePreset('paragraph.dropCap', 'dropCap', {withCrop: true})};
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
