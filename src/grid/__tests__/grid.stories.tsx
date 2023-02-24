import * as React from 'react';
import {
  getColorCssFromTheme,
  getTypographyPresetFromTheme,
  styled,
} from '../../utils/style';
import {Grid, Cell} from '..';
import {GridLayout} from '../../grid-layout';

const BorderedBox = styled.div`
  border: solid 1px;
  ${getColorCssFromTheme('borderColor', 'interfaceBrand010')};
`;

const StyledGridLayout = styled(GridLayout)`
  text-align: center;
  box-sizing: border-box;
  ${getColorCssFromTheme('background', 'blue010')};
  ${getColorCssFromTheme('color', 'inkBase')};
  ${getTypographyPresetFromTheme('utilityLabel030')};
`;

// GridLayout is used only for centering the content verticaly
const Content = ({children}: {children: React.ReactNode}) => (
  <StyledGridLayout
    overrides={{height: '100px', paddingBlock: '5px'}}
    alignItems="center"
  >
    {children}
  </StyledGridLayout>
);

export default {
  title: 'Components/Grid',
  component: () => 'None',
};

export const StoryGridDefault = () => (
  <>
    <BorderedBox>
      <Grid>
        <Cell>
          <Content>1</Content>
        </Cell>
        <Cell>
          <Content>2</Content>
        </Cell>
        <Cell>
          <Content>3</Content>
        </Cell>
        <Cell>
          <Content>4</Content>
        </Cell>
        <Cell>
          <Content>5</Content>
        </Cell>
        <Cell>
          <Content>6</Content>
        </Cell>
        <Cell>
          <Content>7</Content>
        </Cell>
        <Cell>
          <Content>8</Content>
        </Cell>
        <Cell>
          <Content>9</Content>
        </Cell>
        <Cell>
          <Content>10</Content>
        </Cell>
        <Cell>
          <Content>11</Content>
        </Cell>
        <Cell>
          <Content>12</Content>
        </Cell>
      </Grid>
    </BorderedBox>
    <BorderedBox>
      <Grid>
        <Cell smHidden md={2}>
          <Content>1, 2</Content>
        </Cell>
        <Cell sm={4} md={1}>
          <Content>3 </Content>
        </Cell>
        <Cell sm={2} md={3}>
          <Content>4, 5, 6</Content>
        </Cell>
        <Cell sm={2} md={3}>
          <Content>7, 8, 9</Content>
        </Cell>
        <Cell sm={4} md={1}>
          <Content>10</Content>
        </Cell>
        <Cell smHidden md={2}>
          <Content>11, 12</Content>
        </Cell>
      </Grid>
    </BorderedBox>
    <BorderedBox>
      <Grid>
        <Cell xs={12} sm={6} md={3} lg={2}>
          <Content>1</Content>
        </Cell>
        <Cell xs={12} sm={6} md={3} lg={2}>
          <Content>2</Content>
        </Cell>
        <Cell xs={12} sm={6} md={3} lg={2}>
          <Content>3</Content>
        </Cell>
        <Cell xs={12} sm={6} md={3} lg={2}>
          <Content>4</Content>
        </Cell>
        <Cell xs={12} sm={6} md={3} lg={2}>
          <Content>5</Content>
        </Cell>
        <Cell xs={12} sm={6} md={3} lg={2}>
          <Content>6</Content>
        </Cell>
      </Grid>
    </BorderedBox>
    <BorderedBox>
      <Grid>
        <Cell xs={4}>
          <Content>1</Content>
        </Cell>
        <Cell xs={4}>
          <Content>2</Content>
        </Cell>
        <Cell xs={4}>
          <Content>3</Content>
        </Cell>
      </Grid>
    </BorderedBox>

    <BorderedBox>
      <Grid>
        <Cell xs={4}>
          <Content>
            <Grid xsColumnGutter="space000" xsMargin="space000">
              <Cell xs={3}>
                <BorderedBox>inner 1</BorderedBox>
              </Cell>
              <Cell xs={3}>
                <BorderedBox>inner 2</BorderedBox>
              </Cell>
              <Cell xs={3}>
                <BorderedBox>inner 3</BorderedBox>
              </Cell>
              <Cell xs={3}>
                <BorderedBox>inner 4</BorderedBox>
              </Cell>
            </Grid>
          </Content>
        </Cell>
        <Cell xs={4}>
          <Content>
            <Grid xsColumnGutter="space010">
              <Cell xs={3}>
                <BorderedBox>inner 1</BorderedBox>
              </Cell>
              <Cell xs={3}>
                <BorderedBox>inner 2</BorderedBox>
              </Cell>
              <Cell xs={3}>
                <BorderedBox>inner 3</BorderedBox>
              </Cell>
              <Cell xs={3}>
                <BorderedBox>inner 4</BorderedBox>
              </Cell>
            </Grid>
          </Content>
        </Cell>
        <Cell xs={4}>
          <Content>
            <Grid xsColumnGutter="space020">
              <Cell xs={3}>
                <BorderedBox>inner 1</BorderedBox>
              </Cell>
              <Cell xs={3}>
                <BorderedBox>inner 2</BorderedBox>
              </Cell>
              <Cell xs={3}>
                <BorderedBox>inner 3</BorderedBox>
              </Cell>
              <Cell xs={3}>
                <BorderedBox>inner 4</BorderedBox>
              </Cell>
            </Grid>
          </Content>
        </Cell>
      </Grid>
    </BorderedBox>

    <BorderedBox>
      <Grid>
        <Cell xs={3} xsOrder={4} smOrder={3} mdOrder={2} lgOrder={1}>
          <Content>1</Content>
        </Cell>
        <Cell xs={3} xsOrder={1} smOrder={4} mdOrder={3} lgOrder={2}>
          <Content>2</Content>
        </Cell>
        <Cell xs={3} xsOrder={2} smOrder={1} mdOrder={4} lgOrder={3}>
          <Content>3</Content>
        </Cell>
        <Cell xs={3} xsOrder={3} smOrder={2} mdOrder={1} lgOrder={4}>
          <Content>4</Content>
        </Cell>
      </Grid>
    </BorderedBox>

    <BorderedBox>
      <Grid>
        <Cell xs={1} sm={2} xsOffset={2} smOffset={1}>
          <Content>1</Content>
        </Cell>
        <Cell xs={1} xsOffset={2}>
          <Content>2</Content>
        </Cell>
        <Cell xs={1} sm={2} xsOffset={2} smOffset={1}>
          <Content>3</Content>
        </Cell>
        <Cell xs={1} xsOffset={2}>
          <Content>4</Content>
        </Cell>
      </Grid>
    </BorderedBox>

    <BorderedBox>
      <Grid
        xsColumnGutter="space000"
        xsRowGutter="space000"
        xsMargin="space000"
      >
        <Cell xs={6}>
          <Content>6 span - no margins or gutters</Content>
        </Cell>
        <Cell xs={6}>
          <Content>6 span - no margins or gutters</Content>
        </Cell>
        <Cell xs={6}>
          <Content>6 span - no margins or gutters</Content>
        </Cell>
        <Cell xs={6}>
          <Content>6 span - no margins or gutters</Content>
        </Cell>
      </Grid>
    </BorderedBox>

    <BorderedBox>
      <Grid xsColumnGutter="sizing000" xsRowGutter="sizing000">
        <Cell xs="full-width">
          <Content>
            Full width content, breaking out of the container margins
          </Content>
        </Cell>
        <Cell xs={6} md="full-width">
          <Content>6 at xs/sm, full width after</Content>
        </Cell>
        <Cell xs={6} md="full-width" xl={12}>
          <Content>6 at xs/sm, full width after, 12 at xl</Content>
        </Cell>
        <Cell xs={12}>
          <Content>12 span</Content>
        </Cell>
      </Grid>
    </BorderedBox>
    <BorderedBox>
      <Grid
        xsColumnGutter="sizing000"
        xsRowGutter="sizing000"
        maxWidth="1024px"
      >
        <Cell xs="full-width">
          <Content>Grid with custom max-width(1024px)</Content>
        </Cell>
        <Cell xs="full-width">
          <Content>Full width Cell</Content>
        </Cell>
        <Cell xs={12}>
          <Content>12 span</Content>
        </Cell>
      </Grid>
    </BorderedBox>
  </>
);
StoryGridDefault.storyName = 'Default';
StoryGridDefault.parameters = {
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};
