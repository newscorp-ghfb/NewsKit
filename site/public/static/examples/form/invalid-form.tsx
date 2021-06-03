const onSubmitInvalid = (errors: any) => {
  console.log('Validation errors:', errors);
};

<Form onSubmit={onSubmit} onSubmitInvalid={onSubmitInvalid}>
  <Block overrides={{spaceStack: 'space050'}}>
    <EmailInput
      label="Email"
      name="email"
      assistiveText="Your email"
    />
  </Block>
  <Button type="submit">Submit</Button>
</Form>;
