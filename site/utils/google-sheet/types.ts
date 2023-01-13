export type PageCMSRequiredProps<T extends string> = {
  [key in T]: string;
};

export type PageCMSOptionalProps<T extends string> = Partial<
  {
    [key in T]: string;
  }
>;

export type PageCMSPrefixedProps<T extends string> = {
  [key in `${T}${number}`]: string;
};

export interface CMSProps {
  [key: string]: string;
}

export type CMSData = string[][];

export type CMSResponse = CMSData | null | undefined;
