import {
  Button,
  Menu,
  MenuItem,
  Slider,
  Stack,
  StackChild,
  Tabs,
  Tab,
  FormInput,
  FormInputTextField,
} from 'newskit';

const Component = () => (
  <>
    <Button size="small">Button</Button>
    <Menu vertical align="start" size="small">
      <MenuItem href={href}>Menu item knickknackatory 1</MenuItem>
      <MenuItem href={href}>Menu item knickknackatory 2</MenuItem>
      <MenuItem href={href}>Menu item knickknackatory 3</MenuItem>
    </Menu>
    <Slider
      values={[50]}
      max={100}
      min={0}
      minLabel="0%"
      maxLabel="100%"
      thumbLabel
      labelPosition="after"
    />
    <Stack
      list
      flow="vertical-center"
      stackDistribution="space-between"
      spaceInline="space030"
      ariaLabel="Tag list"
    >
      <Tag>child 1</Tag>
      <Tag>child 2</Tag>
    </Stack>
    <StackChild alignSelf="stretch">
      <Divider />
    </StackChild>
    <Tabs
      size="medium"
      align="start"
      vertical
      indicatorPosition="start"
      distribution="equal"
    >
      <Tab label="Tab">
        Tab
      </Tab>
    </Tabs>
    <Form onSubmit={onSubmit}>
      <FormInput state="valid" name="email-valid">
        <FormInputTextField size="small" />
      </FormInput>
    </Form>
  </>
);
