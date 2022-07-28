import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Block} from 'newskit';
import {FullRelease} from './types';
import {GITHUB_URL, JIRA_URL, REPO} from './utils';

const removeTriggerRelease = (body: string) =>
  body.replaceAll(
    RegExp(
      `${GITHUB_URL}/${REPO}/compare/v\\d*\\.\\d*\\.\\d*...trigger-release@\\d*\\.\\d*\\.\\d*`,
      'g',
    ),
    (invalidLink: string) => invalidLink.replace('trigger-release@', 'v'),
  );

const removeComments = (body: string) =>
  body.replace(RegExp(`<!-- .* -->`, 'g'), '');

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
    RegExp(`@[a-z\\d](?:[a-z\\d]|-(?=[a-z\\d])){0,38}`, 'g'),
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
  <Block>
    <ReactMarkdown>
      {removeComments(
        addPRLinks(
          addProfileLinks(
            addTicketLinks(addCompareLinks(removeTriggerRelease(body))),
          ),
        ),
      )}
    </ReactMarkdown>
  </Block>
);

export default ReleaseNotes;
