import * as React from 'react';
import {EmailInput} from '..';
import {Block} from '../../block';
import {Button} from '../../button';
import {Form} from '../../form';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {styled, getSizingFromTheme} from '../../utils/style';

const Container = styled.div`
  ${getMediaQueryFromTheme('md')} {
    margin: ${getSizingFromTheme('sizing100')};
  }
`;
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async () => {
  await sleep(2000);
};

export default {
  title: 'Components/email-input',
  component: () => 'None',
};

export const StoryEmailInputVariations = () => (
  <>
    <StorybookHeading>Email Input Variations</StorybookHeading>
    <StorybookSubHeading>With Hidden Label</StorybookSubHeading>
    <Container>
      <EmailInput hideLabel label="Label" assistiveText="Assistive text" />
    </Container>
    <StorybookSubHeading>Without Assistive Text</StorybookSubHeading>
    <Container>
      <EmailInput label="Label" />
    </Container>
    <StorybookSubHeading>With Custom Placeholder</StorybookSubHeading>
    <Container>
      <EmailInput
        label="Label"
        placeholder="Enter your email address."
        assistiveText="Assistive text"
      />
    </Container>
  </>
);
StoryEmailInputVariations.storyName = 'email-input-variations';

export const StoryEmailWithSubmitValidation = () => (
  <>
    <StorybookHeading>Form</StorybookHeading>
    <Block>
      <StorybookSubHeading>
        Email Input validation mode: onSubmit
      </StorybookSubHeading>
      <Form onSubmit={onSubmit}>
        <Block spaceStack="space050">
          <EmailInput
            label="Email"
            name="email"
            rules={{
              required: 'Required field',
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: 'Please provide a valid email',
              },
            }}
          />
        </Block>
        <Button type="submit">Submit</Button>
      </Form>
    </Block>
  </>
);
StoryEmailWithSubmitValidation.storyName = 'email-with-submit-validation';
