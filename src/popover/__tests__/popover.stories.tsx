import * as React from 'react';
import {Placement} from '@floating-ui/react-dom-interactions';
import {useRef, useState} from 'react';
import {ButtonSize} from '../../button';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {styled} from '../../utils';
import {Popover} from '../popover';
import {IconFilledInfo} from '../../icons';
import {IconButton} from '../../icon-button';
import {FallbackBehaviourType} from '../../base-floating-element';

const getPlacementPosition = (placement: Placement) => {
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
  return {alignItems, justifyContent};
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

export default {
  title: 'NewsKit Light/popover',
  component: () => 'None',
};

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
`;

const StyledContent = styled.div`
  background-color: #f4f4f4;
  padding: 10px;
  color: #777777;
`;

const StyledContainer = styled.div<{placement: Placement}>`
  display: flex;
  height: 130px;
  width: 200px;
  ${({placement}) => getPlacementPosition(placement)}
`;

export const StoryPopoverOptions = () => (
  <StyledPage>
    {placements.map(placement => (
      <div>
        <StorybookSubHeading>Popover - {placement}</StorybookSubHeading>
        <StyledContainer placement={placement}>
          <Popover
            defaultOpen
            content={<StyledContent>PLACEHOLDER</StyledContent>}
            placement={placement}
          >
            <IconButton
              size={ButtonSize.Small}
              overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
            >
              <IconFilledInfo />
            </IconButton>
          </Popover>
        </StyledContainer>
      </div>
    ))}
  </StyledPage>
);
StoryPopoverOptions.storyName = 'popover-options';

const CONTAINER_HEIGHT = 200;
const CONTAINER_WIDTH = 300;

const StyledScrollParent = styled.div`
  ${{
    maxHeight: `${CONTAINER_HEIGHT}px`,
    maxWidth: `${CONTAINER_WIDTH}px`,
  }}
  border: 1px solid red;
  overflow: scroll;
`;

const StyledScrollChild = styled.div`
  ${{
    height: `${CONTAINER_HEIGHT + 50}px`,
    width: `${CONTAINER_WIDTH + 50}px`,
    paddingTop: `${CONTAINER_HEIGHT - 50}px`,
    paddingLeft: `${CONTAINER_WIDTH - 100}px`,
  }}
  background-color: #F7F7F7;
`;

const PopoverWithBoundary = ({
  fallbackBehaviour,
}: {
  fallbackBehaviour: FallbackBehaviourType[];
}) => {
  const boundaryRef = useRef<HTMLDivElement>(null);

  // need to force a state update because useRef does not?
  const [, setX] = useState(false);
  setTimeout(() => setX(true), 0);

  return (
    <>
      <StorybookSubHeading>
        Fallback behaviour: {`${fallbackBehaviour.join(', ')}`}
      </StorybookSubHeading>
      <StyledScrollParent ref={boundaryRef}>
        <StyledScrollChild>
          <Popover
            defaultOpen
            fallbackBehaviour={fallbackBehaviour}
            content={<StyledContent>PLACEHOLDER</StyledContent>}
            placement="top"
            boundary={boundaryRef.current || undefined}
          >
            <IconButton
              size={ButtonSize.Small}
              overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
            >
              <IconFilledInfo />
            </IconButton>
          </Popover>
        </StyledScrollChild>
      </StyledScrollParent>
    </>
  );
};

export const StoryPopoverBehaviours = () => (
  <>
    <PopoverWithBoundary fallbackBehaviour={['flip']} />
    <PopoverWithBoundary fallbackBehaviour={['shift']} />
    <PopoverWithBoundary fallbackBehaviour={['flip', 'shift']} />
  </>
);
StoryPopoverBehaviours.storyName = 'popover-behaviours';
