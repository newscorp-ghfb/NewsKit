const editor = ({overrides, title, icon, role, text}) =>
  `<InlineMessage overrides="${overrides}" title="${title}" icon="${icon}" role="${role}">
    ${text}
  </InlineMessage>`;

export default {
  // Internal id of the component
  id: 'inlineMessage',
  // Visible label
  label: 'Inline Message',
  summary: '{{fields.text}}',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      label: 'Overrides',
      name: 'overrides',
      widget: 'object',
      fields: [
        {label: 'StylePreset', name: 'stylePreset', widget: 'string'},
        {label: 'MarginBlockStart', name: 'marginBlockStart', widget: 'string'},
      ],
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {label: 'Icon', name: 'icon', widget: 'string'},
    {label: 'Role', name: 'role', widget: 'string'},
    {label: 'Text', name: 'text', widget: 'string'},
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /<InlineMessage overrides="([^\\"]+)" title="([^\\"]+)" icon="([^\\"]+)" role="${role}">(.*?)<\/InlineMessage>/s,
  // Function to extract data elements from the regexp match
  fromBlock(match) {
    return {
      overrides: match[1],
      title: match[2],
      icon: match[3],
      role: match[4],
      text: match[5],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock(props) {
    return editor(props);
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview(props) {
    return editor(props);
  },
};
