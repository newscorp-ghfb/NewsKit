export interface ThemeColor {
  name: string;
  value: string;
  group: string;
  brightness: number;
  contrastRating: string;
  contrastRatio: number;
  parentColor?: ThemeColor;
}
