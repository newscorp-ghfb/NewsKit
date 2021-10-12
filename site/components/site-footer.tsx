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
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  ${getMediaQueryFromTheme('md')} {
    text-align: right;
    top: 10%;
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
  ${getSizingCssFromTheme('paddingRight', {
    md: 'sizing050',
    lg: 'sizing080',
  })};
`;
interface FooterProps {
  cellProps?: CellProps;
  footerCopyCellProps?: CellProps;
}

const year = new Date().getUTCFullYear();
const SiteFooter: React.FC<FooterProps> = ({
  cellProps = {xs: 12, md: 10, lg: 8, mdOffset: 1},
  footerCopyCellProps = {
    xs: 10,
    xsOffset: 1,
    md: 8,
    mdOffset: 3,
    lg: 10,
    lgOffset: 1,
    xl: 8,
    xlOffset: 3,
  },
}) => (
  <>
    <Footer>
      <Block spaceStack={{xs: 'space080', md: 'space080', lg: 'space090'}} />
      <Grid xsRowGutter="space060" mdRowGutter="space000">
        <Cell {...cellProps}>
          <FooterMenu>
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
              <Link
                href="https://www.newscareers.co.uk/"
                target="_blank"
                external={false}
                overrides={{stylePreset: 'linkFooter'}}
              >
                Careers
              </Link>
            </FooterLink>
          </FooterMenu>
        </Cell>

        <Cell {...footerCopyCellProps}>
          <FooterCopy
            as="div"
            stylePreset="inkSubtle"
            typographyPreset={{
              xs: 'utilityMeta010',
              md: 'utilityMeta020',
            }}
          >
            <Block spaceStack="space060">
              Copyright &copy; {year} News Corp. All rights reserved.
            </Block>
          </FooterCopy>
        </Cell>
      </Grid>
    </Footer>
  </>
);

export default SiteFooter;
