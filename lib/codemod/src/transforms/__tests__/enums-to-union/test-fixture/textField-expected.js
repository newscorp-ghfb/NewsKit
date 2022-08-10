import {FormInput, FormInputTextField} from 'newskit';

const Component = () => (
  <Form onSubmit={onSubmit}>
    <FormInput state="valid" name="email-valid">
      <FormInputTextField size="small" />
    </FormInput>
  </Form>
);
