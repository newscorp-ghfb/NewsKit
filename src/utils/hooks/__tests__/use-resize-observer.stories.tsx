import * as React from 'react';
import {useResizeObserver} from '../index';

import {getBorderCssFromTheme, getColorCssFromTheme, styled} from '../../style';
import {InlineMessage} from '../../../inline-message';
import {IconFilledInfo} from '../../../icons';
import {TextBlock} from '../../../text-block';
import {StorybookPage} from '../../../test/storybook-comps';

const StyledDiv = styled.div`
  padding: 10px;
  ${getColorCssFromTheme('color', 'inkBase')};
  ${getColorCssFromTheme('borderColor', 'inkBrand020')};
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
  width: 250px;
  border: 1px solid;
  resize: both;
  overflow: auto;
`;

export const StoryUseResizeObserver = () => {
  const [, setDimensions] = React.useState({top: 0, left: 0});
  const ref = React.useRef<HTMLDivElement>(null);

  // Optional callback to access the full DOMRect object if required.
  const optionalCallback = (entry: DOMRectReadOnly) =>
    setDimensions({top: entry.x, left: entry.left});

  // Access the width and the height returned from the observed element.
  const [width, height] = useResizeObserver(ref, optionalCallback);
  return (
    <StorybookPage
      columns={{xs: '1fr'}}
      rowGap={{xs: 'space050', sm: 'space080'}}
    >
      <InlineMessage
        icon={
          <IconFilledInfo
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        overrides={{marginBlockEnd: 'space050'}}
      >
        Resize the input to return the element’s size.
      </InlineMessage>
      <StyledDiv ref={ref}>
        <TextBlock typographyPreset="utilityBody030" marginBlockEnd="space030">
          Width: {width}px
        </TextBlock>
        <TextBlock typographyPreset="utilityBody030">
          Height: {height}px
        </TextBlock>
      </StyledDiv>
    </StorybookPage>
  );
};
StoryUseResizeObserver.storyName = 'useResizeObserver';
StoryUseResizeObserver.parameters = {
  eyes: {include: false},
};

export default {
  title: 'Utilities/useResizeObserver',
  component: useResizeObserver,
  parameters: {
    nkDocs: {
      title: 'Hooks',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description: `useResizeObserver is a custom hook that utilizes the resizeObserver API to return an element's size.`,
    },
  },
};
