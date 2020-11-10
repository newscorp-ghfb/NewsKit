import {createTheme, newskitDarkTheme} from 'newskit';

const stylePresets = {
  buttonLightDarkToggle: {
    base: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
  },
  linkSectionNavigation: {
    base: {
      color: '{{colors.interactivePrimary030}}',
    },
    hover: {
      color: '{{colors.interactivePrimary040}}',
    },
    active: {
      color: '{{colors.interactivePrimary050}}',
    },
  },
  linkLogo: {
    base: {
      iconColor: '{{colors.inkBase}}',
    },
  },
  closeIcon: {
    base: {
      iconColor: '{{colors.interactiveSecondary040}}',
    },
  },
  arrowIcon: {
    base: {
      iconColor: '{{colors.inkBase}}',
    },
  },
  swatchBadge: {
    base: {
      backgroundColor: '{{colors.interface010}}',
      color: '{{colors.inkSubtle}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      iconColor: '{{colors.red070}}',
    },
  },
  linkNoUnderline: {
    base: {
      textDecoration: 'none',
    },
    hover: {
      textDecoration: 'none',
    },
  },
  sidebarNavItem: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkContrast}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary020}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkContrast}}',
    },
  },
  sidebarHeader: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkContrast}}',
    },
  },
};
export const newsKitLight = createTheme({
  name: 'newskit-light',
  overrides: {
    stylePresets,
  },
});
export const newsKitDark = createTheme({
  name: 'newskit-dark',
  baseTheme: newskitDarkTheme,
  overrides: {
    stylePresets,
  },
});
