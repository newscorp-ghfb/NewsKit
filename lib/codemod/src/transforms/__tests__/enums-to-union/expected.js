import {
  Button,
  IconButton,
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
    <IconButton size="small">
      <IconFilledLight overrides={{size: 'iconSize010'}} />
    </IconButton>
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
      stackDistribution="flex-start"
      spaceInline="space030"
      ariaLabel="Tag list"
    >
      <Tag>child 1</Tag>
      <Tag>child 2</Tag>
    </Stack>
    <StackChild alignSelf="stretch">
      <Divider />
    </StackChild>
    <Tag size="medium">Tag</Tag>
    <Tabs
      size="medium"
      align="start"
      vertical
      indicatorPosition="start"
      distribution="equal"
    >
      <Tab label="Tab">Tab</Tab>
    </Tabs>
    <Label size="small">Label</Label>
    <Form onSubmit={onSubmit}>
      <FormInput state="valid" name="email-valid">
        <FormInputLabel size="small">E-mail</FormInputLabel>
        <FormInputTextField size="small" />
      </FormInput>
      <TextInput
        size="large"
        label="Email"
        name="email"
        assistiveText="Your email"
      />
    </Form>
    <Avatar size={AvatarSize.Small} align={AlignContent.Start}>
      New image
    </Avatar>
    <ArticleHeader align={HeaderAlign.Start}>Header</ArticleHeader>
  </>
);
