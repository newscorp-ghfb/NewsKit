import * as React from 'react';
import {useRef, useState} from 'react';
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
          borderColor: '{{colors.red080}}',
          boxShadow: '{{shadows.shadow050}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
          backgroundColor: '{{colors.red020}}', // require for Firefox
        },
      },
      popoverPointerCustom: {
        base: {
          backgroundColor: '{{colors.red020}}',
          borderStyle: 'solid',
          borderColor:
            '{{colors.transparent}} {{colors.red080}} {{colors.red080}} {{colors.transparent}}',
        },
      },
      popoverPanelCustom: {
        base: {
          backgroundColor: '{{colors.red020}}',
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
  height: 125px;
  width: 200px;
  padding: 5px;
`;

const StyledScrollParent = styled(StyledContainer)`
  height: 200px;
  width: 300px;
  overflow: scroll;
`;

const StyledScrollChild = styled.div<{visualTest?: boolean}>`
  height: 250px;
  width: 350px;
  ${({visualTest = false}) =>
    visualTest
      ? {}
      : {
          paddingTop: '95px',
          paddingLeft: '115px',
        }}
`;

const PopoverWithBtn = (props: Omit<PopoverProps, 'children'>) => (
  <Popover {...props}>
    <IconButton
      aria-label="info-icon"
      size={ButtonSize.Small}
      overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
    >
      <IconFilledInfo />
    </IconButton>
  </Popover>
);

const PopoverPlacements = ({open}: {open?: boolean}) => (
  <StyledPage>
    <GridLayout columns={{xs: 'repeat(3, minmax(0, 1fr))'}} rowGap="20px">
      {placements.map(placement => (
        <div key={placement}>
          <StorybookSubHeading>Popover - {placement}</StorybookSubHeading>
          <StyledContainer style={getPlacementStyling(placement)}>
            <PopoverWithBtn
              open={open}
              content="Popover content"
              placement={placement}
            />
          </StyledContainer>
        </div>
      ))}
    </GridLayout>
  </StyledPage>
);

const PopoverStyleOverrides = ({open}: {open?: boolean}) => (
  <ThemeProvider theme={myCustomTheme}>
    <StyledPage>
      <StorybookSubHeading>Popover - style overrides</StorybookSubHeading>
      <StyledContainer style={getPlacementStyling('top')}>
        <PopoverWithBtn
          open={open}
          content="Popover content"
          overrides={{
            stylePreset: 'popoverCustom',
            pointer: {
              stylePreset: 'popoverPointerCustom',
            },
            panel: {
              stylePreset: 'popoverPanelCustom',
            },
          }}
        />
      </StyledContainer>
    </StyledPage>
  </ThemeProvider>
);

const PopoverWithBoundary = ({
  fallbackBehaviour,
  open,
}: Pick<PopoverProps, 'open' | 'fallbackBehaviour'>) => {
  const boundaryRef = useRef<HTMLDivElement>(null);

  // need to force a state update because useRef does not
  const [, setX] = useState(false);
  setTimeout(() => setX(true), 0);

  return (
    <>
      <StorybookSubHeading>
        Fallback behaviour:{' '}
        {typeof fallbackBehaviour === 'string'
          ? fallbackBehaviour
          : `${(fallbackBehaviour || []).join(', ')}`}
      </StorybookSubHeading>
      <StyledScrollParent ref={boundaryRef}>
        <StyledScrollChild visualTest={open}>
          <PopoverWithBtn
            open={open}
            fallbackBehaviour={fallbackBehaviour}
            content="Popover content"
            placement="top"
            boundary={boundaryRef.current || undefined}
          />
        </StyledScrollChild>
      </StyledScrollParent>
    </>
  );
};

const PopoverBehaviours = ({open}: {open?: boolean}) => (
  <StyledPage>
    <GridLayout columns={{xs: 'repeat(1, minmax(0, 1fr))'}} rowGap="20px">
      <PopoverWithBoundary open={open} fallbackBehaviour={['flip']} />
      <PopoverWithBoundary open={open} fallbackBehaviour={['shift']} />
      <PopoverWithBoundary open={open} fallbackBehaviour={['flip', 'shift']} />
    </GridLayout>
  </StyledPage>
);

export const StoryPopoverDefault = () => (
  <StyledPage>
    <GridLayout columns={{xs: 'repeat(1, minmax(0, 1fr))'}} rowGap="20px">
      <div>
        <StorybookSubHeading>String content</StorybookSubHeading>
        <StyledContainer style={getPlacementStyling('top')}>
          <PopoverWithBtn content="Popover content" />
        </StyledContainer>
      </div>
      <div>
        <StorybookSubHeading>Interactive content</StorybookSubHeading>
        <StyledContainer style={getPlacementStyling('top')}>
          <PopoverWithBtn
            content={
              <Button
                size="small"
                onClick={() => {
                  // eslint-disable-next-line no-alert
                  alert('Button clicked');
                }}
              >
                Click me
              </Button>
            }
          />
        </StyledContainer>
      </div>
      <div>
        <StorybookSubHeading>No pointer</StorybookSubHeading>
        <StyledContainer style={getPlacementStyling('top')}>
          <PopoverWithBtn content="Popover content" hidePointer />
        </StyledContainer>
      </div>
      <GridLayout columns={{xs: 'repeat(3, minmax(0, 1fr))'}}>
        <div>
          <StorybookSubHeading>Default distance</StorybookSubHeading>
          <StyledContainer style={getPlacementStyling('top')}>
            <PopoverWithBtn content="Popover content" />
          </StyledContainer>
        </div>
        <div>
          <StorybookSubHeading>Increased distance</StorybookSubHeading>
          <StyledContainer style={getPlacementStyling('top')}>
            <PopoverWithBtn
              content="Popover content"
              overrides={{distance: 'space070'}}
            />
          </StyledContainer>
        </div>
        <div>
          <StorybookSubHeading>Decreased distance</StorybookSubHeading>
          <StyledContainer style={getPlacementStyling('top')}>
            <PopoverWithBtn
              content="Popover content"
              overrides={{distance: 'space030'}}
            />
          </StyledContainer>
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
