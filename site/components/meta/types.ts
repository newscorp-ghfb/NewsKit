export enum MetaStatus {
  Supported = 'Supported',
  Deprecated = 'Deprecated',
  Beta = 'Beta',
}

export enum MetaFlagStylePresets {
  Supported = 'flagBrand',
  Deprecated = 'flagSolidNegative',
  Beta = 'flagSolidNotice',
}

export interface MetaProps {
  status: MetaStatus;
  introduced: string;
  introducedLink?: boolean;
  codeUrl: string;
  figmaUrl?: string;
  storybookId?: string;
}
