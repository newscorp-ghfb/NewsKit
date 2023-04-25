import React, {ReactNode} from 'react';
import {Box, Stack} from '@chakra-ui/react';
import {styled} from 'newskit';
import MetricsPreview from './components/metrics-preview';
import CapSizeSelector from './components/capsize-selector';
import FontSelector from './components/font-selector';
import OutputCSS from './components/output-css';

const Heading = styled.div<{size: string}>``;

interface Props {
  children: ReactNode;
}

const ContentBlock = ({children}: Props) => (
  <Box maxWidth="1024px" margin="0 auto" paddingX={[4, 4, 6, 6]} w="100%">
    {children}
  </Box>
);

const Step = ({
  number,
  title,
  children,
}: {
  number?: number;
  title?: string;
  children: ReactNode;
}) => (
  <Stack spacing={10}>
    {title && (
      <Box>
        <ContentBlock>
          <Heading as="h2" size="2">
            <Box as="span" color="pink.400" fontSize={['1.2em', '1.5em']}>
              {number}.{' '}
            </Box>
            {title}
          </Heading>
        </ContentBlock>
      </Box>
    )}
    <Box>{children}</Box>
  </Stack>
);

const TextCropCalculator = () => (
  //
  <Box background="white" paddingY={[10, 20]}>
    <Stack spacing={[10, 10, 10, 20]}>
      <Box>
        <Step number={1} title="Choose a font">
          <ContentBlock>
            <Stack spacing={6}>
              <Box>
                <FontSelector />
              </Box>
              <Box>
                <MetricsPreview />
              </Box>
            </Stack>
          </ContentBlock>
        </Step>
      </Box>

      <Box>
        <Step number={2} title="Adjust size & spacing">
          <Stack spacing={10}>
            <Box>
              <ContentBlock>
                <CapSizeSelector />
              </ContentBlock>
            </Box>
            <Box>{/* <Preview /> */}</Box>
          </Stack>
        </Step>
      </Box>

      <Box>
        <Step number={3} title="Apply the styles">
          <ContentBlock>
            <OutputCSS />
          </ContentBlock>
        </Step>
      </Box>
    </Stack>
  </Box>
);
export default TextCropCalculator;
