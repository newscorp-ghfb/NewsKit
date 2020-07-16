export interface DateTimeProps {
  date: string | number;
  dateFormat?: string;
  prefix?: string;
  suffix?: string;
  overrides?: {
    stylePreset?: string;
    typePreset?: string;
    prefix?: {
      stylePreset?: string;
      typePreset?: string;
    };
    suffix?: {
      stylePreset?: string;
      typePreset?: string;
    };
  };
}
