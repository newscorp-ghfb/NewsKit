import { NewsKitProvider, newskitLightTheme } from 'newskit';

render() {
    return (
        <NewsKitProvider theme={newskitLightTheme}>
            <MyApp />
        </NewsKitProvider>
    )
}