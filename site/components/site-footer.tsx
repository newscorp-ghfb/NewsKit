import * as React from 'react';
import {
  Grid,
  Cell,
  Hidden,
  ConsentSettingsLink,
  GitHub,
  getTypePresetFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  getBorderFromTheme,
  getMediaQueryFromTheme,
  styled,
} from 'newskit';
import {Link} from './link';

const Footer = styled.footer`
  flex-shrink: 0;
  padding: ${getSizingFromTheme('spacingSize050')} 0;
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
  ${getTypePresetFromTheme('body010')};
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
  padding-top: ${getSizingFromTheme('spacingSize050')};
  ${getTypePresetFromTheme('label020')};

  ${getMediaQueryFromTheme('md')} {
    flex-basis: auto;
    padding-top: 0;
    padding-left: ${getSizingFromTheme('spacingSize050')};
  }
`;

const year = new Date().getUTCFullYear();

const SiteFooter: React.FC = () => (
  <Footer>
    <Grid xsRowGutter="sizing000">
      <Cell xs={12} md={5}>
        <FooterCopy>
          Copyright &copy; {year} News Corp. All rights reserved.
        </FooterCopy>
      </Cell>
      <Cell xs={12} sm={6} md={7}>
        <FooterMenu>
          <Hidden xs sm md lg>
            <FooterLink>
              <Link href="/cookies" $noUnderline $color="inkSubtle">
                Cookies
              </Link>
            </FooterLink>
            <FooterLink>
              <Link href="/terms" $noUnderline $color="inkSubtle">
                Terms
              </Link>
            </FooterLink>
          </Hidden>
          <FooterLink>
            <ConsentSettingsLink
              siteId="5623"
              privacyManagerId="5de4e78870353615f11c8456"
              $noUnderline
              $color="inkSubtle"
            >
              Privacy
            </ConsentSettingsLink>
          </FooterLink>
          <FooterLink>
            <Link
              href="https://www.newscareers.co.uk/"
              target="_blank"
              $noUnderline
              $color="inkSubtle"
            >
              Careers
            </Link>
          </FooterLink>
          <Hidden xs sm md lg>
            <FooterLink>
              <Link href="/" $noUnderline $color="inkSubtle">
                <GitHub $size="iconSize020" />
              </Link>
            </FooterLink>
          </Hidden>
        </FooterMenu>
      </Cell>
    </Grid>
  </Footer>
);

export default SiteFooter;
