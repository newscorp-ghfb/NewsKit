import { NewskitProvider, ThemeProvider, newskitDarkTheme, newskitLightTheme } from 'newskit';

render() {
  return (
    <NewskitProvider theme={newskitLightTheme}>
      <Component>Light theme style!</Component>

      <ThemeProvider theme={newskitDarkTheme}>
        <Component>Dark theme style!</Component>

        <ThemeProvider theme={otherTheme}>
          <Component>Other theme style!</Component>
        </ThemeProvider>

      </ThemeProvider>
    </NewskitProvider>
  )
}