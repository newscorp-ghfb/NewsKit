import * as React from 'react';
import {
  Grid,
  Cell,
  Hidden,
  ConsentSettingsLink,
  IconFilledGitHub,
  getTypographyPresetFromTheme,
  getColorCssFromTheme,
  getSizingCssFromTheme,
  getMediaQueryFromTheme,
  styled,
  Link as NewsKitLink,
  TextBlock,
} from 'newskit';
import {Link} from './link';

const Footer = styled.footer`
  flex-shrink: 0;
  ${getSizingCssFromTheme('paddingTop', {
    xs: 'sizing070',
    md: 'sizing080',
    lg: 'sizing090',
  })};
  ${getSizingCssFromTheme('paddingBottom', {
    xs: 'sizing070',
    md: 'sizing080',
    lg: 'sizing090',
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
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  ${getMediaQueryFromTheme('md')} {
    text-align: right;
  }
`;

const FooterMenu = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  ${getSizingCssFromTheme('paddingTop', {
    md: 'sizing010',
  })};
`;

const FooterLink = styled.span`
  flex-basis: 50%;
  text-align: center;
  ${getTypographyPresetFromTheme('utilityButton020')};
  ${getMediaQueryFromTheme('md')} {
    flex-basis: auto;
  }
  ${getSizingCssFromTheme('paddingLeft', {
    md: 'sizing050',
    lg: 'sizing080',
  })};
`;

const year = new Date().getUTCFullYear();

const SiteFooter: React.FC = () => (
  <Footer>
    <Grid xsRowGutter="space070">
      <Cell xs={10} xsOffset={1} md={5} mdOffset={0}>
        <FooterMenu>
          <Hidden xs sm md lg xl>
            <FooterLink>
              <Link href="/cookies">Cookies</Link>
            </FooterLink>
            <FooterLink>
              <Link href="/terms">Terms</Link>
            </FooterLink>
          </Hidden>
          <FooterLink>
            <ConsentSettingsLink
              privacyManagerId="407619"
              overrides={{
                stylePreset: 'linkFooter',
                typographyPreset: 'utilityButton020',
              }}
            >
              Privacy
            </ConsentSettingsLink>
          </FooterLink>
          <FooterLink>
            <NewsKitLink
              href="https://medium.com/newskit-design-system"
              target="_blank"
              external={false}
              overrides={{stylePreset: 'linkFooter'}}
            >
              Blog
            </NewsKitLink>
          </FooterLink>
          <FooterLink>
            <NewsKitLink
              href="https://www.newscareers.co.uk/"
              target="_blank"
              external={false}
              overrides={{stylePreset: 'linkFooter'}}
            >
              Careers
            </NewsKitLink>
          </FooterLink>
          <Hidden xs sm md lg xl>
            <FooterLink>
              <Link href="/" external={false}>
                <IconFilledGitHub overrides={{size: 'iconSize020'}} />
              </Link>
            </FooterLink>
          </Hidden>
        </FooterMenu>
      </Cell>
      <Cell xs={10} xsOffset={1} md={6}>
        <FooterCopy
          as="div"
          stylePreset="inkSubtle"
          typographyPreset={{
            xs: 'utilityMeta010',
            md: 'utilityMeta020',
          }}
        >
          Copyright &copy; {year} News Corp. All rights reserved.
        </FooterCopy>
      </Cell>
    </Grid>
  </Footer>
);

export default SiteFooter;
