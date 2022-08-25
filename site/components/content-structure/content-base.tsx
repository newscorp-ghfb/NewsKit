import {
  Block,
  Divider,
  GridLayout,
  GridLayoutItem,
  MQ,
  TextBlock,
} from 'newskit';
import React, {useMemo} from 'react';
import {UnpackContent} from '../unpack-content';

import {ContentBaseProps} from './types';

export enum ContentColSpan {
  FULL = 12,
  TEXT = 10,
}

const fullGridColumns = `auto / span ${ContentColSpan.FULL}`;

const textGridColumns: (cols?: number) => MQ<string> = (
  cols = ContentColSpan.TEXT,
) => ({
  xs: fullGridColumns,
  lg: `auto / span ${cols}`,
});

export const ContentBase: React.FC<ContentBaseProps> = ({
  overrides,
  headline,
  description,
  children,
  toc,
  id,
  childrenColSpan = ContentColSpan.FULL,
  hideBottomSpacing = false,
  showSeparator: showDivider,
}) => {
  const {
    headline: {spaceStack: headlineSpace = '', ...headlineOverrides} = {},
    description: {
      spaceStack: descriptionSpace = '',
      ...descriptionOverrides
    } = {},
    separator: separatorOverrides,
  } = overrides || {};

  const tocAttributes = {
    id,
    'data-toc-indexed': toc || headline,
  };
  const isPrimary = Boolean(headline && toc && id);

  const textColumns = useMemo(() => textGridColumns(), []);
  const childrenColumns = useMemo(() => textGridColumns(childrenColSpan), [
    childrenColSpan,
  ]);

  return (
    <GridLayout columns={`repeat(${ContentColSpan.FULL}, 1fr)`}>
      {headline && (
        <GridLayoutItem
          column={textColumns}
          marginBlockEnd={description || children ? headlineSpace : undefined}
        >
          <TextBlock
            {...(isPrimary ? tocAttributes : {})}
            {...headlineOverrides}
          >
            {headline}
          </TextBlock>
        </GridLayoutItem>
      )}

      {description && (
        <GridLayoutItem
          column={textColumns}
          marginBlockEnd={children ? descriptionSpace : undefined}
        >
          <UnpackContent textBlockProps={descriptionOverrides}>
            {description}
          </UnpackContent>
        </GridLayoutItem>
      )}

      {children && (
        <GridLayoutItem column={childrenColumns}>{children}</GridLayoutItem>
      )}

      {!hideBottomSpacing && (
        <GridLayoutItem column={fullGridColumns}>
          <Block {...separatorOverrides} />
        </GridLayoutItem>
      )}

      {showDivider && (
        <GridLayoutItem column={fullGridColumns}>
          <Block {...separatorOverrides}>
            <Divider />
          </Block>
        </GridLayoutItem>
      )}
    </GridLayout>
  );
};
