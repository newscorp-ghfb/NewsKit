import * as React from 'react';
import {Flag} from '../../../flag';
import {GridLayout} from '../../grid-layout';
import {
  ActionPlaceholder,
  ImagePlaceholder,
  SharePlaceholder,
  TextPlaceholder,
  TitlePlaceholder,
} from './placeholders';

const xs = `
  content image
  action share

`;

const md = `
  image image
  content content
  action share
`;

// Card examples
export const ExampleCard = () => (
  <GridLayout areas={{xs, md}} overrides={{maxWidth: '400px'}}>
    {({Image, Content, Action, Share}) => (
      <>
        <Image>
          <ImagePlaceholder />
        </Image>
        <Content>
          <TitlePlaceholder />
          <TextPlaceholder />
        </Content>
        <Action>
          <ActionPlaceholder />
        </Action>
        <Share justifySelf="end">
          <SharePlaceholder />
        </Share>
        <Image alignSelf="end">
          <Flag>Flag</Flag>
        </Image>
      </>
    )}
  </GridLayout>
);
