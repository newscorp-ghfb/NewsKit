import React from 'react';
import {isFragment} from 'react-is';
import {
  styled,
  getTypographyPreset,
  MQ,
  getStylePreset,
  getResponsiveSpace,
} from '../../utils/style';
import defaults from './defaults';
import {withOwnTheme} from '../../utils/with-own-theme';
import {ScreenReaderOnly} from '../../screen-reader-only';

export interface ParagraphProps {
  children: React.ReactNode;
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

const ThemelessParagraphText = styled.p<ParagraphProps>`
  margin: 0;
  ${getStylePreset('paragraph', '')};
  ${getTypographyPreset('paragraph', '')};
`;
export const ParagraphText = withOwnTheme(ThemelessParagraphText)({
  defaults,
});

/*
We use this solution instead of css :first-letter since there is Firefox inconsistences,
which causes the first letter to has less margin than desired.
*/
const ThemelessParagraphDropCap = styled.span<ParagraphProps>`
  margin: 0 0.15em 0 0;
  float: left;
  ${getResponsiveSpace('marginTop', 'paragraph.dropCap', 'dropCap', 'space')};
  ${getTypographyPreset('paragraph.dropCap', 'dropCap')};
  ${getStylePreset('paragraph.dropCap', 'dropCap')};
`;
export const ParagraphDropCap = withOwnTheme(ThemelessParagraphDropCap)({
  defaults,
});

const getFirstLetter = (
  children: (React.ReactChild | React.ReactFragment | React.ReactPortal)[],
): string => {
  const [firstChild] = children;
  if (typeof firstChild === 'string') {
    return firstChild.split('')[0];
  }
  if (isFragment(firstChild)) {
    return getFirstLetter(React.Children.toArray(firstChild.props.children));
  }
  return '';
};

const removeFirstLetter = (
  children: (React.ReactChild | React.ReactFragment | React.ReactPortal)[],
): (React.ReactChild | React.ReactFragment | React.ReactPortal)[] => {
  const [firstChild, ...rest] = children;
  if (typeof firstChild === 'string') {
    return [firstChild.split('').slice(1).join(''), ...rest];
  }
  if (isFragment(firstChild)) {
    return [
      removeFirstLetter(React.Children.toArray(firstChild.props.children)),
      ...rest,
    ];
  }

  return children;
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  overrides = {},
  dropCap = false,
}) => {
  const childrenAsArray = React.Children.toArray(children);
  const firstLetter = getFirstLetter(childrenAsArray);
  const useDropCap = dropCap && firstLetter;

  return useDropCap && children ? (
    <>
      <ParagraphText aria-hidden="true" overrides={overrides}>
        <ParagraphDropCap overrides={overrides}>{firstLetter}</ParagraphDropCap>
        {removeFirstLetter(childrenAsArray)}
      </ParagraphText>
      <ScreenReaderOnly>{children}</ScreenReaderOnly>
    </>
  ) : (
    <ParagraphText overrides={overrides}>{children}</ParagraphText>
  );
};

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
