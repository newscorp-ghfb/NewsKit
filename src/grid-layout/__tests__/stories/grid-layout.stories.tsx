import * as React from 'react';
import {Story as StoryType} from '@storybook/react/dist/ts3.9/client/preview/types-6-0';
import {Card, CardActions, CardContent, CardLink, CardMedia} from './grid-card';
import {Headline, HeadlineProps} from '../../../headline';
import {Paragraph, ParagraphProps} from '../../../typography';
import {styled} from '../../../utils';
import {Tag} from '../../../tag';
import {Block} from '../../../block';
import {LinkStandalone} from '../../../link';
import {CreateThemeArgs, ThemeProvider} from '../../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../../test/theme-select-object';
import {Flag} from '../../../flag';
import {Button} from '../../../button';

const P = ({overrides, ...props}: Omit<ParagraphProps, 'children'>) => (
  <Paragraph
    overrides={{typographyPreset: 'editorialParagraph020', ...overrides}}
    {...props}
  >
    Et libero, congue at condimentum. Id lobortis urna consectetur a,
    scelerisque lorem amet, magnis fringilla.
  </Paragraph>
);

const H = ({overrides, ...props}: Omit<HeadlineProps, 'children'>) => (
  <Headline
    overrides={{typographyPreset: 'editorialHeadline030', ...overrides}}
    {...props}
  >
    Arcu risus mauris sodales penatibus sit tincidunt.
  </Headline>
);

const customThemeObject: CreateThemeArgs = {
  name: 'card-custom-theme',
  overrides: {
    stylePresets: {
      headlineLink: {
        base: {
          color: '{{colors.interactivePrimary030}}',
        },
      },
    },
  },
};

export const StoryCardBasic = () => (
  <>
    <Card
      overrides={{maxWidth: '372px', stylePreset: 'cardComposable'}}
      areas={`
        media
        content
        actions
      `}
    >
      <CardContent overrides={{paddingBlock: 'space040'}}>
        <H />
        <Block marginBlock="space020">
          <P />
        </Block>
      </CardContent>
      <CardMedia src="/placeholder-3x2.png" />
    </Card>
  </>
);
StoryCardBasic.storyName = 'basic';

const Container = styled.div`
  display: grid;
  gap: 2rem;
`;

const SplitCardContainer = styled.div<{maxWidth: string}>`
  display: flex;
  ${({maxWidth}) => ({'max-width': maxWidth})}
`;

const SplitCardBar = styled.div<{width: string; background: string}>`
  ${({width, background}) => ({width, background})}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SplitBars = ({
  columns,
  maxWidth,
}: {
  columns: string;
  maxWidth: string;
}) => {
  const [first, second] = columns.split(' ');
  return (
    <SplitCardContainer maxWidth={maxWidth}>
      <SplitCardBar width={first} background="#FEECEC">
        <Paragraph
          overrides={{
            typographyPreset: 'editorialParagraph020',
            paddingBlock: 'space020',
          }}
        >
          {first}
        </Paragraph>
      </SplitCardBar>
      <SplitCardBar width={second} background="#D5E0FC">
        <Paragraph
          overrides={{
            typographyPreset: 'editorialParagraph020',
            paddingBlock: 'space020',
          }}
        >
          {second}
        </Paragraph>
      </SplitCardBar>
    </SplitCardContainer>
  );
};

const SplitCard = ({columns}: {columns: string}) => {
  const maxWidth = '600px';
  return (
    <div>
      <SplitBars columns={columns} maxWidth={maxWidth} />
      <Card
        overrides={{
          maxWidth,
          marginBlockStart: 'space020',
          stylePreset: 'cardComposable',
        }}
        columns={columns}
        areas={`
          media content
          media actions
        `}
      >
        <CardContent overrides={{paddingInline: 'space040'}}>
          <H />
          <Block marginBlock="space020">
            <P />
          </Block>
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
      </Card>
    </div>
  );
};

export const StoryCustomContainerRatio = () => (
  <Container>
    <SplitCard columns="50% 50%" />
    <SplitCard columns="40% 60%" />
    <SplitCard columns="60% 40%" />
  </Container>
);
StoryCustomContainerRatio.storyName = 'custom-container-ratio';

export const StoryCardAsALink = () => (
  <>
    <Card
      overrides={{maxWidth: '250px', stylePreset: 'cardComposableLink'}}
      areas={`
        media
        content
        actions
      `}
    >
      <CardContent overrides={{paddingBlock: 'space040'}}>
        <CardLink href={window.location.href} expand>
          <H overrides={{heading: {stylePreset: 'headlineLink'}}} />
        </CardLink>
        <P overrides={{marginBlockStart: 'space020'}} />
      </CardContent>
      <CardMedia src="/placeholder-3x2.png" />
      <CardActions marginBlock="space040">
        <Tag href="/news">Tag</Tag>
      </CardActions>
    </Card>
  </>
);
StoryCardAsALink.storyName = 'as-a-link';

export const StoryCardWithLinkInActionContainer = () => (
  <>
    <Card
      overrides={{maxWidth: '250px', stylePreset: 'cardComposable'}}
      areas={`
        media
        content
        actions
      `}
    >
      <CardContent overrides={{paddingBlock: 'space040'}}>
        <div>
          <Flag>Flag</Flag>
        </div>
        <H overrides={{marginBlockStart: 'space020'}} />
        <P overrides={{marginBlockStart: 'space020'}} />
      </CardContent>
      <CardMedia src="/placeholder-3x2.png" />
      <CardActions marginBlock="space040">
        <LinkStandalone href={window.location.href}>
          Standalone Link
        </LinkStandalone>
      </CardActions>
    </Card>
  </>
);
StoryCardWithLinkInActionContainer.storyName = 'with-link-in-action-container';

export const StoryCardWithButtonInActionContainer = () => (
  <>
    <Card
      overrides={{maxWidth: '250px', stylePreset: 'cardComposable'}}
      areas={`
        media
        content
        actions
      `}
    >
      <CardContent overrides={{paddingBlock: 'space040'}}>
        <div>
          <Flag>Flag</Flag>
        </div>
        <H overrides={{marginBlockStart: 'space020'}} />
        <P overrides={{marginBlockStart: 'space020'}} />
      </CardContent>
      <CardMedia src="/placeholder-3x2.png" />
      <CardActions marginBlock="space040">
        <Button>Button</Button>
      </CardActions>
    </Card>
  </>
);
StoryCardWithButtonInActionContainer.storyName =
  'with-button-in-action-container';

export default {
  title: 'Components/composable-card',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          customThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
