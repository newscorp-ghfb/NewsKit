import * as React from 'react';
import {fireEvent} from '@testing-library/react';
import {Card} from '..';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
  renderWithTheme,
} from '../../test/test-utils';
import {Image} from '../../image';
import {Stack} from '../../stack';
import {Tag} from '../../tag';
import {Button} from '../../button';
import {Block} from '../../block';
import {TextBlock} from '../../text-block';
import {CardInset} from '../card-inset';
import {createTheme} from '../../theme';
import {Headline} from '../../headline';
import {HeadlineOverrides} from '../../headline/types';
import {BaseLinkProps} from '../../link';
import {isHorizontal, isReverse} from '../utils';
import {EventTrigger} from '../../instrumentation';

const placeholder = '/placeholder-3x2.png';
const href = 'https://newskit.co.uk/';

const hrefAsObject: BaseLinkProps = {
  href: 'https://newskit.co.uk/',
  target: '_blank',
  type: 'preload',
};

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
      cardHeadlineLinkStyleMock: {
        base: {
          color: '{{colors.inkBase}}}',
          textDecoration: 'none',
        },
        hover: {
          color: '{{colors.inkContrast}}}',
          textDecoration: 'underline',
        },
      },
      imageDefault: {
        base: {
          borderRadius: '{{borders.borderRadiusDefault}}',
        },
        loading: {
          backgroundColor: '{{colors.interfaceSkeleton010}}',
          iconColor: '{{colors.inkNonEssential}}',
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

const customMediaComponentWithOverridesAndSize = () => (
  <Image
    src="/placeholder-16x9.png"
    loadingAspectRatio="16:9"
    overrides={{stylePreset: 'imageDefault', width: '200px'}}
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
    <TextBlock typographyPreset="editorialParagraph010">
      Example Card text
    </TextBlock>
  </Block>
);

const cardBodyWithHeadline = (headlineOverrides?: HeadlineOverrides) => (
  <Block spaceStack="space010">
    <Headline overrides={headlineOverrides}>Example Card Headline</Headline>
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

  test('renders correctly with Headline component in cardBody', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      children: cardBodyWithHeadline(),
    });
    expect(fragment).toMatchSnapshot();
  });

  describe('with href', () => {
    test('wraps the children of cardBody with a link provided as string, when no Headline component provided', () => {
      const fragment = renderToFragmentWithTheme(Card, {
        href,
        children: cardBody,
      });
      expect(fragment).toMatchSnapshot();
    });

    test('wraps the children of cardBody with a link provided as object, when no Headline component provided', () => {
      const fragment = renderToFragmentWithTheme(Card, {
        href: hrefAsObject,
        children: cardBody,
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders correctly with mediaInteractive set to true', () => {
      const fragment = renderToFragmentWithTheme(Card, {
        href,
        mediaInteractive: true,
        media: {
          src: placeholder,
          alt: 'Card Media',
        },
        children: cardBody,
      });
      expect(fragment).toMatchSnapshot();
    });

    test('wraps the Headline component from cardBody with a link as string', () => {
      const fragment = renderToFragmentWithTheme(Card, {
        href,
        children: cardBodyWithHeadline(),
      });
      expect(fragment).toMatchSnapshot();
    });

    test('wraps the Headline component from cardBody with a link as object', () => {
      const fragment = renderToFragmentWithTheme(Card, {
        href: hrefAsObject,
        children: cardBodyWithHeadline(),
      });
      expect(fragment).toMatchSnapshot();
    });

    test('wraps the Headline component from cardBody with a link and applies headline overrides to the link', () => {
      const fragment = renderToFragmentWithTheme(
        Card,
        {
          href,
          children: cardBodyWithHeadline({
            heading: {stylePreset: 'cardHeadlineLinkStyleMock'},
          }),
        },
        myCustomCardTheme,
      );
      expect(fragment).toMatchSnapshot();
    });

    test('renders correctly with actions', () => {
      const fragment = renderToFragmentWithTheme(Card, {
        href,
        children: cardBody,
        actions: actionsComponent,
      });
      expect(fragment).toMatchSnapshot();
    });
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
    const fragment = renderToFragmentWithTheme(
      Card,
      {
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
      },
      myCustomCardTheme,
    );
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

  test('renders actions section with overrides for padding', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      actions: actionsComponent,
      children: cardBody,
      overrides: {
        actionsContainer: {
          paddingInline: 'space040',
          paddingBlock: 'space030',
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
            paddingBlock: 'space010',
            paddingInline: 'space020',
          },
          actionsContainer: {
            stylePreset: 'cardContainerActionsMock',
            paddingBlock: 'space010',
            paddingInline: 'space020',
            minHeight: 'sizing090',
          },
        },
      },
      myCustomCardTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
  test('renders with custom html attributes and onClick event', async () => {
    const mockOnClick = jest.fn();
    const {findByLabelText, asFragment} = renderWithTheme(Card, {
      media: customMediaComponent,
      children: cardBody,
      'aria-label': 'test-label',
      onClick: mockOnClick,
    });
    const element = await findByLabelText('test-label');
    fireEvent.click(element);
    expect(mockOnClick).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders MQ layout', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      layout: {xs: 'horizontal', sm: 'vertical'},
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders card with logical props overrides', () => {
    const fragment = renderToFragmentWithTheme(
      Card,
      {
        children: cardBody,
        overrides: {
          marginBlock: '30px',
          paddingBlock: '30px',
          mediaContainer: {
            paddingInline: {
              xs: '20px',
              sm: '20px',
              md: '30px',
              lg: '30px',
            },
          },
          teaserContainer: {
            paddingInline: '30px',
          },
          actionsContainer: {
            paddingInline: '30px',
          },
        },
      },
      myCustomCardTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
});

describe('Card with horizontal layout', () => {
  test('renders correctly', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customMediaComponentWithOverridesAndSize,
      layout: 'horizontal',
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders correctly with custom horizontalRatio (3:1)', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customMediaComponentWithOverridesAndSize,
      layout: 'horizontal',
      overrides: {horizontalRatio: '3:1'},
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });
  test('falls back to default horizontalRatio if a falsy is passed', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customMediaComponentWithOverridesAndSize,
      layout: 'horizontal',
      overrides: {horizontalRatio: ''},
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('doesnt apply the flex property if none is passed', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customMediaComponentWithOverridesAndSize,
      layout: 'horizontal',
      overrides: {horizontalRatio: 'none'},
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('does not apply flex on the sections if invalid value is passed (anything that does not consist of integer:integer)', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customMediaComponentWithOverridesAndSize,
      layout: 'horizontal',
      overrides: {horizontalRatio: 'invalid:invalid'},
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with horizontal-reverse layout', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customMediaComponentWithOverridesAndSize,
      layout: 'horizontal-reverse',
      children: cardBody,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with horizontal-reverse layout and custom horizontalRatio (3:1)', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customMediaComponentWithOverridesAndSize,
      layout: 'horizontal-reverse',
      overrides: {horizontalRatio: '3:1'},
      children: cardBody,
    });
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
            paddingInline: {
              xs: 'space050',
              sm: 'space050',
              md: 'space060',
              lg: 'space060',
            },
            paddingBlock: {
              xs: 'space050',
              sm: 'space050',
              md: 'space060',
              lg: 'space060',
            },
          },
          actionsContainer: {
            stylePreset: 'cardContainerActionsMock',
            paddingInline: {
              xs: 'space050',
              sm: 'space050',
              md: 'space060',
              lg: 'space060',
            },
            paddingBlock: {
              xs: 'space040',
              sm: 'space040',
              md: 'space050',
              lg: 'space050',
            },
          },
        },
      },
      myCustomCardTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('fire tracking event', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      media: customMediaComponent,
      children: cardBody,
      href: '/page.html',
      eventOriginator: 'card-link-item',
      eventContext: {
        event: 'other event data',
      },
    };
    const {container} = renderWithImplementation(Card, props, mockFireEvent);
    const element = await container.querySelector('.nk-card-link')!;
    fireEvent.click(element);
    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'card-link-item',
      trigger: EventTrigger.Click,
      context: {
        href: '/page.html',
        event: 'other event data',
      },
    });
  });
});

describe('Card Utils', () => {
  describe('isHorizontal', () => {
    const isHorizontalAssertions = [
      {value: 'horizontal', assertion: true},
      {value: 'vertical', assertion: false},
      {value: 'horizontal-reverse', assertion: true},
      {value: 'vertical-reverse', assertion: false},
    ];

    test.each(isHorizontalAssertions)(
      'returns true when layout is horizontal',
      test => {
        const layout = test.value;
        expect(isHorizontal(layout)).toBe(test.assertion);
      },
    );
  });

  describe('isReverse', () => {
    const isReverseAssertions = [
      {value: 'horizontal', assertion: false},
      {value: 'vertical', assertion: false},
      {value: 'horizontal-reverse', assertion: true},
      {value: 'vertical-reverse', assertion: true},
    ];

    test.each(isReverseAssertions)(
      'returns true when layout is reverse',
      test => {
        const layout = test.value;
        expect(isReverse(layout)).toBe(test.assertion);
      },
    );
  });
});
