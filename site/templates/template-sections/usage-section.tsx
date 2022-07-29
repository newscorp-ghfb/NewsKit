import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {ComponentPageCell} from '../../components/layout-cells';
import {MediaList, MediaListProps} from '../../components/media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

export type UsageSectionProps = MediaListProps & IntroductionText;

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
  ...usage
}) => (
  <CommonSection title="Usage" id="usage" introduction={introduction}>
    <ComponentPageCell>
      <MediaList
        gridProps={{xsRowGutter: 'space050'}}
        cardType="usage"
        layout="2-span"
        {...usage}
      />
      {notice && (
        <InlineMessage
          title="Note"
          icon={infoIcon}
          role="region"
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
