import {ColorKeys} from '../themes';

export interface DateLineProps {
  date: string | number;
  dateFormat?: string;
  prefix?: string;
  suffix?: string;
  color?: ColorKeys;
}
