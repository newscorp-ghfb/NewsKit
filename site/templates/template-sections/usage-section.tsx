import React from 'react';
import {ComponentPageCell} from '../../components/layout-cells';
import {MediaList, MediaListProps} from '../../components/media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

export type UsageSectionProps = MediaListProps & IntroductionText;

export const UsageSection: React.FC<UsageSectionProps> = ({
  introduction,
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
    </ComponentPageCell>
  </CommonSection>
);
