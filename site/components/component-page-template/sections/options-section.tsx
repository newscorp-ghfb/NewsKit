import React from 'react';
import {MediaList, MediaListProps} from '../../media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

export type OptionsSectionProps = MediaListProps & IntroductionText;

export const OptionsSection: React.FC<OptionsSectionProps> = ({
  introduction,
  ...options
}) => (
  <CommonSection title="Options" id="options" introduction={introduction}>
    <MediaList
      {...options}
      cardsLayout={{
        xs: 'vertical',
        sm: 'vertical',
        md: 'horizontal',
        lg: 'horizontal',
        xl: 'horizontal',
      }}
      layout="1-span"
    />
  </CommonSection>
);
