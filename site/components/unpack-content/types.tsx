import {TextBlockProps} from 'newskit*';

export type OutputType = {
  type: 'text' | 'component';
  children: React.ReactNode;
};

export type UnpackContentProps = {
  children?: React.ReactNode;
  textBlockProps?: TextBlockProps;
};
