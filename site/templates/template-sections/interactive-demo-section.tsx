// Breaking the linting for testing purposes, will revert
import {Playground} from '../../components/playground';
import {Block} from 'newskit';
import React from 'react';
import {PlaygroundProps} from '../../components/playground/types';
import {ComponentPageCell} from '../../components/layout-cells';
import {CommonSection} from './common-section';

export interface InteractiveDemoSectionProps {
  introduction: string | React.ReactElement;
  playground?: PlaygroundProps;
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
    {playground && (
      <ComponentPageCell>
        <Block spaceStack="space050">
          <Playground {...playground} />
        </Block>
      </ComponentPageCell>
    )}
  </CommonSection>
);
