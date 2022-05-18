import { NewskitProvider, newskitLightTheme, styled } from 'newskit';

const MyAppContainer = styled.div`
  max-width: ${({ theme }) => theme.sizing.sizing110};
`;

render() {
  return (
    <NewskitProvider theme={newskitLightTheme}>
      <MyAppContainer>
        <MyApp />
      </MyAppContainer>
    </NewskitProvider>
  )
}
