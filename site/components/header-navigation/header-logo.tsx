import * as React from 'react';
import Link from 'next/link';
import {styled} from 'newskit';
import {Block} from '../block';
import NewskitLogo from '../newskit-logo';

const LogoSegment = styled.div`
  display: flex;
  justify-self: flex-start;
  justify-content: flex-start;
  flex: none;
  cursor: pointer;
`;

const HeaderLogo: React.FC = () => (
  <LogoSegment data-testid="logo-box">
    <Block $display="flex" $alignItems="center">
      <Link href="/" prefetch>
        <NewskitLogo $color="inkBase" $size="spacingSize120" />
      </Link>
    </Block>
  </LogoSegment>
);

export default HeaderLogo;
