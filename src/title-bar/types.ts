export enum TitleBarBorder {
  None = 'None',
  Top = 'Top',
  Bottom = 'Bottom',
  TopAndBottom = 'TopAndBottom',
}

export enum TitleAlignment {
  Left = 'left',
  Center = 'center',
}

export type TitleContainerProps = {
  titleAlignment: TitleAlignment;
};

export type ContainerProps = {
  containerBorder?: TitleBarBorder;
  paddingLeft?: boolean;
  paddingRight?: boolean;
};

export type TitleBarProps = {
  children: string;
  actionItem?: React.ComponentType;
  headingComponent?: React.ComponentType;
  titleAlignment?: TitleAlignment;
  containerBorder?: TitleBarBorder;
  paddingLeft?: boolean;
  paddingRight?: boolean;
};
