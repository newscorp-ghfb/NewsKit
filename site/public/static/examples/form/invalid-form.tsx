const onSubmitInvalid = (errors: any) => {
  console.log('Validation errors:', errors);
};

<Form onSubmit={onSubmit} onSubmitInvalid={onSubmitInvalid}>
  <Block overrides={{spaceStack: 'space050'}}>
    <TextInput
      label="Email"
      name="email"
    />
  </Block>
  <Block overrides={{spaceStack: 'space050'}}>
    <TextInput
      label="Username"
      name="username"
    />
  </Block>
  <Button type="submit">Submit</Button>
</Form>