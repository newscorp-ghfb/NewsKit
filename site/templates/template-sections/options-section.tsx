import React from 'react';
import {MediaList, MediaListProps} from '../../components/media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ComponentPageCell} from '../../components/layout-cells';

export type SingleComponentOptionsProps = IntroductionText & MediaListProps;

export interface OptionsComponentsProps {
  components?: SingleComponentOptionsProps[];
}

export type OptionsSectionProps = MediaListProps &
  IntroductionText &
  OptionsComponentsProps;

export const OptionsSection: React.FC<OptionsSectionProps> = ({
  title,
  introduction,
  components,
  ...options
}) => {
  const renderOptionsSection = (
    optionsTitle?: string,
    optionsIntroduction?: string | React.ReactElement,
    optionsCards?: MediaListProps,
  ) => (
    <CommonSection
      title={optionsTitle || 'Options'}
      id={optionsTitle ? optionsTitle.replace(' ', '-') : 'options'}
      introduction={optionsIntroduction}
    >
      <ComponentPageCell>
        {optionsCards && (
          <MediaList
            {...optionsCards}
            cardsLayout={{
              xs: 'vertical',
              sm: 'vertical',
              md: 'horizontal',
              lg: 'horizontal',
              xl: 'horizontal',
            }}
            layout="1-span"
          />
        )}
      </ComponentPageCell>
    </CommonSection>
  );
  return (
    <>
      {components ? (
        components.map(
          ({
            title: renderTitle,
            introduction: renderIntroduction,
            ...props
          }) => (
            <>{renderOptionsSection(renderTitle, renderIntroduction, props)}</>
          ),
        )
      ) : (
        <>{renderOptionsSection(title, introduction, options)}</>
      )}
    </>
  );
};
