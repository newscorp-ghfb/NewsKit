import {Block, Image, ImageProps} from 'newskit';
import {renderIfReactComponent} from 'newskit/utils/component';
import React from 'react';
import {Table} from '../../components/table';
import {IntroductionText} from './types';
import {ComponentPageCell} from '../../components/layout-cells';
import {CommonSection} from './common-section';

export interface AnatomyProps {
  media: ImageProps | JSX.Element | React.ComponentType;
  rows: {
    name: string;
    description: string | JSX.Element;
    component: string | string[];
    optional?: boolean;
  }[];
}

export type AnatomySectionProps = AnatomyProps & IntroductionText;

export const AnatomySection: React.FC<AnatomySectionProps> = ({
  introduction,
  media,
  rows,
}) => (
  <CommonSection title="Anatomy" id="anatomy" introduction={introduction}>
    <ComponentPageCell>
      <Block spaceStack="space050">
        {renderIfReactComponent(media) || <Image {...(media as ImageProps)} />}
      </Block>
      <Block spaceStack="space000">
        <Table
          columns={['Item', 'Name', 'Description', 'Component', 'Optional']}
          rows={rows}
        />
      </Block>
    </ComponentPageCell>
  </CommonSection>
);
