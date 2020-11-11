import * as React from 'react';
import {Card} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Image} from '../../image';
import {Stack} from '../../stack';
import {Tag} from '../../tag';
import {Button} from '../../button';
import {Block} from '../../block';
import {TextBlock} from '../../text-block';
import {CardInset} from '../card-inset';
import {createTheme} from '../../theme';

const placeholder = '/placeholder-3x2.png';
const href = 'https://newskit.co.uk/';

const myCustomCardTheme = createTheme({
  name: 'my-custom-card-theme',
  overrides: {
    stylePresets: {
      // mocked card Containers
      cardContainerMock: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.purple020}}',
          borderWidth: '{{borders.borderWidth010}}',
        },
      },
      cardContainerMediaMock: {
        base: {
          backgroundColor: '{{colors.red020}}',
        },
      },
      cardContainerTeaserMock: {
        base: {
          backgroundColor: '{{colors.amber020}}',
        },
      },
      cardContainerActionsMock: {
        base: {
          backgroundColor: '{{colors.green020}}',
        },
      },
    },
  },
});

const customMediaComponent = () => (
  <Image src="/placeholder-16x9.png" alt="Card Media" />
);

const customMediaComponentWithOverrides = () => (
  <Image
    src="/placeholder-16x9.png"
    overrides={{stylePreset: 'imageDefault'}}
    alt="Card Media"
  />
);

const actionsComponent = () => (
  <Stack>
    <Tag>Tag</Tag>
    <Button>Button</Button>
  </Stack>
);

const cardBody = (
  <Block spaceStack="space010">
    <TextBlock overrides={{typographyPreset: 'editorialParagraph010'}}>
      Example Card text
    </TextBlock>
  </Block>
);

describe('Card', () => {
  test('renders without card items', () => {
    const fragment = renderToFragmentWithTheme(Card);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with card items', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customMediaComponent,
      children: cardBody,
      actions: actionsComponent,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders media section if the media data is provided', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: {
        src: placeholder,
        alt: 'Card Media',
      },
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('adds a href to the anchor containing the media', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      href,
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders media section with custom loadingAspectRatio if the media data is provided', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: {
        loadingAspectRatio: '7:2',
        src: placeholder,
        alt: 'Card media',
      },
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders media section with overrides', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: {
        src: placeholder,
        alt: 'Card media',
      },
      children: cardBody,
      overrides: {
        mediaContainer: {
          stylePreset: 'imageDefault',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders media section with a custom component', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customMediaComponent,
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders media section with a custom component using overrides', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customMediaComponentWithOverrides,
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders actions section with given component', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      children: cardBody,
      actions: actionsComponent,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders actions section with overrides for minHeight', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      children: cardBody,
      actions: actionsComponent,
      overrides: {
        actionsContainer: {
          minHeight: 'sizing090',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders actions section with overrides for spaceInset', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      actions: actionsComponent,
      children: cardBody,
      overrides: {
        actionsContainer: {
          spaceInset: 'spaceInsetSquish030',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders card with overrides', () => {
    const fragment = renderToFragmentWithTheme(
      Card,
      {
        children: cardBody,
        overrides: {
          stylePreset: 'cardContainerMock',
          mediaContainer: {
            stylePreset: 'cardContainerMediaMock',
            spaceInline: {
              xs: 'space050',
              sm: 'space050',
              md: 'space060',
              lg: 'space060',
            },
          },
          teaserContainer: {
            stylePreset: 'cardContainerTeaserMock',
            spaceInset: 'spaceInsetSquish010',
          },
          actionsContainer: {
            stylePreset: 'cardContainerActionsMock',
            spaceInset: 'spaceInsetSquish010',
            minHeight: 'sizing090',
          },
        },
      },
      myCustomCardTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
});

describe('CardInset', () => {
  test('renders without card items', () => {
    const fragment = renderToFragmentWithTheme(CardInset);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with card items', () => {
    const fragment = renderToFragmentWithTheme(CardInset, {
      media: customMediaComponent,
      children: cardBody,
      actions: actionsComponent,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders card with overrides', () => {
    const fragment = renderToFragmentWithTheme(
      CardInset,
      {
        children: cardBody,
        overrides: {
          stylePreset: 'cardContainerMock',
          mediaContainer: {
            stylePreset: 'cardContainerMediaMock',
            spaceInline: 'space000',
          },
          teaserContainer: {
            stylePreset: 'cardContainerTeaserMock',
            spaceInset: {
              xs: 'spaceInset050',
              sm: 'spaceInset050',
              md: 'spaceInset060',
              lg: 'spaceInset060',
            },
          },
          actionsContainer: {
            stylePreset: 'cardContainerActionsMock',
            spaceInset: {
              xs: 'spaceInsetSquish040',
              sm: 'spaceInsetSquish040',
              md: 'spaceInsetSquish050',
              lg: 'spaceInsetSquish050',
            },
          },
        },
      },
      myCustomCardTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
});
