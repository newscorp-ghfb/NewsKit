export interface ContentTextProps {
  title?: string;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  description?: string;
  children?: React.ReactNode;
}
