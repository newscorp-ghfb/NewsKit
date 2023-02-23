const {
  updateOverrides,
  updateProps,
} = require('../utils/update-spaceInset-props-overrides');
const {replaceSpaceInset, getPadding} = require('../utils/replace-space-inset');

const componentWithOverrides = [
  'Accordion',
  'AssistiveText',
  'AudioPlayerPlaybackSpeedControl',
  'Banner',
  'Breadcrumbs',
  'Button',
  'Card',
  'Drawer',
  'Fieldset',
  'Flag',
  'Form',
  'GridLayout',
  'IconButton',
  'InlineMessage',
  'Menu',
  'MenuGroup',
  'MenuSub',
  'MenuItem',
  'Modal',
  'Popover',
  'Scroll',
  'Select',
  'ShareBar',
  'StackChild',
  'StructuredListItem',
  'Tabs',
  'Tag',
  'TextField',
  'TitleBar',
  'Toast',
  'Tooltip',
  'VideoPlayer',
  'VolumeControl',
];

const componentWithoutOverrides = ['Block', 'GridLayout', 'TextBlock'];
module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);
  const source = root.toSource();

  componentWithoutOverrides.map(compName => {
    updateProps(
      root,
      jscodeshift,
      source,
      compName,
      props => props && getPadding(props),
    );
  });

  componentWithOverrides.map(compName => {
    updateOverrides(
      root,
      jscodeshift,
      source,
      compName,
      overrides => overrides && replaceSpaceInset(overrides),
    );
  });
  return root.toSource();
};
