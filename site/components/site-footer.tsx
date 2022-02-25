import * as React from 'react';
import {
  Grid,
  Cell,
  ConsentSettingsLink,
  getTypographyPresetFromTheme,
  getColorCssFromTheme,
  getSizingCssFromTheme,
  getMediaQueryFromTheme,
  styled,
  TextBlock,
  CellProps,
  Block,
  Divider,
} from 'newskit';
import {Link} from './link';

const Footer = styled.footer`
  flex-shrink: 0;

  ${getSizingCssFromTheme('paddingBottom', {
    xs: 'sizing070',
    md: 'sizing000',
    lg: 'sizing040',
  })};
  ${getColorCssFromTheme('background', 'interface020')}
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -50%;
    left: -50%;
    transform: scale(0.5);
  }

  ${getMediaQueryFromTheme('sm')} {
    &::before {
      right: 0;
      left: 0;
      transform: scale(1);
    }
  }
`;

const FooterCopy = styled(TextBlock)`
  text-align: center;
`;

const FooterMenu = styled.div`
  display: block;
  justify-content: center;
  ${getSizingCssFromTheme('paddingTop', 'sizing010')};
  ${getTypographyPresetFromTheme('utilityButton020')};
  ${getMediaQueryFromTheme('md')} {
    ${getSizingCssFromTheme('paddingBottom', 'sizing020')};
    display: flex;
  }
`;

const FooterLink = styled.span`
  text-align: center;
  display: block;
  ${getSizingCssFromTheme('marginBottom', 'sizing050')};
  ${getMediaQueryFromTheme('xs')} {
    :last-child {
      ${getSizingCssFromTheme('marginBottom', 'sizing000')};
    }
  }
  ${getMediaQueryFromTheme('md')} {
    ${getSizingCssFromTheme('marginRight', 'sizing080')};
    :last-child {
      ${getSizingCssFromTheme('marginBottom', 'sizing050')};
    }
  }
`;
interface FooterProps {
  cellProps?: CellProps;
}

const year = new Date().getUTCFullYear();
const SiteFooter: React.FC<FooterProps> = ({cellProps = {xs: 12}}) => (
  <>
    <Footer>
      <Block spaceStack={{xs: 'space080', lg: 'space090'}} />
      <Grid xsRowGutter="space060" mdRowGutter="space000">
        <Cell {...cellProps}>
          <FooterMenu>
            <FooterLink>
              <Link
                href="https://www.newscareers.co.uk/"
                target="_blank"
                external={false}
                overrides={{stylePreset: 'linkFooter'}}
              >
                Careers
              </Link>
            </FooterLink>
            <FooterLink>
              <Link
                href="https://medium.com/newskit-design-system"
                target="_blank"
                external={false}
                overrides={{stylePreset: 'linkFooter'}}
              >
                Blog
              </Link>
            </FooterLink>
            <FooterLink>
              <ConsentSettingsLink
                privacyManagerId="407619"
                overrides={{
                  stylePreset: 'linkFooter',
                  typographyPreset: 'utilityButton020',
                }}
              >
                Privacy policy
              </ConsentSettingsLink>
            </FooterLink>
            <FooterLink>
              <Link
                href="/help/terms-and-conditions"
                overrides={{stylePreset: 'linkFooter'}}
              >
                Terms & conditions
              </Link>
            </FooterLink>
          </FooterMenu>
        </Cell>

        <Cell {...cellProps}>
          <FooterCopy
            as="div"
            stylePreset="inkSubtle"
            typographyPreset={{
              xs: 'utilityMeta010',
              md: 'utilityMeta020',
            }}
          >
            <Block spaceStack="space050">
              <Divider />
            </Block>
            <Block spaceStack="space070">
              Copyright &copy; {year} News Corp UK & Ireland Limited. All rights
              reserved. This website is published by News Corp UK & Ireland
              Limited, 1 London Bridge Street, London, SE1 9GF. Registered in
              England No 81701. VAT number GB 243 8054 69.
            </Block>
          </FooterCopy>
        </Cell>
      </Grid>
    </Footer>
  </>
);

export default SiteFooter;
