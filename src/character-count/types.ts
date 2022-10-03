export type ValidInputElement = HTMLInputElement | HTMLTextAreaElement;

export interface CharacterCountProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'children'> {
  size?: 'small' | 'medium' | 'large';
  format?: (val: string) => string;
  overrides?: {};
  inputRef?: React.RefObject<ValidInputElement>;
}
