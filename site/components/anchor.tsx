import * as React from 'react';
import {styled} from 'newskit';

interface WrapperProps {
  visible: boolean;
}
const Wrapper = styled.a<WrapperProps>`
  visibility: ${({visible}) => `${visible ? 'visible' : 'hidden'}`};

  color: #000;
`;

const elementToSize = (element: React.ElementType): number => {
  switch (element) {
    case 'h1':
      return 22;
    case 'h2':
      return 18;
    case 'h3':
      return 16;
    default:
      return 14;
  }
};

type Props = {
  visible: boolean;
  slug: string;
  element: React.ElementType;
};

const Anchor: React.FC<Props> = ({visible, slug, element}) => (
  <Wrapper visible={visible} href={`#${slug}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={elementToSize(element)}
      height={elementToSize(element)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-link"
    >
      <title>Anchor icon</title>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  </Wrapper>
);

export default Anchor;
