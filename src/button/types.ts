import {EventData} from '../instrumentation/types';
import {BaseFlagOverrides, BaseFlagProps} from '../flag/types';
import {MQ} from '../utils/style';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonOverrides extends BaseFlagOverrides {
  loadingIndicator?: {
    stylePreset?: MQ<string>;
  };
}

interface CommonButtonProps extends BaseFlagProps<ButtonOverrides>, EventData {
  loading?: boolean;
}

export interface ButtonProps
  extends CommonButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ButtonLinkProps
  extends CommonButtonProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export type ButtonOrButtonLinkProps = ButtonProps | ButtonLinkProps;

export const isButtonLink = (
  props: ButtonOrButtonLinkProps,
): props is ButtonLinkProps => (props as ButtonLinkProps).href !== undefined;

export type IconButtonProps = {'aria-label'?: string} & ButtonOrButtonLinkProps;
