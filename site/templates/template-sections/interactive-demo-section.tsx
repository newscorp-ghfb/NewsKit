import {Block} from 'newskit';
import React from 'react';
import {Playground} from '../../components/playground';
import {
  GenericComponent,
  PlaygroundProps,
} from '../../components/playground/types';
import {ComponentPageCell} from '../../components/layout-cells';
import {CommonSection} from './common-section';

export interface InteractiveDemoSectionProps<T extends GenericComponent> {
  introduction: string | React.ReactElement;
  playground?: PlaygroundProps<T>;
}

export const InteractiveDemoSection = <T extends GenericComponent>({
  introduction,
  playground,
}: InteractiveDemoSectionProps<T>) => (
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
