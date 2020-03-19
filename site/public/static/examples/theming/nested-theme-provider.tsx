...
import { ThemeProvider, newskitLightTheme, theSunTheme } from "newskit";

render() {
    return (
        <ThemeProvider theme={newskitLightTheme}>
            <ThemeProvider theme={theSunTheme}>
                <MyApp />
            </ThemeProvider>
        </ThemeProvider>
    )
}

