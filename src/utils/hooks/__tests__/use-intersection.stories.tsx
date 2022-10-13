import * as React from 'react';
import {useIntersection} from '../index';
import {InlineMessage} from '../../../inline-message';
import {getColorCssFromTheme, styled} from '../../style';
import {IconFilledInfo} from '../../../icons';
import {StorybookSubHeading} from '../../../test/storybook-comps';

const StyledDiv = styled.div`
  min-height: 60vh;
  width: 100%;
  display: flex;
  border: 1px dashed;
  padding: 12px;
  ${getColorCssFromTheme('borderColor', 'inkNegative')};
  ${getColorCssFromTheme('color', 'inkBase')};
`;

export const StoryUseIntersection = () => {
  const Section = ({title}: {title: string}) => {
    const [ref, isVisible] = useIntersection({rootMargin: '120px'});
    console.log(`Render Section ${title}`, {isVisible});

    return <StyledDiv ref={ref}>{title}</StyledDiv>;
  };
  return (
    <>
      <StorybookSubHeading>useIntersection</StorybookSubHeading>
      <InlineMessage
        icon={
          <IconFilledInfo
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        overrides={{
          marginBlockEnd: 'space050',
        }}
      >
        In order to view how useIntersection works, please check out console
      </InlineMessage>
      <>
        {Array.from({length: 5}).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Section key={index + 1} title={`${index + 1}`} />
        ))}
      </>
    </>
  );
};
StoryUseIntersection.storyName = 'useIntersection';
StoryUseIntersection.parameters = {
  eyes: {include: false},
};

export default {
  title: 'Utilities/useIntersection',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'useIntersection',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description:
        'useIntersection is a custom hook that detects visibility of a component on the viewport using the IntersectionObserver API natively present in the browser',
    },
  },
};
