import React from 'react';
import {MediaList, MediaListProps} from '../../components/media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ComponentPageCell} from '../../components/layout-cells';

export type OptionsSectionProps = MediaListProps & IntroductionText;

export const OptionsSection: React.FC<OptionsSectionProps> = ({
  introduction,
  ...options
}) => (
  <CommonSection title="Options" id="options" introduction={introduction}>
    <ComponentPageCell>
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
    </ComponentPageCell>
  </CommonSection>
);
