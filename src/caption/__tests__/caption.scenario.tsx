import * as React from 'react';
import {Caption} from '../caption';
import {CaptionInset} from '../caption-inset';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled, getSizingFromTheme} from '../../utils/style';

const Container = styled.div`
  margin: ${getSizingFromTheme('sizing050')};
`;

const StyledDiv = styled.div`
  border: 1px solid black;
`;
export default {
  name: 'caption',
  children: [
    {
      name: 'caption',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>Caption</StorybookHeading>
          <StyledDiv>
            <Caption creditText="credit">
              Caption component with both caption and credit text
            </Caption>
          </StyledDiv>
          <br />
          <br />
          <StyledDiv>
            <Caption>Caption component with only caption text</Caption>
          </StyledDiv>
          <br />
          <br />
          <StyledDiv>
            <Caption
              overrides={{
                typographyPreset: 'body030',
                stylePreset: 'inkContrast',
                spaceStack: 'space090',
                credit: {
                  typographyPreset: 'meta030',
                  stylePreset: 'inkContrast',
                },
              }}
              creditText="Credit text with overrides"
            >
              Caption and credit text with overrides on both
            </Caption>
          </StyledDiv>
        </Container>
      ),
    },
    {
      name: 'caption-inset',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>CaptionInset component</StorybookHeading>
          <StyledDiv>
            <CaptionInset creditText="Credit text">
              CaptionInset with both caption and credit text
            </CaptionInset>
          </StyledDiv>
          <br />
          <br />
          <StyledDiv>
            <CaptionInset>CaptionInset with only caption text</CaptionInset>
          </StyledDiv>
          <br />
          <br />
          <StyledDiv>
            <CaptionInset
              overrides={{
                typographyPreset: 'body030',
                stylePreset: 'inkInformative',
                spaceStack: 'space090',
                spaceInset: {
                  xs: 'spaceInset060',
                  md: 'spaceInset070',
                },
                credit: {
                  typographyPreset: 'meta030',
                  stylePreset: 'inkInformative',
                },
              }}
              creditText="Credit text"
            >
              CaptionInset with overrides and both caption and credit text
            </CaptionInset>
          </StyledDiv>
        </Container>
      ),
    },
  ],
};
