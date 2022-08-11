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
  Tabs,
  Tab,
  TabAlign,
  TabsIndicatorPosition,
  TabSize,
  TabsDistribution,
  FormInput,
  FormInputTextField,
  TextFieldSize,
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
    <Form onSubmit={onSubmit}>
      <FormInput state="valid" name="email-valid">
        <FormInputTextField size={TextFieldSize.Small} />
      </FormInput>
    </Form>
  </>
);
