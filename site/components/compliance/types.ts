export interface ComplianceElementProps {
  title: string;
  summary: string;
}
export interface ComplianceProps {
  interactive?: boolean | null;
  variations?: boolean | null;
  themes?: boolean | null;
  usage?: boolean | null;
  accessibility?: boolean | null;
  seo?: boolean | null;
  performance?: boolean | null;
  design?: boolean | null;
  props?: boolean | null;
  available?: boolean | null;
}
