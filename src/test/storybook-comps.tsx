import React from 'react';
import {sanitize} from 'isomorphic-dompurify';
import {
  DocsStoryProps,
  DocsContextProps,
  Description,
  Anchor,
  Canvas,
  Story,
} from '@storybook/addon-docs';
import {GridLayout} from '../grid-layout';
import {TextBlock} from '../text-block';
import {Block} from '../block';
import {MQ, styled, getColorCssFromTheme} from '../utils/style';
import {get} from '../utils/get';
import {LinkStandalone} from '../link';
import {TitleBar} from '../title-bar';
import {Divider} from '../divider';
import {GridLayoutProps} from '../grid-layout/types';

interface StoriesProps {
  title?: JSX.Element | string;
  includePrimary?: boolean;
  context: DocsContextProps;
}

interface Props {
  children: React.ReactNode;
  stylePreset?: MQ<string>;
}

export const StorybookHeading: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="h1"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="utilitySubheading020"
    paddingBlock="space030"
  >
    {children}
  </TextBlock>
);

export const StorybookSubHeading: React.FC<Props> = ({
  children,
  stylePreset,
}) => (
  <TextBlock
    as="h2"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="utilityBody030"
    paddingBlock="space030"
  >
    {children}
  </TextBlock>
);

export const StorybookH3: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="h3"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="utilityBody030"
    paddingBlock="space020"
  >
    {children}
  </TextBlock>
);

export const StorybookH4: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="h3"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="utilityBody030"
    paddingBlock="space020"
  >
    {children}
  </TextBlock>
);

export const StorybookSpan: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    as="span"
    stylePreset={stylePreset || 'inkContrast'}
    typographyPreset="editorialLabel010"
  >
    {children}
  </TextBlock>
);

export const StorybookParah: React.FC<Props> = ({children, stylePreset}) => (
  <TextBlock
    stylePreset={stylePreset || 'inkContrast'}
    paddingBlockEnd="space020"
    typographyPreset="editorialParagraph010"
  >
    {children}
  </TextBlock>
);

export const StorybookLabel = styled.label`
  ${getColorCssFromTheme('color', 'inkBase')}
`;

export const StorybookPage = ({children, ...rest}: GridLayoutProps) => (
  <GridLayout
    rowGap="space080"
    columnGap="space080"
    columns={{
      xs: 'repeat(auto-fill, 1fr)',
      sm: 'repeat(auto-fill, minmax(300px, 1fr))',
    }}
    alignItems="start"
    overrides={{
      marginBlock: {xs: 'space030', sm: 'space050'},
      marginInline: {xs: 'space020', sm: 'space040'},
    }}
    {...rest}
  >
    {children}
  </GridLayout>
);

type StorybookCaseProps = {
  title?: string;
  inverse?: boolean;
  children?: React.ReactNode;
};

export const StorybookCase = ({
  title,
  inverse,
  children,
}: StorybookCaseProps) => (
  <GridLayout rowGap="space045">
    {title && (
      <TextBlock
        typographyPreset="utilityBody020"
        stylePreset={inverse ? 'inkInverse' : 'inkBase'}
      >
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </TextBlock>
    )}
    <Block>{children}</Block>
  </GridLayout>
);

export const StoryDocsHeader = ({context}: {context: DocsContextProps}) => {
  const autoTitle = get(context, 'title').split('/').at(-1);
  const title = get(context, 'parameters.nkDocs.title') || autoTitle;
  const description = get(context, 'parameters.nkDocs.description');
  const url = get(context, 'parameters.nkDocs.url');
  const link = () =>
    url ? (
      <LinkStandalone href={url} target="_blank">
        Documentation
      </LinkStandalone>
    ) : null;

  return (
    <GridLayout rowGap="space040" overrides={{marginBlockEnd: 'space060'}}>
      <TitleBar
        headingAs="h1"
        actionItem={link}
        overrides={{
          paddingBlock: 'space000',
          paddingInline: 'space000',
          heading: {
            typographyPreset: 'utilitySubheading050',
            stylePreset: 'inkBase',
          },
        }}
      >
        {title}
      </TitleBar>
      {description && (
        <TextBlock
          marginBlock="space020"
          typographyPreset="utilityBody030"
          stylePreset="inkBase"
        >
          <span dangerouslySetInnerHTML={{__html: sanitize(description)}} />
        </TextBlock>
      )}
      <Divider />
    </GridLayout>
  );
};

const StyledCanvas = styled(Canvas)`
  & > div > div {
    padding: 0;
  }
`;

export const DocsStory = ({
  id,
  name,
  expanded = true,
  withToolbar = false,
  parameters = {},
}: DocsStoryProps) => {
  let description;
  const {docs} = parameters;
  if (expanded && docs) {
    description = docs.description?.story;
    if (!description) {
      description = docs.storyDescription;
    }
  }

  const subheading = expanded && name;

  return (
    // Have to ignore because the library typings are missing `children` prop.
    // @ts-ignore
    <Anchor storyId={id!}>
      {subheading && (
        <TextBlock
          typographyPreset="utilitySubheading020"
          stylePreset="inkBase"
          as="h2"
        >
          {subheading}
        </TextBlock>
      )}
      {description && <Description markdown={description} />}
      {/* Have to ignore because the library typings are missing `children` prop. */}
      {/* @ts-ignore */}
      <StyledCanvas withToolbar={withToolbar}>
        <Story id={id} parameters={parameters} />
      </StyledCanvas>
    </Anchor>
  );
};

export const Stories = ({
  context,
  title,
  includePrimary = false,
}: StoriesProps) => {
  const {componentStories} = context;
  let stories: DocsStoryProps[] = componentStories().filter(
    story => !story.parameters?.docs?.disable,
  );
  if (!includePrimary) stories = stories.slice(1);
  if (!stories || stories.length === 0) return null;

  return (
    <>
      <TextBlock
        typographyPreset="utilitySubheading020"
        marginBlockEnd="space050"
        stylePreset="inkBase"
        as="h2"
      >
        {title}
      </TextBlock>
      {stories.map(
        story => story && <DocsStory key={story.id} {...story} expanded />,
      )}
    </>
  );
};
