import {Block, styled} from 'newskit';
import React from 'react';
import {PlaygroundProps} from '../../components/playground/types';
import {ComponentPageCell} from '../../components/layout-cells';
import {CommonSection} from './common-section';

export interface InteractiveDemoSectionProps {
  introduction: string | React.ReactElement;
  playground?: PlaygroundProps;
}

const StyledDiv = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
`;

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
          <StyledDiv>
            <iframe
              title="hello"
              src="http://ncu-newskit-docs.s3-website-eu-west-1.amazonaws.com/ppdsc-2568-storybook/storybook/?path=/story/components-text-block--story-text-block-default&embedded=true&singleStory=true"
              width="100%"
              height="100%"
              frameBorder="0"
            />
          </StyledDiv>
        </Block>
      </ComponentPageCell>
    )}
  </CommonSection>
);
