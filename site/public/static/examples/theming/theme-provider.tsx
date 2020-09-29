import { ThemeProvider, newskitLightTheme } from 'newskit';

render() {
    return (
        <ThemeProvider theme={newskitLightTheme}>
            <MyApp />
        </ThemeProvider>
    )
}

