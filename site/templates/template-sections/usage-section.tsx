import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {ComponentPageCell} from '../../components/layout-cells';
import {
  MediaItem,
  MediaList,
  MediaListProps,
} from '../../components/media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

export type UsageSectionProps = Omit<MediaListProps, 'cards'> &
  IntroductionText & {
    cards?: Array<MediaItem>;
  };

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

export const UsageSection: React.FC<UsageSectionProps> = ({
  introduction,
  notice,
  cards,
  ...usage
}) => (
  <CommonSection title="Usage" id="usage" introduction={introduction}>
    <ComponentPageCell>
      {cards && (
        <MediaList
          gridProps={{xsRowGutter: 'space050'}}
          cardType="usage"
          layout="2-span"
          cards={cards}
          {...usage}
        />
      )}
      {notice && (
        <InlineMessage
          icon={infoIcon}
          role="region"
          title="Note"
          aria-label="usage notice"
          overrides={{
            marginBlockStart: 'space070',
          }}
        >
          {notice}
        </InlineMessage>
      )}
    </ComponentPageCell>
  </CommonSection>
);
