import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  getSizingCssFromTheme,
  LinkStandalone,
  styled,
  TextBlock,
  UnorderedList,
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
      marginBlockStart="space090"
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
          ul: ({children}) => (
            <UnorderedList
              markerAlign="start"
              overrides={{
                marginBlockStart: 'space050',
                marginBlockEnd: 'space080',
              }}
            >
              {children.filter(e => e !== '\n')}
            </UnorderedList>
          ),
          h3: ({children}) => (
            <TextBlock
              stylePreset="inkContrast"
              typographyPreset="editorialHeadline030"
            >
              {children}
            </TextBlock>
          ),
          li: ({children}) => (
            <TextBlock
              as="span"
              typographyPreset="editorialParagraph020"
              marginBlockEnd="space040"
            >
              {children}
            </TextBlock>
          ),
        }}
      >
        {formatGitHubMarkDown(body)}
      </ReactMarkdown>
    </TextBlock>
  </ReleaseNotesContainer>
);

export default ReleaseNotes;
