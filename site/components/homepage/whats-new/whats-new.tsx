import * as React from 'react';
import {Headline, TextBlock, GridLayout, Card, Flag} from 'newskit';
import {ContentPrimary} from '../../content-structure';
import {IconFilledLaunch} from '../../../../src/icons';
import {Release} from '../../../utils/release-notes/types';

interface WhatsNewProps {
  releases: Release[];
}

export const WhatsNew = ({releases}: WhatsNewProps) => (
  <ContentPrimary
    headline="What’s new?"
    description="NewsKit is always evolving. Here’s the latest:"
    hideBottomSpacing
  >
    <GridLayout
      columns={{xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
      rowGap="space080"
      columnGap="space050"
    >
      {releases.map(({html_url, tag_name}) => (
        <Card
          overrides={{stylePreset: 'homepageCard'}}
          key={tag_name}
          href={html_url}
        >
          <Flag
            overrides={{
              marginBlockEnd: 'space040',
              stylePreset: 'whatsNewHomeFlag',
            }}
          >
            Release notes
          </Flag>
          <Headline
            overrides={{
              marginBlockEnd: 'space050',
              typographyPreset: 'editorialHeadline020',
              heading: {stylePreset: 'exploreCardHeadline'},
            }}
          >
            NewsKit {tag_name}
            <IconFilledLaunch
              overrides={{
                marginBlockEnd: '-4px',
                marginInlineStart: 'space020',
                size: 'iconSize020',
              }}
            />
          </Headline>

          <TextBlock
            marginBlockEnd="space040"
            typographyPreset="editorialParagraph020"
          >
            This release includes new features, bug fixes and other changes.
          </TextBlock>
        </Card>
      ))}
    </GridLayout>
  </ContentPrimary>
);
