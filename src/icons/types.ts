export interface SvgProps extends React.SVGAttributes<SVGElement> {
  title?: string;
  overrides?: {
    stylePreset?: string;
    size?: string;
  };
}
