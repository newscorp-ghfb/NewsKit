import React from 'react';
import {
  Stack,
  Flag,
  Block,
  Divider,
  Button,
  StackChild,
  AlignSelfValues,
  Link,
  IconFilledGitHub,
  Flow,
  Headline,
  FlagSize,
  IconFilledFigma,
  Hidden,
  Cell,
} from 'newskit';
import {MetaProps, MetaFlagStylePresets} from './types';

export const Meta = ({status, introduced, codeUrl, figmaUrl}: MetaProps) => (
  <Cell xs={12} md={10} lg={8} mdOffset={1}>
    <Block spaceStack="space110">
      <Block spaceStack="space050">
        <Hidden xs sm md lg>
          <Stack flow={Flow.HorizontalCenter} stackDistribution="space-between">
            <Stack flow={Flow.HorizontalTop} spaceInline="space060">
              <Stack flow={Flow.VerticalLeft} spaceInline="space030">
                <Headline overrides={{typographyPreset: 'utilityLabel020'}}>
                  Status
                </Headline>
                <Flag
                  size={FlagSize.Large}
                  overrides={{
                    stylePreset: MetaFlagStylePresets[status],
                    typographyPreset: 'utilityLabel020',
                  }}
                >
                  {status}
                </Flag>
              </Stack>
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider vertical />
              </StackChild>
              <Stack flow={Flow.VerticalLeft} spaceInline="space050">
                <Headline overrides={{typographyPreset: 'utilityLabel020'}}>
                  Introduced
                </Headline>
                <Link
                  href="http://localhost:8081"
                  overrides={{typographyPreset: 'utilityBody030'}}
                >
                  {introduced}
                </Link>
              </Stack>
            </Stack>
            <Stack flow="horizontal-center" spaceInline="space040">
              <Button
                overrides={{stylePreset: 'buttonOutlinedSecondary'}}
                href={codeUrl}
              >
                <IconFilledGitHub />
                View source code
              </Button>
              {figmaUrl && (
                <Button
                  overrides={{
                    stylePreset: 'buttonOutlinedSecondary',
                    minWidth: '176px',
                  }}
                  href={figmaUrl}
                >
                  <IconFilledFigma />
                  View Design
                </Button>
              )}
            </Stack>
          </Stack>
        </Hidden>
        <Hidden xl>
          <Stack
            flow={Flow.VerticalLeft}
            stackDistribution="space-between"
            spaceInline="space050"
          >
            <Stack flow={Flow.HorizontalTop} spaceInline="space060">
              <Stack flow={Flow.VerticalLeft} spaceInline="space030">
                <Headline overrides={{typographyPreset: 'utilityLabel020'}}>
                  Status
                </Headline>
                <Flag
                  size={FlagSize.Large}
                  overrides={{
                    stylePreset: MetaFlagStylePresets[status],
                    typographyPreset: 'utilityLabel020',
                  }}
                >
                  {status}
                </Flag>
              </Stack>
              <StackChild alignSelf={AlignSelfValues.Stretch}>
                <Divider vertical />
              </StackChild>
              <Stack flow={Flow.VerticalLeft} spaceInline="space050">
                <Headline overrides={{typographyPreset: 'utilityLabel020'}}>
                  Introduced
                </Headline>
                <Link
                  href="http://localhost:8081"
                  overrides={{typographyPreset: 'utilityBody030'}}
                >
                  {introduced}
                </Link>
              </Stack>
            </Stack>
            <Stack flow="horizontal-center" spaceInline="space040">
              <Button overrides={{stylePreset: 'buttonOutlinedSecondary'}}>
                <IconFilledGitHub />
                View source code
              </Button>
              {figmaUrl && (
                <Button
                  overrides={{
                    stylePreset: 'buttonOutlinedSecondary',
                    minWidth: '176px',
                  }}
                  href={figmaUrl}
                >
                  <IconFilledFigma />
                  View Design
                </Button>
              )}
            </Stack>
          </Stack>
        </Hidden>
      </Block>
      <Divider />
    </Block>
  </Cell>
);
