/* eslint-disable */

declare global {
  interface Window {}
}

declare module '@mdx-js/react' {
  import {ComponentType, StyleHTMLAttributes, Component} from 'react';

  type MDXProps = {
    children: React.ReactNode;
    components: {wrapper: React.ReactNode};
  };
  export class MDXProvider extends Component<MDXProps> {}
}

declare module 'react-codesandboxer' {
  import {ComponentType, StyleHTMLAttributes, Component} from 'react';

  type CodeSandboxerProps = {
    children: React.ReactNode;
    examplePath: string;
    example: string;
    name: string;
    dependencies: Record<string, unknown>;
    providedFiles: Record<string, unknown>;
    template: string;
  };
  export default class CodeSandboxer extends Component<CodeSandboxerProps> {}
}
