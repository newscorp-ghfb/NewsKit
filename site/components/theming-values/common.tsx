import * as React from 'react';
import {styled} from 'newskit';
import {H2} from '../markdown-elements';

type Props = {
  children: string;
};

export const Header = ({children}: Props): JSX.Element => <H2>{children}</H2>;

export const ExampleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
