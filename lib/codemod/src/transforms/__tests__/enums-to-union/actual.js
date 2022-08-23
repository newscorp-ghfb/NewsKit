import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Slider,
  Stack,
  Flow,
  StackDistribution,
  StackChild,
  AlignSelfValues,
  Tabs,
  Tab,
  TabSize,
  TabsDistribution,
  FormInput,
  FormInputTextField,
  TextInputSize,
} from 'newskit';

const Component = () => (
  <>
    <Button size="small">Button</Button>
    <IconButton size="small"><IconFilledLight overrides={{size: 'iconSize010'}} /></IconButton>
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
      flow={Flow.VerticalCenter}
      stackDistribution={StackDistribution.Start}
      spaceInline="space030"
      ariaLabel="Tag list"
    >
      <Tag>child 1</Tag>
      <Tag>child 2</Tag>
    </Stack>
    <StackChild alignSelf={AlignSelfValues.Stretch}>
      <Divider />
    </StackChild>
    <Tag size="medium">Tag</Tag>
    <Tabs
      size={TabSize.Medium}
      align="start"
      vertical
      indicatorPosition="start"
      distribution={TabsDistribution.Equal}
    >
      <Tab label="Tab">
        Tab
      </Tab>
    </Tabs>
    <Label size="small">Label</Label>
    <Form onSubmit={onSubmit}>
      <FormInput state="valid" name="email-valid">
        <FormInputLabel size="small">E-mail</FormInputLabel>
        <FormInputTextField size="small" />
      </FormInput>
      <TextInput
        size={TextInputSize.Large}
        label="Email"
        name="email"
        assistiveText="Your email"
      />
    </Form>
    <Avatar size={AvatarSize.Small} align={AlignContent.Start}>New image</Avatar>
    <ArticleHeader align={HeaderAlign.Start}>Header</ArticleHeader>
  </>
);
