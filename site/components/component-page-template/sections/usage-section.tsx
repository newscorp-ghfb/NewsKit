import React from 'react';
import {MediaList, MediaListProps} from '../../media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

export type UsageSectionProps = MediaListProps & IntroductionText;

export const UsageSection: React.FC<UsageSectionProps> = ({
  introduction,
  ...usage
}) => (
  <CommonSection title="Usage" id="usage" introduction={introduction}>
    <MediaList
      gridProps={{xsRowGutter: 'space050'}}
      cardType="usage"
      layout="2-span"
      {...usage}
    />
  </CommonSection>
);
