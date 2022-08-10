import {MQ} from 'newskit';

export interface ContentBaseProps {
  headline?: string | React.ReactElement;
  description?: string | React.ReactElement;
  toc?: string;
  id?: string;
  children?: React.ReactNode;
  childrenColSpan?: number;
  hideBottomSpacing?: boolean;
  overrides: {
    headline?: {
      as: 'h2' | 'h3' | 'h4';
      typographyPreset: MQ<string>;
      stylePreset: MQ<string>;
      spaceStack?: MQ<string>;
    };
    description?: {
      typographyPreset: MQ<string>;
      stylePreset: MQ<string>;
      spaceStack?: MQ<string>;
    };
    separator?: {
      spaceStack: MQ<string>;
    };
  };
  showSeparator?: boolean;
}

export type ContentPrimaryProps = Omit<ContentBaseProps, 'overrides'>;

export type ContentSecondaryProps = Omit<
  ContentBaseProps,
  'overrides' | 'toc' | 'id'
>;

export type ContentTertiaryProps = Omit<
  ContentBaseProps,
  'overrides' | 'toc' | 'id'
>;

export type ContentSectionProps = {
  children: React.ReactNode;
  sectionName?: string;
  toc?: string;
  id?: string;
};
