export type ValidInputElement = HTMLInputElement | HTMLTextAreaElement;

export type Format = (val: {
  currentLength: number;
  minLength?: number;
  maxLength?: number;
}) => string;

export interface CharacterCountProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'children'> {
  size?: 'small' | 'medium' | 'large';
  format?: Format;
  overrides?: {};
  inputRef: React.RefObject<ValidInputElement>;
}
