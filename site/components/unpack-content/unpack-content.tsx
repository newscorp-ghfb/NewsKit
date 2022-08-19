import React from 'react';
import {isFragment} from 'react-is';
import {TextBlock, TextBlockProps} from 'newskit';
import {childIsString} from '../../../src/utils/react-children-utilities';
import {getDisplayName} from '../../../src/utils/component';
import {useReactKeys} from '../../../src/utils/hooks';

type UnpackContentProps = {
  children?: React.ReactNode;
  textBlockProps?: TextBlockProps;
};

const defaultTextBlockProps = {
  stylePreset: 'inkBase',
  typographyPreset: 'editorialSubheadline020',
};

type OutputType = {
  type: 'text' | 'component';
  children: React.ReactNode;
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const keys = useReactKeys(output.length);

  return output.map((child, index) => {
    if (child.type === 'text') {
      return (
        <TextBlock key={keys[index]} {...textBlockProps}>
          {child.children}
        </TextBlock>
      );
    }
    return <React.Fragment key={keys[index]}>{child.children}</React.Fragment>;
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
