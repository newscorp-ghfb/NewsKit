import {FormInput, FormInputTextField, TextFieldSize} from 'newskit';

const Component = () => (
  <Form onSubmit={onSubmit}>
    <FormInput state="valid" name="email-valid">
      <FormInputTextField size={TextFieldSize.Small} />
    </FormInput>
  </Form>
);
