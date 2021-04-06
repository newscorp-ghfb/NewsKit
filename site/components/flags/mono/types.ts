import {FlagProps, TextBlockProps} from 'newskit';

type FlagMonoProps = Omit<FlagProps, 'size'> & {
  minimal?: false;
};

type MinimalMonoProps = {
  minimal: true;
  overrides?: TextBlockProps;
};

export type MonoProps = MinimalMonoProps | FlagMonoProps;
