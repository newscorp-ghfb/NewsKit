const onSubmit = (data: any) => {
  console.log('Submitted data:', data);
};

<Form onSubmit={onSubmit}>
  <Block overrides={{spaceStack: 'space050'}}>
  <EmailInput
      label="Email"
      name="email"
      assistiveText="Your email"
    />
  </Block>
  <Button type="submit">Submit</Button>
</Form>