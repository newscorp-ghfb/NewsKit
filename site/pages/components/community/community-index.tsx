import React from 'react';
import {
  Block,
  Flag,
  GridLayout,
  Button,
  TextBlock,
  GridLayoutItem,
} from 'newskit';
import {Link} from '../../../components/link';

import {
  getSheets,
  PageCMSPrefixedProps,
  PageCMSRequiredProps,
} from '../../../utils/google-sheet';
import {
  getCMSPropsWithPrefix,
  parseCMSResponse,
} from '../../../utils/google-sheet/utils';
import {AboutPageTemplate} from '../../../templates/about-page-template';
import {LayoutProps} from '../../../components/layout';
import {ContentPrimary} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';
import {IconFilledGitHub} from '../../../components/icons';
import {IconFilledStorybook} from '../../../components/icons/icon-filled-storybook';
import {IconFilledFigma} from '../../../components/icons/icon-filled-figma';

enum RequiredKeys {
  intro_name = 'intro_name',
  intro_description = 'intro_description',
  intro_hero_illustration = 'intro_hero_illustration',
}

enum DynamicKeyPrefixes {
  team_name_ = 'team_name_',
  component_title_ = 'component_title_',
  component_description_ = 'component_description_',
  status_ = 'status_',
  github_url_ = 'github_url_',
  storybook_url_ = 'storybook_url_',
  figma_url_ = 'figma_url_',
  link_url_ = 'link_url_',
  link_text_ = 'link_text_',
}

type CommunityIndexContent = PageCMSRequiredProps<RequiredKeys> &
  PageCMSPrefixedProps<DynamicKeyPrefixes>;

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

const CommunityIndex = ({
  content,
  ...layoutProps
}: LayoutProps & {content: CommunityIndexContent}) => {
  const pageName = content.intro_name;
  const pageDescription = content.intro_description;

  // Every component should have a title
  const listings = getCMSPropsWithPrefix<typeof DynamicKeyPrefixes>(
    content,
    'component_title_',
  ).map(([k]) => {
    const index: number = Number(k.split('_')[k.split('_').length - 1]);
    // Get all values for the component_title with the same number
    const obj: CommunityListingProps = {
      description: {
        componentTitle: content[`component_title_${index}`],
        componentDescription: content[`component_description_${index}`],
        teamName: content[`team_name_${index}`],
      },
      meta: {
        status: content[`status_${index}`],
        githubUrl: content[`github_url_${index}`],
        storybookUrl: content[`storybook_url_${index}`],
        figmaUrl: content[`figma_url_${index}`],
        linkUrl: content[`link_url_${index}`],
        linkText: content[`link_text_${index}`],
      },
    };

    return obj;
  });
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
        type: 'Community',
        name: pageName,
        introduction: pageDescription,
        hero: {
          illustration: content.intro_hero_illustration,
          illustrationProps: {viewBox: '0 0 1344 759'},
        },
        showSeparator: false,
      }}
    >
      <ComponentPageCell>
        <ContentPrimary id="community-components" showSeparator>
          {listings.map(listing => (
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
                      overrides={{
                        typographyPreset: 'utilityButton010',
                        stylePreset: 'buttonOutlinedSecondary',
                        minWidth: '176px',
                        width: '100%',
                        minHeight: '44px',
                      }}
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
                      overrides={{
                        typographyPreset: 'utilityButton010',
                        stylePreset: 'buttonOutlinedSecondary',
                        minWidth: '176px',
                        width: '100%',
                        minHeight: '44px',
                      }}
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
                      overrides={{
                        typographyPreset: 'utilityButton010',
                        stylePreset: 'buttonOutlinedSecondary',
                        width: '100%',
                        minWidth: '176px',
                        minHeight: '44px',
                      }}
                      href={listing.meta.linkUrl}
                      target="_blank"
                    >
                      {listing.meta.linkText}
                    </Button>
                  )}
                </GridLayout>
              </GridLayout>
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

export async function getStaticProps() {
  const cmsData = await getSheets('Community');
  const content = parseCMSResponse(cmsData, {
    required: RequiredKeys,
    dynamic: DynamicKeyPrefixes,
  });
  return {props: {content}};
}
