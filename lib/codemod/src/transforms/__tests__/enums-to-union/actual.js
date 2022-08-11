import {
  Button,
  ButtonSize,
  MenuItemAlign,
  MenuItemSize,
  Menu,
  MenuItem,
  Slider,
  LabelPosition,
  Stack,
  Flow,
  StackDistribution,
  StackChild,
  AlignSelfValues,
  TagSize,
  Tabs,
  Tab,
  TabAlign,
  TabsIndicatorPosition,
  TabSize,
  TabsDistribution,
  FormInput,
  FormInputTextField,
  TextFieldSize,
  TextInputSize,
} from 'newskit';

const Component = () => (
  <>
    <Button size={ButtonSize.Small}>Button</Button>
    <Menu vertical align={MenuItemAlign.Start} size={MenuItemSize.Small}>
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
      labelPosition={LabelPosition.After}
    />
    <Stack
      list
      flow={Flow.VerticalCenter}
      stackDistribution={StackDistribution.SpaceBetween}
      spaceInline="space030"
      ariaLabel="Tag list"
    >
      <Tag>child 1</Tag>
      <Tag>child 2</Tag>
    </Stack>
    <StackChild alignSelf={AlignSelfValues.Stretch}>
      <Divider />
    </StackChild>
    <Tag size={TagSize.Medium}>Tag</Tag>
    <Tabs
      size={TabSize.Medium}
      align={TabAlign.Start}
      vertical
      indicatorPosition={TabsIndicatorPosition.Start}
      distribution={TabsDistribution.Equal}
    >
      <Tab label="Tab">
        Tab
      </Tab>
    </Tabs>
    <Label size={TextFieldSize.Small}>Label</Label>
    <Form onSubmit={onSubmit}>
      <FormInput state="valid" name="email-valid">
        <FormInputLabel size={TextFieldSize.Small}>E-mail</FormInputLabel>
        <FormInputTextField size={TextFieldSize.Small} />
      </FormInput>
      <TextInput
        size={TextInputSize.Large}
        label="Email"
        name="email"
        assistiveText="Your email"
      />
    </Form>
  </>
);
