import * as React from 'react';
import {useRef, useState} from 'react';
import {Placement} from '@floating-ui/react-dom-interactions';
import {Story as StoryType} from '@storybook/react';
import {Button, ButtonOverrides} from '../../button';
import {getColorCssFromTheme, styled} from '../../utils';
import {Popover as P} from '../popover';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {PopoverProps as PProps} from '../types';
import {isCypressTest, isVisualTest} from '../../test/test-utils';
import {CreateThemeArgs, StylePreset, ThemeProvider} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {defaultFocusVisible} from '../../utils/default-focus-visible';

const getPlacementStyling = (placement: Placement) => {
  const [side, alignment = 'center'] = placement.split('-');
  let alignItems;
  let justifyContent;
  if (side === 'top') {
    alignItems = 'end';
    justifyContent = alignment;
  } else if (side === 'bottom') {
    alignItems = 'start';
    justifyContent = alignment;
  } else if (side === 'left') {
    justifyContent = 'end';
    alignItems = alignment;
  } else {
    justifyContent = 'start';
    alignItems = alignment;
  }

  // the 'flex-' prefix is required on Safari for start and end values
  return Object.entries({
    alignItems,
    justifyContent,
  }).reduce(
    (prev, [k, v]) => ({
      ...prev,
      [k]: ['start', 'end'].includes(v) ? `flex-${v}` : v,
    }),
    {},
  );
};

const placements: Placement[] = [
  'top-start',
  'top',
  'top-end',
  'bottom-start',
  'bottom',
  'bottom-end',
  'right-start',
  'right',
  'right-end',
  'left-start',
  'left',
  'left-end',
];

const StyledPage = styled.div`
  width: 100%;
  max-width: 834px;
`;

const StyledContainer = styled.div<{height?: number}>`
  border: 1px solid #3358cc;
  ${({height = 399}) => ({height: `${height}px`})}
  padding: 16px;
  display: flex;
  display: -webkit-flex;
  ${getColorCssFromTheme('background', 'interface020')}
`;

const btnOverrides: ButtonOverrides = {
  stylePreset: 'customButtonOutlinedPrimary',
};

const GridPage = ({children}: {children: React.ReactNode}) => (
  <StyledPage>
    <GridLayout
      overrides={{paddingInlineStart: '0px'}}
      columns={{xs: 'repeat(2, minmax(0, 1fr))'}}
      rowGap="66px"
      columnGap="50px"
    >
      {children}
    </GridLayout>
  </StyledPage>
);

type PopoverProps = Omit<PProps, 'open'> & {height?: string};

const defaultContents: Pick<PProps, 'header' | 'content'> = {
  header: 'Popover title',
  content: 'Content',
};

const Popover = ({
  content,
  children,
  header,
  closePosition,
  overrides,
  height,
  ...rest
}: PopoverProps) => (
  <P
    open={isVisualTest || isCypressTest || undefined}
    header={header}
    closePosition={closePosition}
    aria-label="popover"
    content={
      <div
        style={{
          width: '300px',
          height: height || '217px',
        }}
      >
        {content}
      </div>
    }
    overrides={{maxWidth: '348px', ...overrides}}
    {...rest}
  >
    {children}
  </P>
);

const fullWidthContainer = (placement: Placement): boolean =>
  placement.startsWith('left') || placement.startsWith('right');

const GridLayoutPopoverItem = ({
  children,
  placement = 'top',
  ...popoverProps
}: PopoverProps) => (
  <GridLayoutItem column={fullWidthContainer(placement) ? 'span 2' : undefined}>
    <StyledContainer
      style={getPlacementStyling(placement)}
      height={fullWidthContainer(placement) ? 329 : 399}
    >
      <Popover fallbackBehaviour={[]} placement={placement} {...popoverProps}>
        {children}
      </Popover>
    </StyledContainer>
  </GridLayoutItem>
);

export const StoryPopoverDefault = () => (
  <GridPage>
    <GridLayoutPopoverItem {...defaultContents}>
      <Button overrides={btnOverrides}>Show popover</Button>
    </GridLayoutPopoverItem>
  </GridPage>
);
StoryPopoverDefault.storyName = 'Default';
StoryPopoverDefault.parameters = {
  percy: {enableJavaScript: true},
};

