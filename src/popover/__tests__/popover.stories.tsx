import * as React from 'react';
import {CSSProperties, useRef, useState} from 'react';
import {Placement} from '@floating-ui/react-dom-interactions';
import {Button, ButtonSize} from '../../button';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {styled} from '../../utils';
import {Popover} from '../popover';
import {IconFilledInfo} from '../../icons';
import {IconButton} from '../../icon-button';
import {GridLayout} from '../../grid-layout';
import {createTheme, ThemeProvider} from '../../theme';
import {PopoverProps} from '../types';

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
  return {display: 'flex', alignItems, justifyContent};
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

const myCustomTheme = createTheme({
  name: 'my-custom-theme',
  overrides: {
    stylePresets: {
      popoverCustom: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.black}}',
          boxShadow: '{{shadows.shadow050}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          backgroundColor: '{{colors.red080}}', // required for Firefox
        },
      },
      popoverPointerCustom: {
        base: {
          backgroundColor: '{{colors.red080}}',
          borderStyle: 'solid',
          borderColor:
            '{{colors.transparent}} {{colors.black}} {{colors.black}} {{colors.transparent}}',
        },
      },
      popoverPanelCustom: {
        base: {
          backgroundColor: '{{colors.red080}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          color: '{{colors.inkInverse}}',
        },
      },
    },
  },
});

const StyledPage = styled.div`
  padding-left: 50px;
`;

const StyledContainer = styled.div`
  border: 1px solid red;
  background-color: #f7f7f7;
  height: 220px;
  width: 320px;
  padding: 5px;
  overflow: scroll;
`;

const StyledScrollChild = styled.div<{visualTest?: boolean}>`
  height: 250px;
  width: 350px;
  ${({visualTest = false}) =>
    visualTest
      ? {}
      : {
          paddingTop: '180px',
          paddingLeft: '140px',
        }}
`;

const PopoverWithBtn = (props: Partial<Omit<PopoverProps, 'children'>>) => (
  <Popover
    header="Popover header"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    overrides={{maxWidth: '250px'}}
    {...props}
  >
    <IconButton
      aria-label="info-icon"
      size={ButtonSize.Small}
      overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
    >
      <IconFilledInfo />
    </IconButton>
  </Popover>
);

// Force a state to make sure useRef updates once the element renders.
function useUpdatedRef<T>(initialValue: T | null) {
  const boundaryRef = useRef<T>(initialValue);
  const [, setX] = useState(false);
  setTimeout(() => setX(true), 0);
  return boundaryRef;
}

// Make sure Popovers in stories remain in their containers to prevent the page
// getting cluttered by adding a boundary and disabling fallback behaviours.
const BoundedPopover = ({
  containerStyle,
  ...popoverProps
}: Partial<Omit<PopoverProps, 'children'>> & {
  containerStyle?: CSSProperties;
}) => {
  const boundaryRef = useUpdatedRef<HTMLDivElement>(null);
  return (
    <StyledContainer ref={boundaryRef} style={containerStyle}>
      <PopoverWithBtn
        boundary={boundaryRef.current || undefined}
        fallbackBehaviour={[]}
        {...popoverProps}
      />
    </StyledContainer>
  );
};

const PopoverPlacements = ({open}: {open?: boolean}) => (
  <StyledPage>
    <GridLayout columns={{xs: 'repeat(3, minmax(0, 1fr))'}} rowGap="20px">
      {placements.map(placement => (
        <div key={placement}>
          <StorybookSubHeading>Popover - {placement}</StorybookSubHeading>
          <BoundedPopover
            containerStyle={getPlacementStyling(placement)}
            open={open}
            placement={placement}
          />
        </div>
      ))}
    </GridLayout>
  </StyledPage>
);

const PopoverStyleOverrides = ({open}: {open?: boolean}) => (
  <ThemeProvider theme={myCustomTheme}>
    <StyledPage>
      <StorybookSubHeading>Popover - style overrides</StorybookSubHeading>
      <BoundedPopover
        containerStyle={getPlacementStyling('top')}
        open={open}
        overrides={{
          maxWidth: '250px',
          stylePreset: 'popoverCustom',
          pointer: {
            stylePreset: 'popoverPointerCustom',
          },
          panel: {
            stylePreset: 'popoverPanelCustom',
          },
        }}
      />
    </StyledPage>
  </ThemeProvider>
);

