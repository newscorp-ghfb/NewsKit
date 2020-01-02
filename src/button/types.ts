export interface ButtonProps {
  $shape?: ButtonShape;
  $size?: ButtonSize;
}

export enum ButtonShape {
  Square = 'square',
  Rounded = 'rounded',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
