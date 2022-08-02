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
        }}
      >
        {formatGitHubMarkDown(body)}
      </ReactMarkdown>
    </TextBlock>
  </ReleaseNotesContainer>
);

export default ReleaseNotes;
