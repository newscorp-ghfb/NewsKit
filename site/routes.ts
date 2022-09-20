export default [
  {
    title: 'About',
    id: '/about',
    subNav: [
      {
        title: 'Introduction',
        page: true,
        id: '/about/introduction',
      },
      {
        title: 'Release notes',
        page: true,
        id: '/about/release-notes',
      },
      {
        title: 'Roadmap',
        page: true,
        id: '/about/roadmap',
      },
      {
        title: 'Contribute',
        page: true,
        id: '/about/contribute',
      },
      {
        title: 'Contact us',
        page: true,
        id: '/about/contact-us',
      },
    ],
  },
  {
    title: 'Guides',
    id: '/getting-started',
    subNav: [
      {
        title: 'Getting started',
        page: true,
        id: '/getting-started/overview',
        indexPage: true,
      },
      {
        title: 'Design',
        id: '/getting-started/design',
        subNav: [
          {
            title: 'Overview',
            page: true,
            id: '/getting-started/design/design-overview',
            description:
              'Everything you need to know about using NewsKit to design digital products.',
            illustration: 'guides/design-overview/hero',
            cardTitle: 'Design Overview',
          },
        ],
      },
      {
        title: 'Code',
        id: '/getting-started/code',
        subNav: [
          {
            title: 'Overview',
            page: true,
            id: '/getting-started/code/engineering-overview',
            description:
              'Everything you need to know about using NewsKit’s library of React web components.',
            illustration: 'guides/engineering-overview/hero',
            cardTitle: 'Engineering Overview',
          },
          {
            title: 'Quickstart',
            page: true,
            id: '/getting-started/code/engineering-quickstart',
            description:
              'Guides on how to get started building a web application with NewsKit.',
            illustration: 'guides/engineering-quickstart/hero',
            cardTitle: 'Engineering Quickstart Guide',
          },
          {
            title: 'Grid Layout step-by-step',
            page: true,
            id: '/getting-started/code/grid-layout-step-by-step',
            description:
              'The grid layout component is a wrapper around CSS grid that maps all CSS grid properties to react props.',
            illustration: 'guides/grid-layout-guide/hero',
            cardTitle: 'Grid Layout step-by-step',
          },
          {
            title: 'Instrumentation setup',
            page: true,
            id: '/getting-started/code/instrumentation',
            description:
              'NewsKit components are built to emit events "out of the box".',
            illustration: 'guides/overview/instrumentation-setup',
            cardTitle: 'Instrumentation Setup',
          },
          {
            title: 'Testing',
            page: true,
            id: '/getting-started/code/testing',
            description:
              'NewsKit uses Jest and React Testing Library for unit testing.',
            illustration: 'guides/overview/testing',
            cardTitle: 'Testing',
          },
        ],
      },
    ],
  },
  {
    title: 'Theme',
    id: '/theme',
    subNav: [
      {
        title: 'Overview',
        page: true,
        id: '/theme/overview',
        indexPage: true,
      },
      {
        title: 'Foundations',
        id: '/theme/foundation',
        subNav: [
          {
            title: 'Borders',
            page: true,
            id: '/theme/foundation/borders',
            illustration: 'theme/hero-borders-illustration',
            description:
              'Borders direct attention, identify components, communicate state, and express a brand.',
          },
          {
            title: 'Breakpoints',
            page: true,
            id: '/theme/foundation/breakpoints',
            illustration: 'theme/breakpoints/hero',
            description:
              'Breakpoints set a visual point on a screen to alter the layout of content (responsive design), ensuring consistency across different screen widths.',
          },
          {
            title: 'Colours',
            page: true,
            id: '/theme/foundation/colours',
            illustration: 'theme/colours/hero',
            description:
              'Colour is key to expressing brand and identity, but it also plays a vital role in conveying specific meaning to a user.',
          },
          {
            title: 'Design tokens',
            page: true,
            id: '/theme/foundation/design-tokens',
            illustration: 'theme/design-tokens/hero',
            description: `Design tokens are the design decisions of the design system. They are used in place of hard-coded values to maintain a scalable and consistent system for UI.`,
          },
          {
            title: 'Fonts',
            page: true,
            id: '/theme/foundation/fonts',
            illustration: 'theme/fonts/hero',
            description:
              'Fonts define the font family, boldness, size, and style of the text. These inform typography rules to convey the appropriate sentiment to guide users through their experience.',
          },
          {
            title: 'Gradients',
            page: true,
            id: '/theme/foundation/gradients',
            illustration: 'theme/gradients/hero',
            description:
              'Gradients is a visual representation of a colour. It is used to convey meaning and communicate a brand.',
          },
          {
            title: 'Iconography',
            page: true,
            id: '/theme/foundation/iconography',
            illustration: 'theme/iconography/hero',
            description:
              'Icons provide additional context to information, provide a visual cue, or visually reinforce the interaction.',
          },
          {
            title: 'Motion',
            page: true,
            id: '/theme/foundation/motion',
            illustration: 'theme/motion/hero',
            description:
              'Motion is used to create movement and narrative within a product. Timely animated interface elements attract attention, provide guidance and enhance user experience.',
          },
          {
            title: 'Outlines',
            page: true,
            id: '/theme/foundation/outlines',
            illustration: 'theme/hero-outlines-illustration',
            description:
              'Outlines provide visual cues about the focus or active states of elements.',
          },
          {
            title: 'Opacity',
            page: true,
            id: '/theme/foundation/opacity',
            illustration: 'theme/opacity/hero',
            description:
              'Opacity is used to create a visual layer between elements.',
          },
          {
            title: 'Overlays',
            page: true,
            id: '/theme/foundation/overlays',
            illustration: 'theme/overlays/hero',
            description:
              'Overlays are used for styling UI elements. They can be decorative, but often have a functional use like communicating state on images or increasing the contrast backgrounds when a component is layered upon each other, e.g. a modal.',
          },
          {
            title: 'Shadows',
            page: true,
            id: '/theme/foundation/shadows',
            illustration: 'components/hero-shadows-illustration',
            description:
              'Shadows provide visual cues about the distance between layers. They add levels of depth and realism to the user’s visual experience and improve the UI visual hierarchy.',
          },
          {
            title: 'Sizing',
            page: true,
            id: '/theme/foundation/sizing',
            illustration: 'components/hero-sizing-illustration',
            description:
              'A simple, standardised approach to size increases consistency and visual rhythm. Appropriate sizing is important for providing an inclusive experience.',
          },
          {
            title: 'Spacing',
            page: true,
            id: '/theme/foundation/spacing',
            illustration: 'theme/spacing/hero',
            description:
              'Considered use of space can improve communication: reducing visual clutter, providing hierarchy or helping show a relationship between elements on a screen.',
          },
        ],
      },
      {
        title: 'Presets',
        id: '/theme/presets',
        subNav: [
          {
            title: 'Style Presets',
            page: true,
            id: '/theme/presets/style-presets',
            illustration: 'theme/style-presets/hero',
            description:
              'A collection of foundational design tokens combined into a preset to define reusable styles for specific interface elements and their interactive states.',
          },
          {
            title: 'Transition Presets',
            page: true,
            id: '/theme/presets/transition-presets',
            illustration: 'theme/transition-presets/hero',
            description:
              'A collection of motion attributes combined into a preset to define reusable motion transition from one state to another.',
          },
          {
            title: 'Typography Presets',
            page: true,
            id: '/theme/presets/typography-presets',
            illustration: 'components/hero-typography-illustration',
            description:
              'A collection of foundational font design tokens combined into a preset to define reusable typography styles for specific text elements.',
          },
        ],
      },
      {
        title: 'Creating and using themes',
        id: '/theme/theming',
        subNav: [
          {
            title: 'Overview',
            page: true,
            id: '/theme/theming/overview',
            description:
              'A NewsKit theme is built up from a layer of foundations - such as colours, fonts and sizing scales.',
          },
          {
            title: 'Creating a theme in code',
            page: true,
            illustration: 'theme/creating-a-theme/hero',
            description:
              'Creating a theme enables the brand identity to be managed from a single location across multiple products.',
            id: '/theme/theming/creating-a-theme',
          },
          {
            title: 'Using a theme in code',
            page: true,
            illustration: 'theme/using-a-theme/hero',
            description:
              'A guide covering how to populate and apply a brand’s theme.',
            id: '/theme/theming/using-a-theme',
          },
          {
            title: 'Component defaults',
            illustration: 'theme/component-defaults/hero',
            description:
              'A preselected option that is applied to a component to define its appearance or behaviour.',
            page: true,
            id: '/theme/theming/component-defaults',
          },
        ],
      },
    ],
  },
  {
    title: 'Components',
    id: '/components',
    subNav: [
      {
        title: 'Overview',
        page: true,
        id: '/components/overview',
        indexPage: true,
      },
      {
        title: 'Actions & Inputs',
        description:
          'Components that allow users to take action on a feature or enable users to input data.',
        id: '/components/action-and-inputs',
        subNav: [
          {
            title: 'Button',
            page: true,
            id: '/components/button',
            description:
              'Allows users to take actions, and make choices, with a single tap.',
            illustration: 'components/button/hero',
          },
          {
            title: 'Checkbox',
            page: true,
            id: '/components/checkbox',
            description:
              'Checkboxes are selection controls that allow users to select one or multiple items from a group of options. They typically appear in forms.',
            illustration: 'components/checkbox/hero',
          },
          {
            title: 'Form',
            page: true,
            id: '/components/form',
            description:
              'The form component allows users to enter and edit information into a UI using form controls; based on React Hook Form.',
            illustration: 'components/form/hero',
          },
          {
            title: 'Radio Button',
            page: true,
            id: '/components/radio-button',
            description:
              'Radio Buttons are selection controls that are typically used in forms',
            illustration: 'components/radio-button/hero',
          },
          {
            title: 'Select',
            page: true,
            id: '/components/select',
            description:
              'Select components allow users to select one option from a list.',
            illustration: 'components/select/select-illustration',
          },
          {
            title: 'Share Bar',
            page: true,
            id: '/components/share-bar',
            description:
              'Used anywhere a user would like to easily share something with social media.',
            illustration: 'components/share-bar/share-bar-illustration',
          },
          {
            title: 'Slider',
            page: true,
            id: '/components/slider',
            description:
              'Allows users to choose a single value or range between min and max values by sliding a thumb.',
            illustration: 'components/slider-illustration',
          },
          {
            title: 'Switch',
            page: true,
            id: '/components/switch',
            description:
              'A switch is a selection control (toggle) that allows users to turn a setting on or off.',
            illustration: 'components/switch/hero',
          },
          {
            title: 'Text Field',
            page: true,
            id: '/components/text-field',
            description:
              'Text Fields allow users to enter and edit text content into a UI. They typically appear in forms.',
            illustration: 'components/text-field/hero',
          },
          {
            title: 'Text Input',
            page: true,
            id: '/components/text-input',
            description: 'Lets users enter and edit text.',
            illustration: 'components/text-input-illustration',
          },
        ],
      },
      {
        title: 'Feedback & Status',
        description:
          'Components that provide users with system or user feedback & status.',
        id: '/components/feedback-and-status',
        subNav: [
          {
            title: 'Banner',
            page: true,
            id: '/components/banner',
            description:
              'Demonstrates the progress of a system action e.g. waiting for a page to load.',
            illustration: 'components/banner/banner-illustration',
          },
          {
            title: 'Flag',
            page: true,
            id: '/components/flag',
            description:
              'A flag is a non-interactive visual indicator used to communicate status.',
            illustration: 'components/flag-illustration',
          },
          {
            title: 'Progress Indicator',
            page: true,
            id: '/components/progress-indicator',
            description:
              'Demonstrates the progress of a system action e.g. waiting for a page to load.',
            illustration: 'components/progress-indicator-illustration',
          },
          {
            title: 'Toast',
            page: true,
            id: '/components/toast',
            description:
              'A Toast communicates confirmation of an action or a low-priority message that does not need to completely interrupt the user experience.',
            illustration: 'components/toast/toast-illustration',
          },
          {
            title: 'Inline Message',
            page: true,
            id: '/components/inline-message',
            description:
              'An Inline message communicates contextual information. They are positioned inline, in close proximity to the element they are adding context to.',
            illustration:
              'components/inline-message/inline-message-illustration',
          },
          {
            title: 'Tooltip',
            page: true,
            id: '/components/tooltip',
            description:
              'A Tooltip is a feedback component that displays a short, informational message when a user hovers over or focuses on a UI element. ',
            illustration: 'components/tooltip/hero',
          },
        ],
      },
      {
        title: 'Layout',
        description:
          'Components that help to define the fundamental spacial structure of a feature or page.',
        id: '/components/layout',
        subNav: [
          {
            title: 'Aspect Ratio',
            page: true,
            id: '/components/aspect-ratio',
            description: 'The aspect ratio of an image.',
            illustration: 'components/aspect-ratio-illustration',
          },
          {
            title: 'Block',
            page: true,
            id: '/components/block',
            description:
              'A simple container component that can take margin, padding, and style presets.',
            illustration: 'components/block-illustration',
          },
          {
            title: 'Card',
            page: true,
            id: '/components/card',
            description:
              'Contain preview content and actions about a single subject.',
            illustration: 'components/hero-card-illustration',
          },
          {
            title: 'Divider',
            page: true,
            id: '/components/divider',
            description: 'A thin line that separates content.',
            illustration: 'components/divider-illustration',
          },
          {
            title: 'Drawer',
            page: true,
            id: '/components/drawer',
            description:
              'A layout panel that slides out the side of the screen revealing content like navigation or filters.',
            illustration: 'components/drawer/drawer-illustration',
          },
          {
            title: 'Fieldset',
            page: true,
            id: '/components/fieldset',
            description:
              'The Fieldset is used to provide contextual information around a group of form controls in a web form.',
            illustration: 'components/fieldset/hero',
          },
          {
            title: 'Grid',
            page: true,
            id: '/components/grid',
            description:
              'Used together to construct a visual grid for responsive page layout.',
            illustration: 'components/grid-cell-illustration',
          },
          {
            title: 'Grid Layout',
            page: true,
            id: '/components/grid-layout',
            description:
              'Used to construct a visual grid for responsive page layout. A Proxy for CSS grid.',
            illustration: 'components/grid-layout-illustration',
          },
          {
            title: 'Modal',
            page: true,
            id: '/components/modal',
            description:
              'A Modal is a layout panel that presents critical information or requests users input without navigating away from the current page.',
            illustration: 'components/modal-illustration',
          },
          {
            title: 'Popover',
            page: true,
            id: '/components/popover',
            description:
              'A Popover (also known as a Popper) is a layout component that displays non-critical information when a user clicks or taps on a UI element. ',
            illustration: 'components/popover/hero',
          },
          {
            title: 'Stack',
            page: true,
            id: '/components/stack',
            description:
              'A low-level foundational component used to layout items in a horizontal or vertical stack.',
            illustration: 'components/stack-illustration',
          },
          {
            title: 'Structured List',
            page: true,
            id: '/components/structured-list',
            description:
              'The Structured List is a layout component that groups similar or related content.',
            illustration: 'components/structured-list/hero',
          },
          {
            title: 'Visibility',
            page: true,
            id: '/components/visibility',
            description:
              'A pair of components which can be used to show and hide content at different breakpoints.',
            illustration: 'components/visibility-illustration',
          },
        ],
      },
      {
        title: 'Media',
        description: 'Components that provide or control rich media.',
        id: '/components/media',
        subNav: [
          {
            title: 'Audio Player',
            page: true,
            id: '/components/audio-player',
            description:
              'The audio player component allows a user to play and control the playback of live and recorded audio content.',
            illustration: 'components/audio-player-illustration',
          },
          {
            title: 'Icons',
            page: true,
            id: '/components/icons',
            description:
              'Small SVG shapes, ranging from basic UI shapes to brand logos.',
            illustration: 'components/icons-illustration',
          },
          {
            title: 'Image',
            page: true,
            id: '/components/image',
            description: 'An element of media.',
            illustration: 'components/image-illustration',
          },
          {
            title: 'Volume Control',
            page: true,
            id: '/components/volume-control',
            description: 'Allows user to mute, increase or lower audio volume.',
            illustration: 'components/volume-control-illustration',
          },
        ],
      },
      {
        title: 'Navigation',
        description:
          'Components that enable users to move between pages or content.',
        id: '/components/navigation',
        subNav: [
          {
            title: 'Accordion',
            page: true,
            id: '/components/accordion',
            description:
              'Accordions show and hide related content. Use them to break up long pages into segmented, prioritised sections.',
            illustration: 'components/accordion/hero',
          },
          {
            title: 'Link',
            page: true,
            id: '/components/link',
            description: 'Allows user to jump to a new location when clicked.',
            illustration: 'components/url-illustration',
          },
          {
            title: 'Menu',
            page: true,
            id: '/components/menu',
            description:
              'A Menu displays a list of navigational items. They are displayed either at the top of a screen, or at the side where space allows.',
            illustration: 'components/menu/menu-illustration',
          },
          {
            title: 'Scroll',
            page: true,
            id: '/components/scroll',
            description:
              'Enables a user to scroll a number of interface elements.',
            illustration: 'components/scroll-illustration',
          },
          {
            title: 'Tabs',
            page: true,
            id: '/components/tabs',
            description:
              'Allows users to alternate between views within the same context.',
            illustration: 'components/tabs-illustration',
          },
          {
            title: 'Tag',
            page: true,
            id: '/components/tag',
            description:
              'Used as a way of classifying content, typically using keywords. When clicked it will take a user to content of the same category.',
            illustration: 'components/tag-illustration',
          },
          {
            title: 'Title Bar',
            page: true,
            id: '/components/title-bar',
            description:
              'Provides context and actions related to a particular section of content that follows below on the screen.',
            illustration: 'components/title-bar-illustration',
          },
        ],
      },
      {
        title: 'Text',
        description: 'Components that display specific written content.',
        id: '/components/text',
        subNav: [
          {
            title: 'Byline',
            page: true,
            id: '/components/byline',
            description:
              'A small line of text which lists the authors of an article, along with their titles if provided.',
            illustration: 'components/byline-illustration',
          },
          {
            title: 'Caption',
            page: true,
            id: '/components/caption',
            description:
              'A sentence often added to an image or video to describe or explain what the image or video is showing.',
            illustration: 'components/caption-illustration',
          },
          {
            title: 'Date Time',
            page: true,
            id: '/components/date-time',
            description:
              'Element for displaying dates, usually publication dates on news articles.',
            illustration: 'components/date-time-illustration',
          },
          {
            title: 'Headline',
            page: true,
            id: '/components/headline',
            description:
              'A simple component that is comprised of two elements a Kicker, and a Heading.',
            illustration: 'components/heading-illustration',
          },
          {
            title: 'Ordered List',
            page: true,
            id: '/components/ordered-list',
            description: 'Typically is a numbered list of items.',
            illustration: 'components/ordered-list-illustration',
          },
          {
            title: 'Standfirst',
            page: true,
            id: '/components/standfirst',
            description:
              'An introductory paragraph in an article, which summarises the article’s content.',
            illustration: 'components/standfirst-illustration',
          },
          {
            title: 'Text Block',
            page: true,
            id: '/components/text-block',
            description:
              'Text block provides a simple way to display text. It supports text cropping, style presets, and typography presets.',
            illustration: 'components/text-block-illustration',
          },
          {
            title: 'Unordered List',
            page: true,
            id: '/components/unordered-list',
            description: 'Typically is a bulleted list of items.',
            illustration: 'components/unordered-list-illustration',
          },
        ],
      },
      {
        title: 'Third Party Integrations',
        description: 'Components that interact with a third-party service.',
        id: '/components/third-party',
        subNav: [
          {
            title: 'Consent',
            page: true,
            id: '/components/consent',
            description:
              'Non-visual component which embeds the consent management script.',
            illustration: 'components/hero-consent-illustration',
          },
          {
            title: 'Consent Settings Link',
            page: true,
            id: '/components/consent-settings-link',
            description:
              'A link which opens the consent manager dialog, requires the Consent component.',
            illustration: 'components/hero-consent-settings-illustration',
          },
          {
            title: 'Experimentation Web',
            page: true,
            id: '/components/experimentation-web',
            description:
              'Non-visual component which embeds the client-side experimentation script.',
            illustration: 'components/experimentation-illustration',
          },
          {
            title: 'Tealium',
            page: true,
            id: '/components/tealium',
            description:
              'Non-visual component which embeds the Tealium tag manager script.',
            illustration: 'components/hero-tealium-illustration',
          },
        ],
      },
      {
        title: 'Utilities',
        id: '/utils',
        subNav: [
          {
            title: 'Emotion',
            page: true,
            id: '/components/utils/emotion',
          },
          {
            title: 'customToNewsKitIcon',
            page: true,
            id: '/components/utils/custom-to-newskit-icon',
          },
          {
            title: 'getCssFromTheme',
            page: true,
            id: '/components/utils/get-css-from-theme',
          },
          {
            title: 'getFromTheme',
            page: true,
            id: '/components/utils/get-from-theme',
          },
          {
            title: 'getComponentDefaults',
            page: true,
            id: '/components/utils/get-defaults',
          },
          {
            title: 'Hooks',
            page: true,
            id: '/components/utils/hooks',
          },
        ],
      },
    ],
  },
  {
    title: 'Patterns',
    id: '/patterns',
    subNav: [
      {
        title: 'Overview',
        page: true,
        id: '/patterns/overview',
        indexPage: true,
        description:
          'Design patterns provide a framework for solving a particular user problem in a consistent, considered way.',
      },
      {
        title: 'Forms',
        id: '/patterns/forms',
        subNav: [
          {
            title: 'Overview',
            page: true,
            id: '/patterns/forms/overview',
            description: 'Forms are used to collect customer’s data.',
            illustration: 'patterns/forms/overview/hero',
          },
          {
            title: 'Best practice',
            page: true,
            id: '/patterns/forms/best-practice',
            description:
              'Help users to fill in forms quickly and accurately by following these industry best practices.',
            illustration: 'patterns/forms/best-practice/hero',
          },
          {
            title: 'Address',
            page: true,
            id: '/patterns/forms/address',
            description: `Use this type of data entry when there are clear business requirements to collect a user's address. Ask for a user’s physical address for delivery or as part of a billing service.`,
            illustration: 'patterns/forms/address/hero',
          },
          {
            title: 'Date of birth',
            page: true,
            id: '/patterns/forms/date-of-birth',
            description: `Ask for a user’s date of birth when we need to validate the user’s age. This should not be collected unless you have a need for it to validate a user’s age or benefit them in some way.`,
            illustration: 'patterns/forms/date-of-birth/hero',
          },
          {
            title: 'Date picker',
            page: true,
            id: '/patterns/forms/date-picker',
            description: `Use this data entry type when capturing a date that is in the future such as a delivery date or booking date.`,
            illustration: 'patterns/forms/date-picker/hero',
          },
          {
            title: 'Email address',
            page: true,
            id: '/patterns/forms/email-address',
            description: `Ask for a user’s email address to provide a service, to contact them directly, or as a unique way of identifying them.`,
            illustration: 'patterns/forms/email-address/hero',
          },
          {
            title: 'Gender/Sex/Title',
            page: true,
            id: '/patterns/forms/gender',
            description: `Use this component to collect a user’s gender.`,
            illustration: 'patterns/forms/gender/hero',
          },
          {
            title: 'Names',
            page: true,
            id: '/patterns/forms/names',
            description: `Ask for a user’s name when it is needed to provide a service.`,
            illustration: 'patterns/forms/names/hero',
          },
          {
            title: 'Passwords',
            page: true,
            id: '/patterns/forms/passwords',
            description: `Use a password entry field when asking users to create an account or log in.`,
            illustration: 'patterns/forms/passwords/hero',
          },
          {
            title: 'Payment/Billing',
            page: true,
            id: '/patterns/forms/payment',
            description: `Use the payment field when the business needs to take payment for a service.`,
            illustration: 'patterns/forms/payment/hero',
          },
          {
            title: 'Telephone number',
            page: true,
            id: '/patterns/forms/telephone-number',
            description: `Ask for a user’s telephone number when there is a clear business requirement.`,
            illustration: 'patterns/forms/telephone-number/hero',
          },
          {
            title: 'Input components',
            page: true,
            id: '/patterns/forms/input-components',
            description: `Use the right component for the type of data you’re collecting.`,
            illustration: 'patterns/forms/input-components/hero',
          },
        ],
      },
    ],
  },
];
