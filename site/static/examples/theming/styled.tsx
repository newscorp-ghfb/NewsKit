...
import { ThemeProvider, newskitLightTheme, styled } from "newskit";

const MyComponent = styled.div`
    ${({ theme }) => {
        
    }}
`;


render() {
    return (
        <ThemeProvider theme={newskitLightTheme}>
            <MyComponent>
                <MyApp />
            </MyComponent>
        </ThemeProvider>
    )
}

