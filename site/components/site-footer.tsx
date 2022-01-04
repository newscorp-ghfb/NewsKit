import * as React from 'react';
import {
  Grid,
  Cell,
  getTypePresetFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  styled,
} from 'newskit';

// TODO: check if this padding still applies in ticket PPDSC-667
const Footer = styled.footer`
  // padding-left: ${getSizingFromTheme('spacingSize0600')};
  // padding-right: ${getSizingFromTheme('spacingSize0600')};
  background-color: ${getColorFromTheme('interface050')};
  ${getTypePresetFromTheme('body03')};
  flex-shrink: 0;
`;

export const CopyrightText = styled.div`
  ${getTypePresetFromTheme('body010')};
  color: ${getColorFromTheme('inkInverse')};
  margin: 1em 0;
`;

const year = new Date().getUTCFullYear();

const SiteFooter: React.FC = () => (
  <Footer>
    <Grid>
      <Cell xs={12}>
        <CopyrightText>Copyright &copy; {year} News Corp</CopyrightText>
      </Cell>
    </Grid>
  </Footer>
);

export default SiteFooter;
