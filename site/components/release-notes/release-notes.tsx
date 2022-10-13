import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  getSizingCssFromTheme,
  LinkStandalone,
  styled,
  TextBlock,
} from 'newskit';
import {FullRelease} from '../../utils/release-notes/types';
import {formatGitHubMarkDown} from '../../utils/release-notes/functions';
import {Code} from '../code';
import {InlineCode} from '../markdown-elements';

const ReleaseNotesContainer = styled.div`
  ${getSizingCssFromTheme('marginBlockStart', 'sizing060')};
`;

const ReleaseNotes = ({body}: Pick<FullRelease, 'body'>) => (
  <ReleaseNotesContainer>
    <TextBlock
      as="div"
      typographyPreset="editorialParagraph030"
      stylePreset="gitHubMarkDownText"
    >
      <ReactMarkdown
        components={{
          a: ({href, children}) => (
            <LinkStandalone
              overrides={{typographyPreset: 'editorialParagraph030'}}
              href={href!}
            >
              {children}
            </LinkStandalone>
          ),
          code: ({children, inline}) => {
            if (inline) {
              return <InlineCode>{children}</InlineCode>;
            }
            return <Code>{children}</Code>;
          },
        }}
      >
        {formatGitHubMarkDown(body)}
      </ReactMarkdown>
    </TextBlock>
  </ReleaseNotesContainer>
);

export default ReleaseNotes;
