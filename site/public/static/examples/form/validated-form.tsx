<Form onSubmit={onSubmit}>
  <Block overrides={{ spaceStack: 'space050' }}>
    <TextInput
      label="Email"
      name="email"
      assistiveText="Your email"
      rules={{
        required: 'Required field',
        minLength: { value: 3, message: 'Emails must be at least 3 characters long ' },
        pattern: {
          value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          message: 'Please provide a valid email',
        },
      }}
    />
  </Block>
  <Block overrides={{ spaceStack: 'space050' }}>
    <TextInput
      label="Username"
      name="username"
      assistiveText="Your username"
      rules={{
        required: 'Required field',
        minLength: { value: 3, message: 'Username must be at least 3 characters long ' },
      }}
    />
  </Block>
  <Button type="submit">Submit</Button>
</Form>