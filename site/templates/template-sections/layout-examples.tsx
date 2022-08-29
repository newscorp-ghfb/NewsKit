import React from 'react';
import {Block, Image, ImageProps, InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {renderIfReactComponent} from 'newskit/utils/component';
import {ComponentPageCell} from '../../components/layout-cells';
import {ContentText} from '../../components/text-section/content-text';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

export interface LayoutProps {
  components: {
    title: string;
    summary: string | JSX.Element;
    media: ImageProps | JSX.Element | React.ComponentType;
  }[];
  notice?: string | React.ReactNode;
}

export type LayoutExamplesProps = LayoutProps & IntroductionText;

export const LayoutExamplesSection: React.FC<LayoutExamplesProps> = ({
  introduction,
  components,
  notice,
}) => (
  <CommonSection
    title="Layout examples"
    id="layout-examples"
    introduction={introduction}
  >
    <ComponentPageCell>
      {components.map(({title, summary, media}, index, array) => (
        <>
          <ContentText title={title}>{summary}</ContentText>
          <Block spaceStack="space050">
            {renderIfReactComponent(media) || (
              <Image {...(media as ImageProps)} />
            )}
          </Block>
          {index < array.length - 1 && <Block spaceStack="space090" />}
        </>
      ))}
      {notice && (
        <InlineMessage
          icon={infoIcon}
          role="region"
          aria-label="layout examples notice"
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
