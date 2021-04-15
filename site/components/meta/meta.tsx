import React from 'react';
import {
  Stack,
  Block,
  Divider,
  StackChild,
  AlignSelfValues,
  Flow,
  Hidden,
  Cell,
  Grid,
} from 'newskit';
import {MetaProps} from './types';
import {GitHubButton} from './github-button';
import {FigmaButton} from './figma-button';
import {Status} from './status';
import {Introduced} from './introduce';

export const Meta = ({status, introduced, codeUrl, figmaUrl}: MetaProps) => (
  <>
    <Block spaceStack={{xs: 'space080', md: 'space050'}}>
      <Hidden xs sm>
        <Stack flow={Flow.HorizontalCenter} stackDistribution="space-between">
          <Stack flow={Flow.HorizontalTop}>
            <Status status={status} />
            <StackChild alignSelf={AlignSelfValues.Stretch}>
              <Block
                spaceInline={{
                  md: 'space060',
                  lg: 'space020',
                  xl: 'space040',
                }}
              />
              <Divider vertical />
              <Block
                spaceInline={{
                  md: 'space060',
                  lg: 'space020',
                  xl: 'space040',
                }}
              />
            </StackChild>

            <Introduced introduced={introduced} />
          </Stack>
          <Stack flow="horizontal-center" spaceInline="space040">
            <StackChild alignSelf={AlignSelfValues.Stretch}>
              <GitHubButton href={codeUrl} />
            </StackChild>
            <FigmaButton href={figmaUrl} />
          </Stack>
        </Stack>
      </Hidden>
      <Hidden md lg xl>
        <Stack flow={Flow.VerticalLeft} spaceInline="space050">
          <StackChild alignSelf={AlignSelfValues.Stretch}>
            <Cell xs={6}>
              <Status status={status} />
            </Cell>
            <Cell xs={6}>
              <Stack flow={Flow.HorizontalTop}>
                <Divider vertical />
                <Block spaceInline="space060" />
                <Stack
                  flow={Flow.VerticalLeft}
                  spaceInline="space020"
                  stackDistribution="space-evenly"
                />
                <Introduced introduced={introduced} />
              </Stack>
            </Cell>
          </StackChild>
          <StackChild alignSelf={AlignSelfValues.Stretch}>
            <Grid xsMargin="space000">
              <Cell xs={12}>
                <Divider />
                <Block spaceStack="space050" />
                <GitHubButton href={codeUrl} />
              </Cell>
              <Cell xs={12}>
                <FigmaButton href={figmaUrl} />
                <Block spaceStack="space050" />
                <Divider />
              </Cell>
            </Grid>
          </StackChild>
        </Stack>
      </Hidden>
    </Block>
    <Divider />
  </>
);
