import React from 'react';
import {Block, Image, ImageProps, Tab, Tabs, TabSize, TextBlock} from 'newskit';
import {renderIfReactComponent} from 'newskit/utils/component';
import {ComponentPageCell} from '../../components/layout-cells';
import {ContentText} from '../../components/text-section/content-text';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {Table} from '../../components/table';

const tabOverrides = {
  typographyPreset: 'utilityButton020',
  stylePreset: 'componentPageTabs',
};

type AnatomyRowsProps = {
  name: string;
  description: string | JSX.Element;
  component?: string | string[];
  optional?: boolean;
};

export interface SingleComponentAnatomyProps {
  title: string;
  summary: string | JSX.Element;
  media?: ImageProps | JSX.Element | React.ComponentType;
  rows: AnatomyRowsProps[];
}

export interface AnatomyProps {
  components?: SingleComponentAnatomyProps[];
  tabs?: {
    title: string;
    summary: string;
    media: ImageProps | JSX.Element | React.ComponentType;
    rows: AnatomyRowsProps[];
  }[];
  media?: ImageProps | JSX.Element | React.ComponentType;
  rows: AnatomyRowsProps[];
}

export type AnatomySectionProps = AnatomyProps & IntroductionText;

export const AnatomySection: React.FC<AnatomySectionProps> = ({
  introduction,
  media,
  rows,
  tabs,
  components,
}) => {
  const renderAnatomy = (
    tabMedia: ImageProps | JSX.Element | React.ComponentType | undefined,
    tabRows: AnatomyRowsProps[],
  ) => (
    <>
      <Block spaceStack="space050">
        {renderIfReactComponent(tabMedia) || (
          <Image {...(tabMedia as ImageProps)} />
        )}
      </Block>
      <Block spaceStack="space000">
        <Table
          columns={['Item', 'Name', 'Description', 'Component', 'Optional']}
          rows={tabRows}
        />
      </Block>
    </>
  );
  return (
    <>
      {tabs ? (
        <CommonSection title="Anatomy" id="anatomy">
          <ComponentPageCell>
            <Tabs size={TabSize.Medium}>
              {tabs.map(({title, summary, media: tabMedia, rows: tabRows}) => (
                <Tab label={title} overrides={tabOverrides}>
                  <Block spaceStack="space080">
                    <TextBlock
                      stylePreset="inkBase"
                      typographyPreset="editorialSubheadline020"
                    >
                      {summary}
                    </TextBlock>
                  </Block>
                  {renderAnatomy(tabMedia, tabRows)}
                </Tab>
              ))}
            </Tabs>
          </ComponentPageCell>
        </CommonSection>
      ) : (
        <CommonSection title="Anatomy" id="anatomy" introduction={introduction}>
          <ComponentPageCell>
            {components
              ? components.map(
                  (
                    {
                      title,
                      summary,
                      media: componentMedia,
                      rows: componentrows,
                    },
                    index,
                    array,
                  ) => (
                    <>
                      <ContentText title={title}>{summary}</ContentText>
                      {componentMedia &&
                        renderAnatomy(componentMedia, componentrows)}
                      {index < array.length - 1 && (
                        <Block spaceStack="space090" />
                      )}
                    </>
                  ),
                )
              : media && renderAnatomy(media, rows)}
          </ComponentPageCell>
        </CommonSection>
      )}
    </>
  );
};
