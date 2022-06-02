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

const ThemelessParagraphDropCap = styled.span<ParagraphProps>`
  margin: 0 0 0 0.15em;
  float: left;
  ${getResponsiveSpace('marginTop', 'paragraph.dropCap', 'dropCap', 'space')};
  ${getTypographyPreset('paragraph.dropCap', 'dropCap')};
  ${getStylePreset('paragraph.dropCap', 'dropCap')};
`;
export const ParagraphDropCap = withOwnTheme(ThemelessParagraphDropCap)({
  defaults,
});

const getFirstWord = (
  children: (React.ReactChild | React.ReactFragment | React.ReactPortal)[],
): string => {
  if (children.length > 0 && typeof children[0] === 'string') {
    return children[0].split(' ')[0];
  }
  if (children.length && isFragment(children[0])) {
    return getFirstWord(React.Children.toArray(children[0].props.children));
  }
  return '';
};

const removeFirstWord = (
  children: (React.ReactChild | React.ReactFragment | React.ReactPortal)[],
) => {
  if (children.length > 0 && typeof children[0] === 'string') {
    // eslint-disable-next-line no-param-reassign
    children[0] = children[0].split(' ').slice(1).join(' ');
  } else if (children.length && isFragment(children[0])) {
    // eslint-disable-next-line no-param-reassign
    children[0] = removeFirstWord(
      React.Children.toArray(children[0].props.children),
    );
  }

  return children;
};

/**

For a11y reason we need to add aria-hidden to the first word of the paragraph.
Creating the fallowing structure:
<p>
  <span aria-hidden="true"><span class="dropcap">T</span>his</span>
  <span class="sr-only">This</span> is paragraph text
</p>          

 */

export const Paragraph: React.FC<ParagraphProps> = ({
  children: ch,
  overrides = {},
  dropCap = false,
}) => {
  const children = React.Children.toArray(ch);
  const firstWord = getFirstWord(children);
  const useDropCap = dropCap && firstWord;

  return (
    <ParagraphText>
      {useDropCap && (
        <>
          <span aria-hidden="true">
            <ParagraphDropCap overrides={overrides}>
              {firstWord[0]}
            </ParagraphDropCap>
            {firstWord.slice(1)}{' '}
          </span>
          <ScreenReaderOnly>{firstWord}</ScreenReaderOnly>
        </>
      )}
      {useDropCap ? removeFirstWord(children) : children}
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
