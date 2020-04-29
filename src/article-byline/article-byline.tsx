import React from 'react';
import {styled, getTypePresetFromTheme} from '../utils/style';
import {Link} from '../link';
import {StyledUl} from '../list';

interface BylineData {
  author: string;
  href?: string;
  title?: string;
  location?: string;
}

export interface ArticleBylineProps {
  bylineData: BylineData[];
}

const BylineLI = styled.li`
  ${getTypePresetFromTheme('body010')}
  display: inline-block;
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:not(:last-child):after {
    content: '';
    display: inline-block;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -5px;
    width: 1px;
    height: 10px;
    background: black;
  }
`;

const renderByline = ({author, href, title, location}: BylineData) => (
  <BylineLI key={author}>
    {href ? (
      <Link
        href={href}
        rel="author"
        title={`Posts by ${author}`}
        data-author={author}
        aria-label={`Posts by ${author}`}
      >
        {author}
      </Link>
    ) : (
      <span>{author}</span>
    )}
    {title && <span>, {title}</span>}
    {location && <span>, {location}</span>}
  </BylineLI>
);

export const ArticleByline: React.FC<ArticleBylineProps> = ({bylineData}) => (
  <div>
    <StyledUl display="inline">{bylineData.map(renderByline)}</StyledUl>
  </div>
);
