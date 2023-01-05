export enum MetaStatus {
  Supported = 'Supported',
  Deprecated = 'Deprecated',
  Beta = 'Beta',
}

export enum MetaFlagStylePresets {
  Supported = 'flagSupported',
  Deprecated = 'flagSolidNegative',
  Beta = 'flagBeta',
}

export interface MetaProps {
  status: MetaStatus;
  introduced: string;
  introducedLink?: boolean;
  codeUrl: string;
  figmaUrl?: string;
  storybookId?: string;
}
