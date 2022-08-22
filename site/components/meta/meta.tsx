import React from 'react';
import {
  Stack,
  Block,
  Divider,
  StackChild,
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

export const Meta = ({
  status,
  introduced,
  introducedLink = true,
  codeUrl,
  figmaUrl,
}: MetaProps) => (
  <>
    <Block spaceStack={{xs: 'space080', md: 'space050'}}>
      <Hidden xs sm>
        <Stack flow={Flow.HorizontalCenter} stackDistribution="space-between">
          <Stack flow={Flow.HorizontalTop}>
            <Status status={status} />
            <StackChild alignSelf="stretch">
              <Block
                spaceInline={{
                  md: 'space060',
                }}
              />
              <Divider vertical />
              <Block
                spaceInline={{
                  md: 'space060',
                }}
              />
            </StackChild>
            <Introduced
              introduced={introduced}
              introducedLink={introducedLink}
            />
          </Stack>
          <Stack flow="horizontal-center" spaceInline="space040">
            <StackChild alignSelf="stretch">
              <GitHubButton href={codeUrl} />
            </StackChild>
            <FigmaButton href={figmaUrl} />
          </Stack>
        </Stack>
        <Block spaceStack="space050" />
        <Divider />
      </Hidden>

      <Hidden md lg xl>
        <Stack flow={Flow.VerticalLeft} spaceInline="space050">
          <StackChild alignSelf="stretch">
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
                <Introduced
                  introduced={introduced}
                  introducedLink={introducedLink}
                />
              </Stack>
            </Cell>
          </StackChild>
          <StackChild alignSelf="stretch">
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
    <Block spaceStack={{xs: 'space000', md: 'space100'}} />
  </>
);
