import * as React from 'react';
import {
  useMediaQueryObject,
  useBreakpointKey,
  MediaQueryProvider,
} from '../index';

import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../../../test/storybook-comps';
import {MQ} from '../../../style/types';
import {styled} from '../../../style';

const StyledDiv = styled.div`
  border: 2px solid black;
  color: #fff;
  font-weight: bold;
  text-align: center;
  background: orange;
`;

const ComponentMediaQueryObject = ({mq}: {mq: MQ<string>}) => {
  const bp = useMediaQueryObject(mq);
  return <StyledDiv data-testid="use-media-query-hook">{bp}</StyledDiv>;
};

const ComponentBreakpoint = () => {
  const bp = useBreakpointKey();

  return <StyledDiv data-testid="use-breakpoint">{bp || 'unknown'}</StyledDiv>;
};

export default {
  title: 'use-media-query-hook',
  children: [
    {
      storyName: 'use-media-query-hook',
      parameters: {eyes: {include: false}},
      storyFn: () => (
        <>
          <StorybookHeading>useMediaQueryHooks </StorybookHeading>
          <MediaQueryProvider>
            <StorybookSubHeading>useMediaQueryObject</StorybookSubHeading>
            <ComponentMediaQueryObject
              mq={{
                xs: 'xs',
                sm: 'sm',
                md: 'md',
                lg: 'lg',
                xl: 'xl',
              }}
            />
            <StorybookSubHeading>useBreakpointKey</StorybookSubHeading>
            <ComponentBreakpoint />
          </MediaQueryProvider>
        </>
      ),
    },
  ],
};
