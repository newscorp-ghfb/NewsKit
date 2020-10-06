const onSubmit = (data: any) => {
  console.log('Submitted data:', data);
};

<Form onSubmit={onSubmit}>
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