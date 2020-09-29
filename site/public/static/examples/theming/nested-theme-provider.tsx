import { ThemeProvider, newskitDarkTheme, newskitLightTheme } from 'newskit';

render() {
  return (
    <ThemeProvider theme={newskitLightTheme}>
      <Component>Light theme style!</Component>

      <ThemeProvider theme={newskitDarkTheme}>
        <Component>Dark theme style!</Component>
      </ThemeProvider>
    </ThemeProvider>
  )
}

