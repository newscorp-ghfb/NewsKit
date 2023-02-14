/* istanbul ignore file */
import React, {useState} from 'react';
import {Flag, FlagProps} from '../flag';
import {createTheme, ThemeProvider} from '../theme';
import {Card, CardInset} from '../card';
import {Block} from '../block';
import {Headline} from '../headline';
import {TextBlock} from '../text-block';
import {Tag} from '../tag';
import {IconFilledAddCircle} from '../icons';
import {MQ} from '../utils';
import {Button, ButtonOrButtonLinkProps} from '../button';

const themeCheckerTheme = createTheme({
  name: 'themeCheckerTheme',
  overrides: {
    stylePresets: {
      primaryFlag: {
        base: {
          backgroundColor: '{{colors.interface040}}',
          color: '{{colors.inkSubtle}}',
          borderRadius: '{{borders.borderRadiusPill}}',
        },
      },
      secondaryFlag: {
        base: {
          backgroundColor: '{{colors.interface010}}',
          color: '{{colors.inkSubtle}}',
          borderRadius: '{{borders.borderRadiusPill}}',
        },
      },
    },
  },
});

export const LabelFlag: React.FC<FlagProps & {prefix?: string}> = ({
  overrides,
  children,
  prefix = 'primary',
  ...props
}) => (
  <ThemeProvider theme={themeCheckerTheme}>
    <Flag
      {...props}
      overrides={{
        typographyPreset: 'utilityLabel010',
        stylePreset: `${prefix}Flag`,
        ...overrides,
      }}
      size="small"
    >
      {children}
    </Flag>
  </ThemeProvider>
);

export const useActiveState = (
  initial = false,
): [boolean, () => void, () => void, () => void] => {
  const [isActive, setIsActive] = useState(initial);

  /* istanbul ignore next */ const open = () => setIsActive(true);
  /* istanbul ignore next */ const close = () => setIsActive(false);
  /* istanbul ignore next */ const toggle = () => (isActive ? close() : open());

  return [isActive, open, close, toggle];
};

export const returnLastLetterInCamelCase = (str: string) => {
  if (str) {
    const arr = str.replace(/([A-Z])/g, ' $1').split(' ');
    arr.shift();
    return arr[arr.length - 1];
  }
  /* istanbul ignore next */
  return '';
};

const cardTeaserHeadline = {
  xs: 'space040',
  sm: 'space040',
  md: 'space045',
  lg: 'space050',
};

const cardBody = ({inset}: {inset: boolean}) => (
  <>
    <Block spaceStack="space040">
      <Flag
        overrides={{
          paddingBlock: 'space010',
          paddingInline: 'space020',
          typographyPreset: 'utilityLabel010',
          minHeight: 'sizing000',
        }}
      >
        <IconFilledAddCircle />
        Flag
        <IconFilledAddCircle />
      </Flag>
    </Block>
    <Block spaceStack={cardTeaserHeadline}>
      <Headline kickerText="SHORT">
        Arcu risus mauris sodales penatibus sit tincidunt.
      </Headline>
    </Block>
    <Block spaceStack={inset ? 'space000' : 'editorialParagraph010'}>
      <TextBlock typographyPreset="editorialParagraph010">
        Et libero, congue at condimentum. Id lobortis urna consectetur a,
        scelerisque lorem amet, magnis fringilla.s.
      </TextBlock>
    </Block>
  </>
);

export const renderCard = (
  layout: MQ<'vertical' | 'horizontal' | 'horizontal-reverse'>,
) => (
  <Card
    layout={layout}
    media={{
      src: '/placeholder-3x2.png',
      alt: 'Card Media',
      placeholderIcon: true,
    }}
    actions={() => (
      <Tag size="small" href="/">
        News
      </Tag>
    )}
  >
    {cardBody({inset: false})}
  </Card>
);

export const renderCardInset = (
  layout: MQ<'vertical' | 'horizontal' | 'horizontal-reverse'>,
) => (
  <CardInset
    layout={layout}
    media={{
      src: '/placeholder-3x2.png',
      alt: 'Card Media',
      placeholderIcon: true,
    }}
    actions={() => (
      <Tag size="small" href="/">
        News
      </Tag>
    )}
  >
    {cardBody({inset: true})}
  </CardInset>
);

export const CTABtn = ({
  children,
  overrides,
  ...restProps
}: ButtonOrButtonLinkProps) => (
  <Button
    overrides={{stylePreset: 'buttonSolidInverse', width: '100%', ...overrides}}
    {...restProps}
  >
    {/* istanbul ignore next */ children || 'CTA Button'}
  </Button>
);
