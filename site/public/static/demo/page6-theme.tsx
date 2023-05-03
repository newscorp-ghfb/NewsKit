import { createTheme, deepMerge, Button } from 'newskit';

export default createTheme({
  name: 'page6-theme',
  overrides: {
    stylePresets: {
      pricingCardSurface: {
        base: {
          backgroundColor: '{{colors.interfaceBackground}}',
          boxShadow: '{{shadows.shadow030}}',
        },
      },
      buttonMinimalPrimaryNoWrap: deepMerge(
        {},
        Button.stylePresets.buttonMinimalPrimary,
        {
          base: {
            whiteSpace: 'nowrap',
          },
        }
      ),
    },
  },
});
