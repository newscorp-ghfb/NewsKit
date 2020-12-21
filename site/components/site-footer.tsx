import * as React from 'react';
import {
  Grid,
  Cell,
  Hidden,
  ConsentSettingsLink,
  IconFilledGitHub,
  getTypographyPresetFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  getBorderFromTheme,
  getMediaQueryFromTheme,
  styled,
} from 'newskit';
import {Link} from './link';

const Footer = styled.footer`
  flex-shrink: 0;
  padding: ${getSizingFromTheme('sizing050')} 0;
  background: ${getColorFromTheme('interface010')};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -50%;
    left: -50%;
    transform: scale(0.5);
    border-top-style: solid;
    border-top-width: ${getBorderFromTheme('borderWidth010')};
    border-top-color: ${getColorFromTheme('interface040')};
  }

  ${getMediaQueryFromTheme('sm')} {
    &::before {
      right: 0;
      left: 0;
      transform: scale(1);
    }
  }
`;

const FooterCopy = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  ${getTypographyPresetFromTheme('utilityBody010')};
  color: ${getColorFromTheme('inkSubtle')};
`;

const FooterMenu = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  ${getMediaQueryFromTheme('md')} {
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
  }
`;

const FooterLink = styled.span`
  flex-basis: 50%;
  padding-top: ${getSizingFromTheme('sizing050')};
  ${getTypographyPresetFromTheme('utilityLabel020')};

  ${getMediaQueryFromTheme('md')} {
    flex-basis: auto;
    padding-top: 0;
    padding-left: ${getSizingFromTheme('sizing050')};
  }
`;

const year = new Date().getUTCFullYear();

const SiteFooter: React.FC = () => (
  <Footer>
    <Grid xsRowGutter="space000">
      <Cell xs={12} md={4} mdOffset={1}>
        <FooterCopy>
          Copyright &copy; {year} News Corp. All rights reserved.
        </FooterCopy>
      </Cell>
      <Cell xs={12} sm={6} md={6}>
        <FooterMenu>
          <Hidden xs sm md lg xl>
            <FooterLink>
              <Link href="/cookies" noUnderline external={false}>
                Cookies
              </Link>
            </FooterLink>
            <FooterLink>
              <Link href="/terms" noUnderline external={false}>
                Terms
              </Link>
            </FooterLink>
          </Hidden>
          <FooterLink>
            <ConsentSettingsLink
              privacyManagerId="139011"
              noUnderline
              external={false}
            >
              Privacy
            </ConsentSettingsLink>
          </FooterLink>
          <FooterLink>
            <Link
              href="https://www.newscareers.co.uk/"
              target="_blank"
              noUnderline
              external={false}
            >
              Careers
            </Link>
          </FooterLink>
          <Hidden xs sm md lg xl>
            <FooterLink>
              <Link href="/" noUnderline external={false}>
                <IconFilledGitHub overrides={{size: 'iconSize020'}} />
              </Link>
            </FooterLink>
          </Hidden>
        </FooterMenu>
      </Cell>
    </Grid>
  </Footer>
);

export default SiteFooter;
