import React from 'react';
import {Block} from '..';
import {styled} from '../../utils/style';
import {StorybookSubHeading} from '../../test/storybook-comps';

const ColoredSeparators = styled.div`
  background-color: #f2f2f2;
  height: 24px;
  width: 160px;
  margin: 30px 0;
  text-align: center;
`;

export default {
  name: 'block',
  children: [
    {
      name: 'block',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>Block</StorybookSubHeading>
          <ColoredSeparators>Scenario Separator</ColoredSeparators>
          <Block>
            <span>Block without padding or margin</span>
          </Block>
          <ColoredSeparators>Scenario Separator</ColoredSeparators>
          <Block
            overrides={{
              spaceStack: 'space030',
              paddingPreset: 'spaceInset030',
              stylePreset: 'flagSolid',
            }}
          >
            <span>
              Block with margin spaceStack030, padding spaceInset030, style
              flagSolid, type display010
            </span>
          </Block>
          <hr />
          <ColoredSeparators>Scenario Separator</ColoredSeparators>
          <Block
            overrides={{
              spaceStack: {
                xs: 'space010',
                sm: 'space020',
                md: 'space030',
                lg: 'space040',
              },
            }}
          >
            <span>Block with margin spaceStack010 at xs breakpoint</span>
            <br />
            <span>Block with margin spaceStack020 at sm breakpoint</span>
            <br />
            <span>Block with margin spaceStack030 at md breakpoint</span>
            <br />
            <span>Block with margin spaceStack040 at lg breakpoint</span>
            <br />
          </Block>
          <hr />
          <ColoredSeparators>Scenario Separator</ColoredSeparators>
          <Block
            as="span"
            overrides={{
              spaceInline: 'space030',
            }}
          >
            <span>Block with margin spaceInline030</span>
          </Block>
          <Block as="span">
            <span>Block without padding or margin</span>
          </Block>
          <ColoredSeparators>Scenario Separator</ColoredSeparators>
          <Block as="span">
            <span> Block as span </span>
          </Block>
          <ColoredSeparators>Scenario Separator</ColoredSeparators>
        </React.Fragment>
      ),
    },
  ],
};
