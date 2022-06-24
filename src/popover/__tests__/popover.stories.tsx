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
import {LinkStandalone} from '../../link';

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
      popoverHeaderCustom: {
        base: {
          borderColor: '{{colors.black}}',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
        },
      },
      popoverCloseButtonContainerCustom: {
        base: {
          borderColor: '{{colors.black}}',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
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
  height: 260px;
  width: 360px;
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

const DEFAULT_CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum justo id rutrum consectetur. Cras ultrices diam id dapibus viverra.';

const PopoverWithBtn = (props: Partial<Omit<PopoverProps, 'children'>>) => (
  <Popover
    header="Popover Title"
    content={DEFAULT_CONTENT}
    overrides={{maxWidth: '300px'}}
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
  const style = containerStyle || getPlacementStyling('top');
  return (
    <StyledContainer ref={boundaryRef} style={style}>
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
          header: {
            stylePreset: 'popoverHeaderCustom',
          },
          closeButtonContainer: {
            stylePreset: 'popoverCloseButtonContainerCustom',
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

export const StoryPopoverDefault = (open = true) => (
  <StyledPage>
    <GridLayout columns={{xs: 'repeat(1, minmax(0, 1fr))'}} rowGap="20px">
      <div>
        <StorybookSubHeading>Close button on right</StorybookSubHeading>
        <BoundedPopover open={open} />
      </div>
      <div>
        <StorybookSubHeading>Close button on left</StorybookSubHeading>
        <BoundedPopover open={open} closePosition="left" />
      </div>
      <div>
        <StorybookSubHeading>No header or close button</StorybookSubHeading>
        <BoundedPopover open={open} header={undefined} closePosition="none" />
      </div>
      <div>
        <StorybookSubHeading>Header title overflow</StorybookSubHeading>
        <BoundedPopover
          open={open}
          header="This is a popover header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          containerStyle={{
            ...getPlacementStyling('top'),
            height: '330px',
          }}
        />
      </div>
      <div>
        <StorybookSubHeading>Interactive content</StorybookSubHeading>
        <BoundedPopover
          open={open}
          containerStyle={{
            ...getPlacementStyling('top'),
            height: '330px',
          }}
          content={
            <div>
              <div>{DEFAULT_CONTENT}</div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  paddingTop: '30px',
                }}
              >
                <LinkStandalone href="/">Find out more</LinkStandalone>
                <Button style={{marginLeft: '30px'}}>Continue</Button>
              </div>
            </div>
          }
        />
      </div>
      <div>
        <StorybookSubHeading>No pointer</StorybookSubHeading>
        <BoundedPopover open={open} hidePointer />
      </div>
      <GridLayout columns={{xs: 'repeat(3, minmax(0, 1fr))'}}>
        <div>
          <StorybookSubHeading>Default distance</StorybookSubHeading>
          <BoundedPopover open={open} />
        </div>
        <div>
          <StorybookSubHeading>Increased distance</StorybookSubHeading>
          <BoundedPopover
            open={open}
            overrides={{distance: 'space070', maxWidth: '250px'}}
          />
        </div>
        <div>
          <StorybookSubHeading>Decreased distance</StorybookSubHeading>
          <BoundedPopover
            open={open}
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
