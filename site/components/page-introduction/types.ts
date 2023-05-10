import {ImageProps} from 'newskit';

export interface PageIntroductionProps {
  nameAs?: 'h1' | 'h2';
  introductionAs?: 'h1' | 'h2' | 'h3';
  type?: string;
  name: string;
  introduction: React.ReactNode;
  hero?:
    | {
        illustration: string;
        illustrationProps?: object;
      }
    | ImageProps;
  showSeparator?: boolean;
}
