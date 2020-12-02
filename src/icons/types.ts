import {MQ} from '../utils/style';

export interface SvgProps extends React.SVGAttributes<SVGElement> {
  title?: string;
  overrides?: {
    stylePreset?: MQ<string>;
    size?: string;
  };
}
