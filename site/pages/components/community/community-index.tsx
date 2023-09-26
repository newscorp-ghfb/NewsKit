import React from 'react';
import {
  Block,
  Flag,
  GridLayout,
  Button,
  TextBlock,
  Divider,
  GridLayoutItem,
} from 'newskit';
import {Link} from '../../../components/link';
import {AboutPageTemplate} from '../../../templates/about-page-template';
import {LayoutProps} from '../../../components/layout';
import {ContentPrimary} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';
import {IconFilledGitHub} from '../../../components/icons';
import {IconFilledStorybook} from '../../../components/icons/icon-filled-storybook';
import {IconFilledFigma} from '../../../components/icons/icon-filled-figma';

const buttonOverrides = {
  typographyPreset: 'utilityButton010',
  stylePreset: 'buttonOutlinedSecondary',
  width: '100%',
  minWidth: '176px',
  minHeight: '44px',
};

interface CommunityListingProps {
  description: {
    componentTitle: string;
    componentDescription: string;
    teamName: string;
  };
  meta: {
    status?: string;
    githubUrl?: string;
    storybookUrl?: string;
    figmaUrl?: string;
    linkUrl?: string;
    linkText?: string;
  };
}

const CommunityIndex = (layoutProps: LayoutProps) => {
  const pageName = 'Community index';
  const pageDescription =
    'NewsKit is open source and anyone can contribute to the community index.';
  const listings: CommunityListingProps[] = [
    {
      description: {
        componentTitle: 'Table',
        componentDescription: 'Table variants used on newskit.co.uk',
        teamName: 'NewsKit',
      },
      meta: {
        status: 'internal',
        githubUrl:
          'https://github.com/newscorp-ghfb/newskit/tree/42dd2f5b7b1055583b4260d852c35d9d15b627aa/site/components/table',
        figmaUrl:
          'https://www.figma.com/file/C8IafaRcuIlO5qoAbnDm95/Community-Component---Table?node-id=0%3A1&t=jiIQCYRRDkvaO1LO-1',
        linkUrl: 'https://www.newskit.co.uk/table-variants/',
        linkText: 'Examples',
      },
    },
    {
      description: {
        componentTitle: 'Calendar',
        componentDescription:
          'Date picker library used in the News UK Account solution.',
        teamName: 'The Times Retention',
      },
      meta: {
        status: 'internal',
        githubUrl:
          'https://github.com/newscorp-ghfb/ncu-newskit-render/tree/master/packages/shared-components/src/Calendar',
        storybookUrl: '',
        figmaUrl:
          'https://www.figma.com/file/WwEBUr5beQrSzMSTDP3p9B/Community-Component---Date-picker?node-id=0%3A1&t=3AxXNELFGZzN9U6N-1',
        linkUrl:
          'https://codesandbox.io/s/calendar-component-jjsozp?file=/src/App.tsx',
        linkText: 'CodeSandbox',
      },
    },
  ];

  return (
    <AboutPageTemplate
      headTags={{
        title: pageName,
        description: pageDescription,
      }}
      featureCard={{
        title: 'Contribute',
        stylePrefix: 'contributeCard',
        description: 'Join the community and help grow NewsKit for everyone.',
        href: '/about/contribute',
      }}
      layoutProps={layoutProps}
      pageIntroduction={{
        type: 'About',
        name: pageName,
        introduction: pageDescription,
        hero: {
          illustration: 'components/community/community-index',
          illustrationProps: {viewBox: '0 0 1344 759'},
        },
        showSeparator: false,
      }}
    >
      <ComponentPageCell>
        <ContentPrimary id="community-components" showSeparator>
          {listings.map((listing, index) => (
            <Block marginBlockEnd="space090">
              <TextBlock
                stylePreset="inkBase"
                typographyPreset="utilityBody010"
              >
                {listing.description.teamName}
              </TextBlock>
              <TextBlock
                stylePreset="inkContrast"
                paddingBlock="space050"
                typographyPreset="utilityHeading030"
              >
                {listing.description.componentTitle}
              </TextBlock>
              <TextBlock
                stylePreset="inkBase"
                typographyPreset="utilityBody020"
                paddingBlockEnd="space070"
              >
                {listing.description.componentDescription}
              </TextBlock>

              <GridLayout
                justifyContent="space-between"
                alignItems="flex-start"
                autoFlow={{xs: 'row'}}
                rows={{xs: 'auto', md: 'auto'}}
                columns={{xs: '1fr', md: 'auto auto'}}
                rowGap="space050"
              >
                {listing.meta.status && (
                  <GridLayoutItem alignSelf="start">
                    <Flag size="small">{listing.meta.status}</Flag>
                  </GridLayoutItem>
                )}
                <GridLayout
                  alignItems={{md: 'flex-end'}}
                  justifyContent="center"
                  justifyItems={{xs: 'stretch', md: 'unset'}}
                  autoFlow={{md: 'column'}}
                  columnGap="space050"
                  rowGap="space050"
                  columns={{xs: '1fr', md: 'auto'}}
                >
                  {listing.meta.githubUrl && (
                    <Button
                      size="small"
                      overrides={{
                        typographyPreset: 'utilityButton010',
                        stylePreset: 'buttonOutlinedSecondary',
                        minWidth: '176px',
                        width: '100%',
                        minHeight: '44px',
                      }}
                      href={listing.meta.githubUrl}
                      target="_blank"
                    >
                      <IconFilledGitHub />
                      Code
                    </Button>
                  )}
                  {listing.meta.storybookUrl && (
                    <Button
                      size="small"
                      overrides={buttonOverrides}
                      href={listing.meta.storybookUrl}
                      target="_blank"
                    >
                      <IconFilledStorybook />
                      Storybook
                    </Button>
                  )}
                  {listing.meta.figmaUrl && (
                    <Button
                      size="small"
                      overrides={buttonOverrides}
                      href={listing.meta.figmaUrl}
                      target="_blank"
                    >
                      <IconFilledFigma />
                      Design
                    </Button>
                  )}
                  {listing.meta.linkUrl && (
                    <Button
                      size="small"
                      overrides={buttonOverrides}
                      href={listing.meta.linkUrl}
                      target="_blank"
                    >
                      {listing.meta.linkText}
                    </Button>
                  )}
                </GridLayout>
              </GridLayout>
              {index !== listings.length - 1 && (
                <Block paddingBlockStart="space070" marginBlockEnd="space070">
                  <Divider />
                </Block>
              )}
            </Block>
          ))}
        </ContentPrimary>
        <ContentPrimary
          id="how-to-contribute"
          toc="How to contirbute"
          headline="Contribute"
          description={
            <>
              Read our <Link href="how-to-contribute">guidance</Link> on how to
              submit a contribution.
            </>
          }
        >
          <></>
        </ContentPrimary>
      </ComponentPageCell>
    </AboutPageTemplate>
  );
};
export default CommunityIndex;
