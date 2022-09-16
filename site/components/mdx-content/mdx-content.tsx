import React from 'react';
import {getMDXComponent} from 'mdx-bundler/client';
import {InlineMessage} from 'newskit';
import MarkdownElements from '../markdown-elements';
import {Mono} from '../flags';

export interface MdxContentProps {
  code: string;
}

export const MdxContent = ({code}: MdxContentProps) => {
  const MDX = React.useMemo(
    () =>
      getMDXComponent(code, {
        newskit: {InlineMessage},
      }),
    [code],
  );
  return (
    <div className="MDX-wrapper">
      <MDX components={{Mono, ...MarkdownElements}} />
    </div>
  );
};
