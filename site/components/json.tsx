import * as React from 'react';
import {Code} from './code';

interface Props {
  src: string;
}

const JSONViewer: React.FC<Props> = ({src}) => (
  <Code>{JSON.stringify(src, null, 2)}</Code>
);

export default JSONViewer;
