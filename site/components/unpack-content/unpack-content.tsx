import React from 'react';
import {isFragment} from 'react-is';
import {TextBlock, TextBlockProps} from 'newskit';
import {childIsString} from '../../../src/utils/react-children-utilities';
import {getDisplayName} from '../../../src/utils/component';
import {OutputType, UnpackContentProps} from './types';

const allowedComponents = ['Link', 'InlineCode', 'Mono'];
const allowedHTMLElements = ['br'];

const defaultTextBlockProps = {
  stylePreset: 'inkBase',
  typographyPreset: 'editorialSubheadline020',
};

const childIsAllowedComponent = (child: React.ReactNode): boolean =>
  allowedComponents.includes(getDisplayName(child));

const childIsAllowedTag = (child: React.ReactNode): boolean =>
  child !== null &&
  typeof child === 'object' &&
  'type' in child &&
  allowedHTMLElements.includes(child.type as string);

const fragmentToOutput = (
  fragment: React.ReactNode,
  textBlockProps: TextBlockProps,
) => {
  const output: OutputType[] = [];

  React.Children.forEach(fragment, child => {
    if (
      childIsString(child) ||
      childIsAllowedComponent(child) ||
      childIsAllowedTag(child)
    ) {
      const outputLastIndex = output.length - 1;
      const prevChild = output[outputLastIndex];
      if (prevChild && prevChild.type === 'text') {
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
