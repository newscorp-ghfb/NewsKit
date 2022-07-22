import { NewskitProvider, newskitLightTheme } from 'newskit';

render() {
    return (
        <NewskitProvider theme={newskitLightTheme}>
            <MyApp />
        </NewskitProvider>
    )
}