export const StoryPopoverPlacements = () => (
  <GridPage>
    {placements.map(placement => (
      <GridLayoutPopoverItem
        key={placement}
        placement={placement}
        {...defaultContents}
      >
        <Button overrides={btnOverrides}>Show {placement} popover</Button>
      </GridLayoutPopoverItem>
    ))}
  </GridPage>
);
StoryPopoverPlacements.storyName = 'Placements';
StoryPopoverPlacements.parameters = {
  percy: {enableJavaScript: true},
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
`;

const variations: Array<
  Partial<Omit<PopoverProps, 'children'>> & {children: string}
> = [
  {
    children: 'Show popover - close button on right',
  },
  {
    children: 'Show popover - close button on left',
    closePosition: 'left',
  },
  {
    children: 'Show popover - no close button',
    closePosition: 'none',
  },
  {
    children: 'Show popover - no header',
    closePosition: 'none',
    header: undefined,
    height: '274px',
  },
  {
    children: 'Show popover - Esc / click outside to close',
    closePosition: 'none',
    header: undefined,
    enableDismiss: true,
    height: '274px',
  },
  {
    children: 'Show popover - no pointer (default offset)',
    hidePointer: true,
  },
  {
    children: 'Show popover - no pointer (offset increased)',
    hidePointer: true,
    overrides: {offset: '35px'},
  },
  {
    children: 'Show popover - no pointer (zero offset)',
    hidePointer: true,
    overrides: {offset: '0px'},
  },
  {
    children: 'Show popover - header title overflow',
    header:
      'NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly.',
    height: '105px',
  },
  {
    children: 'Show popover - other components passed',
    content: (
      <Content>
        <div>
          NewsKit provides components, guidelines and standards to enable
          digital product teams to create high-quality, consistent products
          quickly. NewsKit is built on modular design principles and backed by
          best practice.
        </div>
        <div>
          <BtnContainer>
            <Button overrides={btnOverrides}>CTA button</Button>
            <Button>CTA button 2</Button>
          </BtnContainer>
        </div>
      </Content>
    ),
  },
  {
    children: 'Show popover - offset (default)',
  },
  {
    children: 'Show popover - offset (increased)',
    overrides: {offset: '35px'},
  },
  {
    children: 'Show popover - offset (zero)',
    overrides: {offset: '11px'},
  },
];

export const StoryPopoverVariations = () => (
  <GridPage>
    {variations.map(({placement, children, ...rest}) => (
      <GridLayoutPopoverItem
        {...defaultContents}
        key={placement}
        placement={placement}
        {...rest}
      >
        <Button overrides={btnOverrides}>{children}</Button>
      </GridLayoutPopoverItem>
    ))}
  </GridPage>
);
StoryPopoverVariations.storyName = 'Variations';
StoryPopoverVariations.parameters = {
  percy: {enableJavaScript: true},
};

// Force a state to make sure useRef updates once the element renders.
function useUpdatedRef<T>(initialValue: T | null) {
  const boundaryRef = useRef<T>(initialValue);
  const [, setX] = useState(false);
  setTimeout(() => setX(true), 0);
  return boundaryRef;
}

export const StoryPopoverBehaviours = () => {
  const flipRef = useUpdatedRef<HTMLDivElement>(null);
  const flipStyle = getPlacementStyling('bottom');
  const shiftRef = useUpdatedRef<HTMLDivElement>(null);
  const shiftStyle = getPlacementStyling('top-start');
  const flipShiftRef = useUpdatedRef<HTMLDivElement>(null);
  const flipShiftStyle = getPlacementStyling('bottom-start');
  return (
    <GridPage>
      <GridLayoutItem>
        <StyledContainer ref={flipRef} style={flipStyle}>
          <Popover
            {...defaultContents}
            boundary={flipRef.current || undefined}
            fallbackBehaviour={['flip']}
          >
            <Button overrides={btnOverrides}>Show popover top - flip</Button>
          </Popover>
        </StyledContainer>
      </GridLayoutItem>
      <GridLayoutItem>
        <StyledContainer ref={shiftRef} style={shiftStyle}>
          <Popover
            {...defaultContents}
            boundary={shiftRef.current || undefined}
            fallbackBehaviour={['shift']}
          >
            <Button overrides={btnOverrides}>Show popover top - shift</Button>
          </Popover>
        </StyledContainer>
      </GridLayoutItem>
      <GridLayoutItem>
        <StyledContainer ref={flipShiftRef} style={flipShiftStyle}>
          <Popover
            {...defaultContents}
            boundary={flipShiftRef.current || undefined}
            fallbackBehaviour={['flip', 'shift']}
          >
            <Button overrides={btnOverrides}>
              Show popover top - flip & shift
            </Button>
          </Popover>
        </StyledContainer>
      </GridLayoutItem>
    </GridPage>
  );
};
StoryPopoverBehaviours.storyName = 'Behaviours';
StoryPopoverBehaviours.parameters = {
  percy: {enableJavaScript: true},
};

export const StoryPopoverStylingOverrides = () => (
  <GridPage>
    <GridLayoutPopoverItem
      {...defaultContents}
      overrides={{
        pointer: {stylePreset: 'customPopoverPointer'},
        panel: {stylePreset: 'customPopoverPanel'},
        closeButtonContainer: {
          stylePreset: 'customPopoverCloseButtonContainer',
        },
        header: {stylePreset: 'customPopoverHeader'},
      }}
    >
      <Button overrides={btnOverrides}>Show popover</Button>
    </GridLayoutPopoverItem>
  </GridPage>
);
StoryPopoverStylingOverrides.storyName = 'Styling overrides';
StoryPopoverStylingOverrides.parameters = {
  percy: {enableJavaScript: true},
};

const popoverCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-popover-theme',
  overrides: {
    stylePresets: {
      customPopoverPointer: {
        base: {
          backgroundColor: '#FDDCC6',
        },
      },
      customPopoverPanel: {
        base: {
          color: '#804200',
          borderRadius: '{{borders.borderRadiusDefault}}',
          backgroundColor: '#FDDCC6',
        },
      },
      customPopoverCloseButtonContainer: {
        base: {
          borderColor: '#804200',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
        },
      },
      customPopoverHeader: {
        base: {
          borderColor: '#804200',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
        },
      },
      customButtonOutlinedPrimary: {
        base: {
          backgroundColor: '{{colors.interfaceBackground}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactivePrimary030}}',
          borderWidth: '{{borders.borderWidth010}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkBrand010}}',
          iconColor: '{{colors.inkBrand010}}',
        },
        hover: {
          backgroundColor: '{{colors.interactivePrimary010}}',
          borderColor: '{{colors.interactivePrimary040}}',
        },
        active: {
          backgroundColor: '{{colors.interactivePrimary020}}',
          borderColor: '{{colors.interactivePrimary050}}',
        },
        disabled: {
          borderColor: '{{colors.interactiveDisabled010}}',
          color: '{{colors.inkNonEssential}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
        loading: {
          backgroundColor: '{{colors.interactivePrimary020}}',
          borderStyle: 'none',
        },
        'focus-visible': defaultFocusVisible,
      } as StylePreset,
    },
  },
};

export default {
  title: 'Components/Popover',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          popoverCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
