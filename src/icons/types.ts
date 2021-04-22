import {MQ} from '../utils/style/types';

export interface SvgProps extends React.SVGAttributes<SVGElement> {
  title?: string;
}

export interface NewsKitIconProps extends SvgProps {
  overrides?: {
    stylePreset?: MQ<string>;
    size?: MQ<string>;
  };
}
