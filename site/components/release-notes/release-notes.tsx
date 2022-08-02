import React from 'react';
import ReactMarkdown from 'react-markdown';
import {TextBlock} from 'newskit';
import {FullRelease} from '../../utils/release-notes/types';
import {GITHUB_URL, JIRA_URL, REPO} from '../../utils/release-notes/constants';

const removeTriggerRelease = (body: string) =>
  body.replaceAll(
    RegExp(
      `${GITHUB_URL}/${REPO}/compare/v\\d*\\.\\d*\\.\\d*...trigger-release@\\d*\\.\\d*\\.\\d*`,
      'g',
    ),
    (invalidLink: string) => invalidLink.replace('trigger-release@', 'v'),
  );

const modifyContent = (body: string) =>
  body
    // remove the comments at the top of the notes
    .replace(RegExp(`<!-- .* -->\r\n\r\n`, 'g'), '')
    // make the new contributors header the same size as the others
    .replace('## New Contributors', '### New Contributors')
    // remove the what's changed header
    .replace("## What's Changed\r\n", '');

const addCompareLinks = (body: string) =>
  body.replaceAll(
    RegExp(
      `${GITHUB_URL}/${REPO}/compare/v\\d*\\.\\d*\\.\\d*...v\\d*\\.\\d*\\.\\d*`,
      'g',
    ),
    (link: string) => `[${link}](${link})`,
  );

const addPRLinks = (body: string) =>
  body.replaceAll(
    RegExp(`${GITHUB_URL}/${REPO}/pull/\\d*`, 'g'),
    (link: string) => {
      const PRNumber = link.split('/').slice(-1)[0];
      return `[#${PRNumber}](${link})`;
    },
  );

const addProfileLinks = (body: string) =>
  body.replaceAll(
    RegExp(`@[a-zA-Z\\d](?:[a-zA-Z\\d]|-(?=[a-zA-Z\\d])){0,38}`, 'g'),
    (handle: string) => {
      const profileLink = `${GITHUB_URL}/${handle.split('@')[1]}`;
      return `[${handle}](${profileLink})`;
    },
  );

const addTicketLinks = (body: string) =>
  body.replaceAll(RegExp(`PPDSC-\\d*`, 'g'), (ticketId: string) => {
    const ticketLink = `${JIRA_URL}/browse/${ticketId}`;
    return `[${ticketId}](${ticketLink})`;
  });

const ReleaseNotes = ({body}: Pick<FullRelease, 'body'>) => (
  <TextBlock
    typographyPreset="editorialParagraph030"
    stylePreset="gitHubMarkDownText"
  >
    <ReactMarkdown>
      {modifyContent(
        addPRLinks(
          addProfileLinks(
            addTicketLinks(addCompareLinks(removeTriggerRelease(body))),
          ),
        ),
      )}
    </ReactMarkdown>
  </TextBlock>
);

export default ReleaseNotes;
