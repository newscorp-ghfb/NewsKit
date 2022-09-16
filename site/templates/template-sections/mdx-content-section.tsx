import React from 'react';
import {CommonSection} from './common-section';
import {MdxContent, MdxContentProps} from '../../components/mdx-content';
import {ComponentPageCell} from '../../components/layout-cells';

export type MdxContentSectionProps = MdxContentProps;

export const MdxContentSection: React.FC<MdxContentSectionProps> = ({
  ...mdxContent
}) => (
  <CommonSection id="component-content">
    <ComponentPageCell>
      <MdxContent {...mdxContent} />
    </ComponentPageCell>
  </CommonSection>
);
