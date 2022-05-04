import {ComponentType} from 'react';
import {MQ} from '../utils/style/types';
import {Theme} from '../theme';
import {LogicalMargins} from '../utils/logical-properties';

export interface SvgProps extends React.SVGAttributes<SVGElement> {
  title?: string;
}

export interface NewsKitIconProps extends SvgProps {
  overrides?: {
    stylePreset?: MQ<string>;
    size?: MQ<string>;
  } & LogicalMargins;
}

export type NewsKitIcon = ComponentType<
  NewsKitIconProps & {theme?: Theme | undefined}
>;
