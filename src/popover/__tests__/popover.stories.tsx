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

// Open all Popovers by default when running in Applitools.
const isApplitoolsTest = process.env.APPLITOOLS_BATCH_ID !== undefined;

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
        },
      },
      popoverHeaderCustom: {
        base: {
          borderColor: '{{colors.black}}',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
          color: '{{colors.inkInverse}}',
        },
      },
      popoverCloseButtonContainerCustom: {
        base: {
          borderColor: '{{colors.black}}',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
        },
      },
      popoverContentCustom: {
        base: {
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
  height: 260px;
  width: 360px;
  padding: 5px;
  overflow: scroll;
`;

const StyledScrollChild = styled.div`
  height: 250px;
  width: 350px;
  ${() =>
    isApplitoolsTest
      ? {}
      : {
          paddingTop: '180px',
          paddingLeft: '140px',
        }}
`;

const DEFAULT_CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum justo id rutrum consectetur. Cras ultrices diam id dapibus viverra.';

const PopoverWithBtn = (
  props: Partial<Omit<PopoverProps, 'children' | 'open'>>,
) => (
  <Popover
    open={isApplitoolsTest || undefined}
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
}: Partial<Omit<PopoverProps, 'children' | 'open'>> & {
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

const BoundedPopoverWithOverflow = ({
  fallbackBehaviour,
}: Pick<PopoverProps, 'fallbackBehaviour'>) => {
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
        <StyledScrollChild>
          <PopoverWithBtn
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

export const StoryPopoverDefault = () => (
  <StyledPage>
    <GridLayout columns={{xs: 'repeat(1, minmax(0, 1fr))'}} rowGap="20px">
      <div>
        <StorybookSubHeading>
          Popover - with optional header & close button on right
        </StorybookSubHeading>
        <BoundedPopover />
      </div>
      <div>
        <StorybookSubHeading>
          Popover - with optional header & close button on left
        </StorybookSubHeading>
        <BoundedPopover closePosition="left" />
      </div>
      <div>
        <StorybookSubHeading>
          Popover - no optional header & close button
        </StorybookSubHeading>
        <BoundedPopover header={undefined} closePosition="none" />
      </div>
      <div>
        <StorybookSubHeading>
          Popover - click outside or press esc to close
        </StorybookSubHeading>
        <BoundedPopover header={undefined} closePosition="none" enableDismiss />
      </div>
      <div>
        <StorybookSubHeading>Popover - no pointer</StorybookSubHeading>
        <BoundedPopover hidePointer />
      </div>
      <div>
        <StorybookSubHeading>
          Popover - header title overflow
        </StorybookSubHeading>
        <BoundedPopover
          header="This is a popover header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          containerStyle={{
            ...getPlacementStyling('top'),
            height: '330px',
          }}
        />
      </div>
      <div>
        <StorybookSubHeading>
          Popover - example of other components passed to panel
        </StorybookSubHeading>
        <BoundedPopover
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
      <GridLayout columns={{xs: 'repeat(3, minmax(0, 1fr))'}}>
        <div>
          <StorybookSubHeading>
            Popover - distance (default)
          </StorybookSubHeading>
          <BoundedPopover />
        </div>
        <div>
          <StorybookSubHeading>
            Popover - distance (increased)
          </StorybookSubHeading>
          <BoundedPopover
            overrides={{distance: 'space070', maxWidth: '300px'}}
          />
        </div>
        <div>
          <StorybookSubHeading>Popover - distance (zero)</StorybookSubHeading>
          <BoundedPopover
            overrides={{distance: 'space030', maxWidth: '300px'}}
          />
        </div>
      </GridLayout>
    </GridLayout>
  </StyledPage>
);
StoryPopoverDefault.storyName = 'popover-default';

export const StoryPopoverPlacements = () => (
  <StyledPage>
    <GridLayout columns={{xs: 'repeat(3, minmax(0, 1fr))'}} rowGap="20px">
      {placements.map(placement => (
        <div key={placement}>
          <StorybookSubHeading>
            Popover - placement {placement}
          </StorybookSubHeading>
          <BoundedPopover
            containerStyle={getPlacementStyling(placement)}
            placement={placement}
          />
        </div>
      ))}
    </GridLayout>
  </StyledPage>
);
StoryPopoverPlacements.storyName = 'popover-placements';

export const StoryPopoverStyleOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StyledPage>
      <StorybookSubHeading>Popover - style overrides</StorybookSubHeading>
      <BoundedPopover
        overrides={{
          maxWidth: '300px',
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
          content: {
            stylePreset: 'popoverContentCustom',
          },
          transitionPreset: {
            extend: 'fade',
            base: {
              transitionDelay: '{{motions.motionDuration050}}',
            },
          },
        }}
      />
    </StyledPage>
  </ThemeProvider>
);
StoryPopoverStyleOverrides.storyName = 'popover-style-overrides';

export const StoryPopoverBehaviours = () => (
  <StyledPage>
    <GridLayout columns={{xs: 'repeat(1, minmax(0, 1fr))'}} rowGap="20px">
      <BoundedPopoverWithOverflow fallbackBehaviour={['flip']} />
      <BoundedPopoverWithOverflow fallbackBehaviour={['shift']} />
      <BoundedPopoverWithOverflow fallbackBehaviour={['flip', 'shift']} />
    </GridLayout>
  </StyledPage>
);
StoryPopoverBehaviours.storyName = 'popover-behaviours';

export default {
  title: 'NewsKit Light/popover',
  component: () => 'None',
};
