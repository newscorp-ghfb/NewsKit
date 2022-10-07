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
  title: 'Components/caption',
  component: () => 'None',
};

export const StoryCaption = () => (
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
          typographyPreset: 'editorialParagraph030',
          stylePreset: 'inkContrast',
          spaceStack: 'space090',
          credit: {
            typographyPreset: 'utilityMeta030',
            stylePreset: 'uppercaseInkContrast',
          },
        }}
        creditText="Credit text with overrides"
      >
        Caption and credit text with overrides on both
      </Caption>
    </StyledDiv>
  </Container>
);
StoryCaption.storyName = 'caption';

export const StoryCaptionInset = () => (
  <Container>
    <StorybookHeading>CaptionInset component</StorybookHeading>
    <StyledDiv>
      <CaptionInset creditText="Credit text">
        CaptionInset with both caption and credit text
      </CaptionInset>
    </StyledDiv>

    <StyledDiv>
      <CaptionInset>CaptionInset with only caption text</CaptionInset>
    </StyledDiv>

    <StyledDiv>
      <CaptionInset
        overrides={{
          typographyPreset: 'editorialParagraph030',
          stylePreset: 'inkBrand010',
          spaceStack: 'space090',
          spaceInset: {
            xs: 'spaceInset060',
            md: 'spaceInset070',
          },
          credit: {
            typographyPreset: 'utilityMeta030',
            stylePreset: 'uppercaseInkBrand010',
          },
        }}
        creditText="Credit text"
      >
        CaptionInset with overrides and both caption and credit text
      </CaptionInset>
    </StyledDiv>
  </Container>
);
StoryCaptionInset.storyName = 'caption-inset';

export const StoryCaptionLogicalOverrides = () => (
  <Container>
    <StorybookHeading>Caption with logical overrides</StorybookHeading>
    <StyledDiv>
      <Caption
        creditText="Credit text"
        overrides={{
          marginBlockEnd: 'space050',
        }}
      >
        Caption with both caption and credit text
      </Caption>
    </StyledDiv>
    <StyledDiv>
      <Caption
        overrides={{
          marginBlockEnd: 'space050',
          spaceStack: 'space030',
          spaceInset: {
            xs: 'spaceInset060',
          },
        }}
        creditText="Credit text"
      >
        CaptionInset with overrides and both caption and credit text
      </Caption>
    </StyledDiv>
  </Container>
);
StoryCaptionLogicalOverrides.storyName = 'caption-logical-overrides';
