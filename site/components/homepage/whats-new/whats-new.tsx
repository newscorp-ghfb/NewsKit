import * as React from 'react';
import {
  Headline,
  TextBlock,
  GridLayout,
  Card,
  Flag,
  LinkStandalone,
  Block,
  GridLayoutItem,
} from 'newskit';
import {ContentPrimary} from '../../content-structure';
import {IconFilledLaunch} from '../../../../src/icons';
import {Release} from '../../../utils/release-notes/types';

interface WhatsNewProps {
  releases: Release[];
}

export const WhatsNew = ({releases}: WhatsNewProps) => {
  const [latestRelease, ...restReleases] = releases;

  return (
    <ContentPrimary headline="Latest releases" hideBottomSpacing>
      <GridLayout
        columns={{xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
        rowGap="space040"
        columnGap="space100"
      >
        <Card
          overrides={{stylePreset: 'homepageCard'}}
          key={latestRelease.tag_name}
          href={latestRelease.html_url}
        >
          <GridLayout
            justifyContent="start"
            alignItems="end"
            columns="repeat(2, auto)"
            columnGap="space040"
          >
            <GridLayoutItem>
              <Flag
                overrides={{
                  marginBlockEnd: 'space040',
                  stylePreset: 'whatsNewHomeFlag',
                }}
              >
                New
              </Flag>
            </GridLayoutItem>
            <GridLayoutItem>
              <Headline
                overrides={{
                  marginBlockEnd: 'space050',
                  typographyPreset: 'editorialHeadline020',
                  heading: {stylePreset: 'whatsNewCardLink'},
                }}
              >
                NewsKit {latestRelease.tag_name}
                <IconFilledLaunch
                  overrides={{
                    marginBlockEnd: '-4px',
                    marginInlineStart: 'space020',
                    size: 'iconSize020',
                  }}
                />
              </Headline>
            </GridLayoutItem>
          </GridLayout>

          <TextBlock
            marginBlockEnd="space040"
            typographyPreset="editorialParagraph020"
          >
            This release includes new features, bug fixes and other changes.
          </TextBlock>
        </Card>
        <Block marginBlockStart="space020">
          {restReleases.map(({html_url, tag_name}) => (
            <Block>
              <LinkStandalone
                external={false}
                overrides={{stylePreset: 'whatsNewCardLink'}}
                href={html_url}
                key={tag_name}
                target="_blank"
              >
                <Headline
                  overrides={{
                    marginBlockEnd: 'space050',
                    typographyPreset: 'editorialHeadline020',
                    heading: {stylePreset: 'whatsNewCardLink'},
                  }}
                >
                  NewsKit {tag_name}
                  <IconFilledLaunch
                    overrides={{
                      marginBlockEnd: '-6px',
                      marginInlineStart: 'space020',
                      size: 'iconSize020',
                    }}
                  />
                </Headline>
              </LinkStandalone>
            </Block>
          ))}
        </Block>
      </GridLayout>
    </ContentPrimary>
  );
};
