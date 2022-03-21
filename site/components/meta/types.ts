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
  introducedLink?: string;
  codeUrl: string;
  figmaUrl?: string;
}
