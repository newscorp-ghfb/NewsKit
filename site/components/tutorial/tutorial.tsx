import React, {useEffect, useState} from 'react';

import {
  Tabs,
  Tab,
  GridLayout,
  Block,
  styled,
  IconButton,
  IconOutlinedArrowForwardIos,
  useIntersection,
  IconFilledImage,
} from 'newskit';
import {Code} from '../code';
import {ContentPrimary} from '../content-structure';

type Range = Array<Array<number>>;

export type TutorialStepProps = {
  title: string;
  children: React.ReactNode;
  ranges?: Range;
  file?: FileName;
};

type FileName = string;

export type TutorialFile = {
  name: FileName;
  content: string;
};

type TutorialProps = {
  steps: TutorialStepProps[];
  files: TutorialFile[];
};

const Content = styled(Block)`
  height: 100%;
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const ContentItem = styled.div`
  box-sizing: border-box;
  //min-height: 70vh;
  overflow: auto;
  padding: 10vh 0;
  scroll-snap-align: start;
`;

const TabContent = styled(Block)`
  height: calc(70vh - 80px);
  overflow: auto;
  scroll-behavior: smooth;
`;

const TutorialStep = ({
  title,
  children,
  file,
  ranges,
  onChange,
}: TutorialStepProps & {
  onChange: (event: Pick<TutorialStepProps, 'file' | 'ranges'>) => void;
}) => {
  const [setRef, isIntersected] = useIntersection<HTMLImageElement>({
    rootMargin: '0px',
  });

  useEffect(() => {
    if (isIntersected) {
      onChange({ranges, file});
    }
  }, [isIntersected, title, ranges, onChange, file]);

  const headline = (
    <GridLayout columns="auto 1fr" columnGap="space030">
      <IconButton onClick={() => onChange({ranges, file})} size="small">
        <IconOutlinedArrowForwardIos overrides={{size: 'iconSize010'}} />
      </IconButton>
      <span>{title}</span>
    </GridLayout>
  );

  return (
    <ContentItem id={title}>
      <div ref={setRef} />
      <ContentPrimary headline={headline}>{children}</ContentPrimary>
    </ContentItem>
  );
};

export const Tutorial = ({steps, files}: TutorialProps) => {
  const [{ranges, file: fileName}, setRangeAndFile] = useState<
    Pick<TutorialStepProps, 'file' | 'ranges'>
  >({
    ranges: [],
    file: files[0].name,
  });

  return (
    <GridLayout
      columns="1fr 50%"
      columnGap="space080"
      overrides={{height: '70vh'}}
    >
      <Content>
        {steps.map(step => (
          <TutorialStep {...step} onChange={setRangeAndFile} />
        ))}
      </Content>
      <Tabs
        size="small"
        selectedIndex={files.findIndex(f => f.name === fileName)}
      >
        {files.map(({name, content}) => (
          <Tab
            label={
              <>
                <IconFilledImage /> {name}
              </>
            }
          >
            <TabContent>
              <Code ranges={ranges}>{content}</Code>
            </TabContent>
          </Tab>
        ))}
      </Tabs>
    </GridLayout>
  );
};
