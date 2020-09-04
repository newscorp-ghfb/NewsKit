export interface DateTimeProps {
  date: string | number;
  dateFormat?: string;
  prefix?: string;
  suffix?: string;
  overrides?: {
    stylePreset?: string;
    typographyPreset?: string;
    prefix?: {
      stylePreset?: string;
      typographyPreset?: string;
    };
    suffix?: {
      stylePreset?: string;
      typographyPreset?: string;
    };
  };
}
