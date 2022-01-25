import {Block, Divider, TextBlock} from 'newskit';
import React from 'react';
import {ContentBaseProps} from './types';

export const ContentBase: React.FC<ContentBaseProps> = ({
  overrides,
  headline,
  description,
  children,
  toc,
  id,
  showSeparator: showDivider,
  render,
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

  const renderHeader = () =>
    headline && (
      <>
        <TextBlock {...(isPrimary ? tocAttributes : {})} {...headlineOverrides}>
          {headline}
        </TextBlock>
        {(description || children) && <Block spaceStack={headlineSpace} />}
      </>
    );

  const renderDescription = () =>
    description && (
      <>
        <TextBlock as="p" {...descriptionOverrides}>
          {description}
        </TextBlock>
        {children && <Block spaceStack={descriptionSpace} />}
      </>
    );

  const renderBody = () => children && <>{children}</>;

  const renderSeparator = () => (
    <>
      <Block {...separatorOverrides} />
      {showDivider && (
        <Block {...separatorOverrides}>
          <Divider />
        </Block>
      )}
    </>
  );

  if (render) {
    return (
      <>
        {render({
          renderHeader,
          renderDescription,
          renderBody,
          renderSeparator,
        })}
      </>
    );
  }

  return (
    <>
      {/* <div style={{width: '60%', border: '1px solid blue'}}> */}
      {/* <Grid style={{border: '1px solid blue'}} xsMargin="space000" xsColumnGutter="space000" xsRowGutter="space000">
        <Cell
          {...{
            xs: 12,
            md: 10,
          }}
        > */}
      {/* {headline && (
        <>
          <TextBlock
            {...(isPrimary ? tocAttributes : {})}
            {...headlineOverrides}
          >
            {headline}
          </TextBlock>
          {(description || children) && <Block spaceStack={headlineSpace} />}
        </>
      )} */}

      {/* {description && (
        <>
          <TextBlock as="p" {...descriptionOverrides}>
            {description}
          </TextBlock>
          {children && <Block spaceStack={descriptionSpace} />}
        </>
      )} */}
      {/* </Cell>
      </Grid> */}
      {/* </div> */}

      {/* {children && <>{children}</>} */}

      {/* <Block {...separatorOverrides} />
      {showDivider && (
        <Block {...separatorOverrides}>
          <Divider />
        </Block>
      )} */}

      {renderHeader()}
      {renderDescription()}
      {renderBody()}
      {renderSeparator()}
    </>
  );
};