const BoundedPopoverWithOverflow = ({
  fallbackBehaviour,
  open,
}: Pick<PopoverProps, 'open' | 'fallbackBehaviour'>) => {
  const boundaryRef = useUpdatedRef<HTMLDivElement>(null);
  return (
    <>
      <StorybookSubHeading>
        Fallback behaviour:{' '}
        {typeof fallbackBehaviour === 'string'
          ? fallbackBehaviour
          : `${(fallbackBehaviour || []).join(', ')}`}
      </StorybookSubHeading>
      <StyledContainer ref={boundaryRef}>
        <StyledScrollChild visualTest={open}>
          <PopoverWithBtn
            open={open}
            fallbackBehaviour={fallbackBehaviour}
            content="Popover content"
            placement="top"
            boundary={boundaryRef.current || undefined}
          />
        </StyledScrollChild>
      </StyledContainer>
    </>
  );
};

const PopoverBehaviours = ({open}: {open?: boolean}) => (
  <StyledPage>
    <GridLayout columns={{xs: 'repeat(1, minmax(0, 1fr))'}} rowGap="20px">
      <BoundedPopoverWithOverflow open={open} fallbackBehaviour={['flip']} />
      <BoundedPopoverWithOverflow open={open} fallbackBehaviour={['shift']} />
      <BoundedPopoverWithOverflow
        open={open}
        fallbackBehaviour={['flip', 'shift']}
      />
    </GridLayout>
  </StyledPage>
);

export const StoryPopoverDefault = () => (
  <StyledPage>
    <GridLayout columns={{xs: 'repeat(1, minmax(0, 1fr))'}} rowGap="20px">
      <div>
        <StorybookSubHeading>String content</StorybookSubHeading>
        <BoundedPopover containerStyle={getPlacementStyling('top')} />
      </div>
      <div>
        <StorybookSubHeading>Interactive content</StorybookSubHeading>
        <BoundedPopover
          containerStyle={getPlacementStyling('top')}
          content={
            <Button
              size="small"
              onClick={() => {
                // eslint-disable-next-line no-alert
                alert('Button clicked');
              }}
              style={{width: '100%'}}
            >
              Click me
            </Button>
          }
        />
      </div>
      <div>
        <StorybookSubHeading>No pointer</StorybookSubHeading>
        <BoundedPopover
          containerStyle={getPlacementStyling('top')}
          hidePointer
        />
      </div>
      <GridLayout columns={{xs: 'repeat(3, minmax(0, 1fr))'}}>
        <div>
          <StorybookSubHeading>Default distance</StorybookSubHeading>
          <BoundedPopover containerStyle={getPlacementStyling('top')} />
        </div>
        <div>
          <StorybookSubHeading>Increased distance</StorybookSubHeading>
          <BoundedPopover
            containerStyle={getPlacementStyling('top')}
            overrides={{distance: 'space070', maxWidth: '250px'}}
          />
        </div>
        <div>
          <StorybookSubHeading>Decreased distance</StorybookSubHeading>
          <BoundedPopover
            containerStyle={getPlacementStyling('top')}
            overrides={{distance: 'space030', maxWidth: '250px'}}
          />
        </div>
      </GridLayout>
    </GridLayout>
  </StyledPage>
);
StoryPopoverDefault.storyName = 'popover-default';
StoryPopoverDefault.parameters = {
  eyes: {include: false},
};

export const StoryPopoverPlacements = () => <PopoverPlacements />;
StoryPopoverPlacements.storyName = 'popover-placements';
StoryPopoverPlacements.parameters = {
  eyes: {include: false},
};

export const StoryPopoverStyleOverrides = () => <PopoverStyleOverrides />;
StoryPopoverStyleOverrides.storyName = 'popover-style-overrides';
StoryPopoverStyleOverrides.parameters = {
  eyes: {include: false},
};

export const StoryPopoverBehaviours = () => <PopoverBehaviours />;
StoryPopoverBehaviours.storyName = 'popover-behaviours';
StoryPopoverBehaviours.parameters = {
  eyes: {include: false},
};

export const StoryPopoverStyleOverridesVisualTest = () => (
  <PopoverStyleOverrides open />
);
StoryPopoverStyleOverridesVisualTest.storyName =
  'popover-style-overrides-visual-test';

export const StoryPopoverPlacementsVisualTest = () => (
  <PopoverPlacements open />
);
StoryPopoverPlacementsVisualTest.storyName = 'popover-placements-visual-test';

export const StoryPopoverBehavioursVisualTest = () => (
  <PopoverBehaviours open />
);
StoryPopoverBehavioursVisualTest.storyName = 'popover-behaviours-visual-test';

export default {
  title: 'NewsKit Light/popover',
  component: () => 'None',
};
