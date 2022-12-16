import * as React from 'react';
import {
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

export const WhatsNew = ({releases}: WhatsNewProps) => (
  // const [latestRelease, ...restReleases] = releases;

  <ContentPrimary headline="Latest releases" hideBottomSpacing>
    {/* <GridLayout
        columns={{xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
        rowGap="space040"
        columnGap="space100"
      >
        <Card overrides={{stylePreset: 'homepageCard'}}>
          <GridLayout
            justifyContent="start"
            alignItems="center"
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
              <LinkStandalone
                external={false}
                overrides={{
                  stylePreset: 'whatsNewCardLink',
                  typographyPreset: 'editorialHeadline020',
                  marginBlockEnd: 'space040',
                }}
                href={latestRelease.html_url}
                target="_blank"
              >
                NewsKit {latestRelease.tag_name}
                <IconFilledLaunch
                  overrides={{
                    marginInlineStart: 'space010',
                    size: 'iconSize020',
                  }}
                />
              </LinkStandalone>
            </GridLayoutItem>
          </GridLayout>

          <TextBlock
            marginBlockEnd="space040"
            typographyPreset="editorialParagraph020"
          >
            This release includes new features, bug fixes and other changes.
          </TextBlock>
        </Card>
        <Block marginBlockStart="space010">
          {restReleases.map(({html_url, tag_name}) => (
            <div>
              <LinkStandalone
                external={false}
                overrides={{
                  stylePreset: 'whatsNewCardLink',
                  typographyPreset: 'editorialHeadline020',
                  marginBlockEnd: 'space040',
                }}
                href={html_url}
                key={tag_name}
                target="_blank"
              >
                NewsKit {tag_name}
                <IconFilledLaunch
                  overrides={{
                    marginInlineStart: 'space010',
                    size: 'iconSize020',
                  }}
                />
              </LinkStandalone>
            </div>
          ))}
        </Block>
      </GridLayout> */}
  </ContentPrimary>
);
