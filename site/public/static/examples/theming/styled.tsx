import { ThemeProvider, newskitLightTheme, styled } from 'newskit';

const MyAppContainer = styled.div`
  max-width: ${({ theme }) => theme.sizing.sizing110};
`;

render() {
  return (
    <ThemeProvider theme={newskitLightTheme}>
      <MyAppContainer>
        <MyApp />
      </MyAppContainer>
    </ThemeProvider>
  )
}
