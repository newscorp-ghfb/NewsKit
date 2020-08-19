...
import { ThemeProvider, newskitDarkTheme, newskitLightTheme } from "newskit";

render() {
    return (
        <ThemeProvider theme={newskitLightTheme}>
            <ThemeProvider theme={newskitDarkTheme}>
                <MyApp />
            </ThemeProvider>
        </ThemeProvider>
    )
}

