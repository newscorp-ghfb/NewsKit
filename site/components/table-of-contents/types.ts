import {LinkProps} from 'next/link';

export interface ContentsNavItemProps extends LinkProps {
  itemKey: number;
  children?: React.ReactNode;
}
