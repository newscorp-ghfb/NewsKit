import {ImageProps} from 'newskit';

export interface PageIntroductionProps {
  type?: string;
  name: string;
  introduction: React.ReactNode;
  narrationUrl?: string;
  hero?:
    | {
        illustration: string;
        illustrationProps?: object;
      }
    | ImageProps;
  showSeparator?: boolean;
}
