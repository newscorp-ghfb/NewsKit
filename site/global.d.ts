/* eslint-disable */

declare global {
  interface Window {}
}

declare module '@mdx-js/react' {
  import * as React from 'react'
  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'delete'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul'
  export type Components = {
    [key in ComponentType]?: React.ComponentType<{children: React.ReactNode}>
  }
  export interface MDXProviderProps {
    children: React.ReactNode | ((props: {themeMode: string}) => ReactNode);
    components: Components;
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}

declare module 'react-codesandboxer' {
  import {ComponentType, StyleHTMLAttributes, Component} from 'react';

  type CodeSandboxerProps = {
    children: React.ReactNode | (() => React.ReactNode);
    examplePath: string;
    example: string;
    name: string;
    dependencies: Record<string, unknown>;
    providedFiles: Record<string, unknown>;
    template: string;
  };
  export default class CodeSandboxer extends Component<CodeSandboxerProps> {}
}
