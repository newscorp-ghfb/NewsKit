import {Block} from 'newskit';
import React from 'react';
import {Playground} from '../../playground';
import {PlaygroundProps} from '../../playground/types';
import {ComponentPageCell} from '../../layout-cells';
import {CommonSection} from './common-section';

export interface InteractiveDemoSectionProps {
  introduction: string;
  playground: PlaygroundProps;
}

export const InteractiveDemoSection: React.FC<InteractiveDemoSectionProps> = ({
  introduction,
  playground,
}) => (
  <CommonSection
    title="Interactive Demo"
    id="interactive-demo"
    introduction={introduction}
  >
    <ComponentPageCell>
      <Block spaceStack="space050">
        <Playground {...playground} />
      </Block>
    </ComponentPageCell>
  </CommonSection>
);
