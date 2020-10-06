export interface FormProps {
  children: Array<React.ReactElement>;
  onSubmit: (data: Record<string, string>) => void;
  validationMode?: 'onBlur' | 'onSubmit';
  reValidationMode?: 'onBlur' | 'onSubmit';
}
