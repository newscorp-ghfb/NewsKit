import React from 'react';
import {styled, getColorFromTheme} from '../utils/style';

export interface ArticleContentProps {
  className?: string;
  boldIntro?: boolean;
  boldHeadings?: boolean;
}

const headingNames = [
  'Heading1',
  'Heading2',
  'Heading3',
  'Heading4',
  'Heading5',
  'Heading6',
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getDisplayName = (child: any) =>
  child && child.type && child.type.displayName;

const StyledArticleContent = styled.div<ArticleContentProps>`
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;

  ::selection,
  *::selection {
    background-color: ${getColorFromTheme('blue020')};
  }
`;

export const ArticleContent: React.FC<ArticleContentProps> = ({
  children,
  ...props
}) => (
  <StyledArticleContent {...props}>
    {React.Children.map(children, (child, index) => {
      if (!child) {
        return child;
      }

      const bold =
        (props.boldIntro && index === 0) ||
        (props.boldHeadings && headingNames.includes(getDisplayName(child)));

      if (bold) {
        return React.cloneElement(child as React.ReactElement, {
          bold,
        });
      }
      return child;
    })}
  </StyledArticleContent>
);
ArticleContent.displayName = 'ArticleContent';
