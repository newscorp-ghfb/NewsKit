import * as React from 'react';
import {
  Grid,
  Cell,
  getColorCssFromTheme,
  getSizingCssFromTheme,
  getMediaQueryFromTheme,
  styled,
  TextBlock,
  CellProps,
  Divider,
  InstrumentationProvider,
} from 'newskit';
import {Link} from './link';

const Footer = styled.footer`
  ${getColorCssFromTheme('background', 'interface020')}
  ${getSizingCssFromTheme('paddingTop', {
    xs: 'sizing070',
    md: 'sizing080',
  })};
  ${getSizingCssFromTheme('paddingBottom', 'sizing050')};
`;

const FooterMenu = styled.div`
  display: block;
  justify-content: center;
  ${getSizingCssFromTheme('marginTop', 'sizing040')};
  ${getMediaQueryFromTheme('md')} {
    display: flex;
  }
`;

const FooterLink = styled.span`
  text-align: center;
  display: block;
  ${getMediaQueryFromTheme('xs')} {
    ${getSizingCssFromTheme('marginBottom', 'sizing070')};
    :last-child {
      ${getSizingCssFromTheme('marginBottom', 'sizing000')};
    }
  }
  ${getMediaQueryFromTheme('md')} {
    ${getSizingCssFromTheme('marginRight', 'sizing080')};
    ${getSizingCssFromTheme('marginBottom', 'sizing050')};
    :last-child {
      ${getSizingCssFromTheme('marginBottom', 'sizing050')};
    }
  }
`;

const FooterCopy = styled(TextBlock)`
  text-align: center;
  ${getSizingCssFromTheme('marginTop', 'sizing050')};
  ${getSizingCssFromTheme('marginBottom', 'sizing070')};
`;

const linkOverrides = {
  stylePreset: 'linkFooter',
  typographyPreset: 'utilityButton020',
};

interface FooterProps {
  cellProps?: CellProps;
}

const year = new Date().getUTCFullYear();
const SiteFooter: React.FC<FooterProps> = ({cellProps = {xs: 12}}) => (
  <>
    <Footer>
      <Grid xsRowGutter="space060" mdRowGutter="space000">
        <Cell {...cellProps}>
          <InstrumentationProvider context={{area: 'footer navigation'}}>
            <FooterMenu>
              <FooterLink>
                <Link
                  type="standalone"
                  href="https://www.newscareers.co.uk/"
                  target="_blank"
                  external
                  overrides={linkOverrides}
                >
                  Careers
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  type="standalone"
                  href="https://medium.com/newskit-design-system"
                  target="_blank"
                  external
                  overrides={linkOverrides}
                >
                  Blog
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  type="standalone"
                  href="/"
                  overrides={linkOverrides}
                  eventContext={{value: 'Privacy policy'}}
                >
                  Privacy policy
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  type="standalone"
                  href="/help/terms-and-conditions"
                  overrides={linkOverrides}
                >
                  Terms & conditions
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  type="standalone"
                  href="/help/accessibility-statement"
                  overrides={linkOverrides}
                >
                  Accessibility
                </Link>
              </FooterLink>
            </FooterMenu>
          </InstrumentationProvider>
        </Cell>

        <Cell {...cellProps}>
          <Divider />
          <FooterCopy
            as="div"
            stylePreset="inkSubtle"
            typographyPreset="utilityMeta010"
          >
            Copyright &copy; {year} News Corp UK & Ireland Limited. All rights
            reserved. This website is published by News Corp UK & Ireland
            Limited, 1 London Bridge Street, London, SE1 9GF. Registered in
            England No 81701. VAT number GB 243 8054 69.
          </FooterCopy>
        </Cell>
      </Grid>
    </Footer>
  </>
);

export default SiteFooter;
