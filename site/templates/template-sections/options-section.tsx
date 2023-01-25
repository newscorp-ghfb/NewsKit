import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
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

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

export const OptionsSection: React.FC<OptionsSectionProps> = ({
  title,
  introduction,
  components,
  notice,
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
        {notice && (
          <>
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="overrides info"
              overrides={{
                marginBlockStart: 'space050',
              }}
            >
              {notice}
            </InlineMessage>
          </>
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
