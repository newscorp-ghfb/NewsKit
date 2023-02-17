const {
  updateOverrides,
  updateProps,
} = require('../utils/update-spaceInset-props-overrides');
const {replaceSpaceInset, getPadding} = require('../utils/replace-space-inset');

const componentNames = [
  'Accordion',
  'AssistiveText',
  'AudioPlayerPlaybackSpeedControl',
  'Banner',
  'Block',
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

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);
  const source = root.toSource();

  componentNames.map(componentName => {
    if (componentName === 'Block') {
      updateProps(
        root,
        jscodeshift,
        source,
        'Block',
        props => props && getPadding(props),
      );
    } else {
      updateOverrides(
        root,
        jscodeshift,
        source,
        componentName,
        overrides => overrides && replaceSpaceInset(overrides),
      );
    }
  });
  return root.toSource();
};
