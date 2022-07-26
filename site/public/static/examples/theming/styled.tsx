import { NewsKitProvider, newskitLightTheme, styled } from 'newskit';

const MyAppContainer = styled.div`
  max-width: ${({ theme }) => theme.sizing.sizing110};
`;

render() {
  return (
    <NewsKitProvider theme={newskitLightTheme}>
      <MyAppContainer>
        <MyApp />
      </MyAppContainer>
    </NewsKitProvider>
  )
}
