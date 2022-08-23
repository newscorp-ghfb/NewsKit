import React from 'react';
import {isFragment} from 'react-is';
import {TextBlock, TextBlockProps} from 'newskit';
import {childIsString} from '../../../src/utils/react-children-utilities';
import {getDisplayName} from '../../../src/utils/component';
import {OutputType, UnpackContentProps} from './types';

const defaultTextBlockProps = {
  stylePreset: 'inkBase',
  typographyPreset: 'editorialSubheadline020',
};

const fragmentToOutput = (
  fragment: React.ReactNode,
  textBlockProps: TextBlockProps,
) => {
  const output: OutputType[] = [];
  const allowedComponents = ['Link', 'InlineCode', 'Mono'];
  const allowedHTMLElements = ['br'];
  React.Children.forEach(fragment, child => {
    if (
      childIsString(child) ||
      // @ts-ignore
      allowedComponents.includes(getDisplayName(child)) ||
      // @ts-ignore
      allowedHTMLElements.includes(child && child?.type)
    ) {
      const outputLastIndex = output.length - 1;
      const prevChild = output[outputLastIndex];
      if (prevChild && prevChild.type === 'text') {
        // @ts-ignore
        output[outputLastIndex].children.push(child);
      } else {
        output.push({type: 'text', children: [child]});
      }
    } else {
      output.push({type: 'component', children: [child]});
    }
  });

  return output.map(child => {
    if (child.type === 'text') {
      return <TextBlock {...textBlockProps}>{child.children}</TextBlock>;
    }
    return child.children;
  });
};

/*

Transforms from:
<>
  Text
  <Component />
  Text
  <br />
  <Link>
</>
Into:
<>
  <TextBlock>Text<TextBlock>
  <Component />
   <TextBlock>
    Text
    <br />
    <Link>
  <TextBlock>
</>


*/

export const UnpackContent = ({
  children,
  textBlockProps = defaultTextBlockProps,
}: UnpackContentProps) => {
  const [singleChildren] = React.Children.toArray(children);

  if (typeof singleChildren === 'string') {
    return <TextBlock {...textBlockProps}>{children}</TextBlock>;
  }

  if (singleChildren && isFragment(singleChildren)) {
    return (
      <>{fragmentToOutput(singleChildren.props.children, textBlockProps)}</>
    );
  }

  // There are cases in which children is undefined and nextjs complains, so we return null;
  if (!singleChildren) {
    return null;
  }

  return <>{children}</>;
};
