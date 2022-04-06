import * as React from 'react';

import {Button, Headline, IconFilledEmail, TextBlock} from '../../..';

export const ImagePlaceholder = () => (
  <img
    src="https://picsum.photos/200/200"
    alt=""
    style={{width: '100%', height: '100%'}}
  />
);

export const TitlePlaceholder = () => (
  <Headline
    kickerText="Lorem Ipsum"
    overrides={{
      typographyPreset: {
        xs: 'editorialHeadline020',
      },
    }}
  >
    Lorem Ipsum is simply dummy text
  </Headline>
);

export const TextPlaceholder = () => (
  <TextBlock typographyPreset="editorialParagraph020">
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout.
  </TextBlock>
);

export const ActionPlaceholder = () => (
  <Button
    href="#"
    size="small"
    overrides={{
      stylePreset: `buttonMinimalPrimary`,
    }}
  >
    Button
    <IconFilledEmail />
  </Button>
);

export const SharePlaceholder = () => (
  <Button
    size="small"
    href="#"
    overrides={{
      stylePreset: `buttonMinimalPositive`,
    }}
  >
    <IconFilledEmail />
    Share
  </Button>
);
