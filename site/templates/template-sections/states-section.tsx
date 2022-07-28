import React from 'react';
import {Block, InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {MediaList, MediaListProps} from '../../components/media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ComponentPageCell} from '../../components/layout-cells';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

export type StatesSectionProps = MediaListProps & IntroductionText;

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

export const StatesSection: React.FC<StatesSectionProps> = ({
  introduction,
  layout,
  notice,
  ...states
}) => (
  <CommonSection title="States" id="states" introduction={introduction}>
    <ComponentPageCell>
      <MediaList {...states} layout={layout || '2-span'} />
      {notice && (
        <>
          <Block spaceStack="space070" />
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="states notice"
          >
            {notice}
          </InlineMessage>
        </>
      )}
    </ComponentPageCell>
  </CommonSection>
);
