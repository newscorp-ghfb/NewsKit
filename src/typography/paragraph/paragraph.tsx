import React from 'react';
import {isFragment} from 'react-is';
import {
  styled,
  getTypographyPreset,
  MQ,
  getStylePreset,
} from '../../utils/style';
import defaults from './defaults';
import {withOwnTheme} from '../../utils/with-own-theme';
import {ScreenReaderOnly} from '../../screen-reader-only';
import {logicalProps, LogicalProps} from '../../utils/logical-properties';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  dropCap?: boolean;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    dropCap?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    } & LogicalProps;
  } & LogicalProps;
}

const ThemelessParagraphText = styled.p<ParagraphProps>`
  margin: 0;
  ${getStylePreset('paragraph', '')};
  ${getTypographyPreset('paragraph', '')};
  ${logicalProps('paragraph', '')}
`;
export const ParagraphText = withOwnTheme(ThemelessParagraphText)({
  defaults,
});

/*
We use this solution instead of css :first-letter since there is Firefox inconsistences,
which causes the first letter to has less margin than desired.
*/
const ThemelessParagraphDropCap = styled.span<ParagraphProps>`
  float: left;
  ${getTypographyPreset('paragraph.dropCap', 'dropCap')};
  ${getStylePreset('paragraph.dropCap', 'dropCap')};
  ${logicalProps('paragraph.dropCap', 'dropCap')}
`;
export const ParagraphDropCap = withOwnTheme(ThemelessParagraphDropCap)({
  defaults,
});

const getFirstLetter = (
  children: (React.ReactChild | React.ReactFragment | React.ReactPortal)[],
): string => {
  const [firstChild] = children;
  if (typeof firstChild === 'string') {
    return firstChild.charAt(0);
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
    return [firstChild.substring(1), ...rest];
  }
  if (isFragment(firstChild)) {
    return [
      removeFirstLetter(React.Children.toArray(firstChild.props.children)),
      ...rest,
    ];
  }

  /* istanbul ignore next */
  return children;
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  overrides = {},
  dropCap = false,
  ...rest
}) => {
  const childrenAsArray = React.Children.toArray(children);
  const firstLetter = getFirstLetter(childrenAsArray);
  const useDropCap = dropCap && firstLetter;

  return useDropCap && children ? (
    <>
      <ParagraphText aria-hidden="true" overrides={overrides} {...rest}>
        <ParagraphDropCap overrides={overrides}>{firstLetter}</ParagraphDropCap>
        {removeFirstLetter(childrenAsArray)}
      </ParagraphText>
      <ScreenReaderOnly>{children}</ScreenReaderOnly>
    </>
  ) : (
    <ParagraphText overrides={overrides} {...rest}>
      {children}
    </ParagraphText>
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
