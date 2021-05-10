import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
});

<Form onSubmit={onSubmit} resolver={yupResolver(schema)}>
  <Block spaceStack="space050">
    <TextInput
      label="Email"
      name="email"
      data-testid="email-input"
    />
  </Block>
  <Block spaceStack="space050">
    <TextInput
      label="Username"
      name="username"
      data-testid="username-input"
    />
  </Block>
  <Button type="submit">Submit</Button>
</Form>