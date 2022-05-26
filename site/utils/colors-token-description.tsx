import React from 'react';
import {Link} from '../components/link';

export const INK_DESCRIPTION = {
  inkBase: 'Body and paragraph text',
  inkSubtle: 'Subheadlines, labels, secondary copy',
  inkContrast: 'Headlines',
  inkNonEssential: 'Text and icons that are in an inactive (disabled) state',
  inkInverse:
    'Text and icons that where the contrast between the background cannot be achieved ',
  inkPositive: (
    <>
      Text and icons for success messages, & feedback notifications (valid) e.g.
      assistive text in a <Link href="/components/text-field/">Text Field</Link>
    </>
  ),
  inkNegative: (
    <>
      Text and icons for error messages, & feedback notifications (invalid) e.g.
      assistive text in a <Link href="/components/text-field/">Text Field</Link>
    </>
  ),
  inkNotice:
    'Text and icons for notice or warning messages, & feedback notifications',
  inkInformative: (
    <>
      Text and icons for informative messages, & feedback notifications e.g.{' '}
      <Link href="/components/inline-message/">Inline Message</Link>, Tooltips,
      & Popovers
    </>
  ),
  inkBrand010: (
    <>
      Prominent brand colour applied to text and icons. E.g. icons in outlined{' '}
      <Link href="/components/button/">Buttons</Link>
    </>
  ),
  inkBrand020: 'Brand colour complimentary to inkBrand010',
};

export const INTERFACE_DESCRIPTION = {
  interfaceBackground: 'Page background',
  interface010: (
    <>
      Component backgrounds e.g. <Link href="/components/card/">Card</Link>{' '}
      background
    </>
  ),
  interface020: 'Extended scale of component backgrounds',
  interface030: 'Extended scale of component backgrounds',
  interface040: 'Extended scale of component backgrounds',
  interface050: 'Extended scale of component backgrounds',
  interface060: 'Component backgrounds of contrasting colours',
  interfaceInformative010: (
    <>
      Background (high contrast in a light theme, and low contrast in a dark
      theme) for informative messages, & feedback notifications e.g.{' '}
      <Link href="/components/banner/">Banner</Link>,{' '}
      <Link href="/components/flag/">Flag</Link>,{' '}
      <Link href="/components/inline-message/">Inline Message</Link>, &{' '}
      <Link href="/components/toast/">Toast</Link> component backgrounds
    </>
  ),
  interfaceInformative020: (
    <>
      Background (low contrast in a light theme, and high contrast in a dark
      theme) for informative messages, & feedback notifications e.g. for{' '}
      <Link href="/components/inline-message/">Inline Message</Link> component
      backgrounds
    </>
  ),
  interfaceNotice010: (
    <>
      Background (high contrast in a light theme, and low contrast in a dark
      theme) for notice or warning messages, & feedback notifications e.g.{' '}
      <Link href="/components/banner/">Banner</Link>,{' '}
      <Link href="/components/flag/">Flag</Link>, &{' '}
      <Link href="/components/toast/">Toast</Link> backgrounds
    </>
  ),
  interfaceNotice020:
    'Background (low contrast in a light theme, and high contrast in a dark theme) for notice or warning messages, & feedback notifications',
  interfaceNegative010: (
    <>
      Background (high contrast in a light theme, and low contrast in a dark
      theme) for error messages, & feedback notifications e.g.{' '}
      <Link href="/components/banner/">Banner</Link>,{' '}
      <Link href="/components/flag/">Flag</Link>,{' '}
      <Link href="/components/inline-message/">Inline Message</Link>, &{' '}
      <Link href="/components/toast/">Toast</Link> component backgrounds
    </>
  ),
  interfaceNegative020: (
    <>
      Background (low contrast in a light theme, and high contrast in a dark
      theme) for error messages, & feedback notifications e.g. for{' '}
      <Link href="/components/inline-message/">Inline Message</Link> component
      backgrounds
    </>
  ),
  interfacePositive010: (
    <>
      Background (high contrast in a light theme, and low contrast in a dark
      theme) for success messages, & feedback notifications e.g.{' '}
      <Link href="/components/banner/">Banner</Link>,{' '}
      <Link href="/components/flag/">Flag</Link>,{' '}
      <Link href="/components/inline-message/">Inline Message</Link>, &{' '}
      <Link href="/components/toast/">Toast</Link> component backgrounds
    </>
  ),
  interfacePositive020:
    'Background (low contrast in a light theme, and high contrast in a dark theme) for success messages, & feedback notifications',
  interfaceSkeleton010:
    'Background (high contrast in a light theme, and low contrast in a dark theme) to indicate the skeleton (loading) state of a component',
  interfaceSkeleton020:
    'Background (low contrast in a light theme, and high contrast in a dark theme) to indicate the skeleton (loading) state of a component',
  interfaceNeutral010: (
    <>
      Background (high contrast in a light theme, and low contrast in a dark
      theme) for neutral messages, & feedback notifications e.g.{' '}
      <Link href="/components/banner/">Banner</Link>,{' '}
      <Link href="/components/flag/">Flag</Link>,{' '}
      <Link href="/components/inline-message/">Inline Message</Link>, &{' '}
      <Link href="/components/toast/">Toast</Link> component backgrounds
    </>
  ),
  interfaceNeutral020:
    'Background (low contrast in a light theme, and high contrast in a dark theme) for neutral messages, & feedback notifications',
  interfaceBrand010:
    'Prominent brand colour applied to backgrounds e.g. a footer, or header',
  interfaceBrand020: 'Brand colour complimentary to interfaceBrand010',
};

export const INTERACTIVE_DESCRIPTION = {
  interactivePrimary010: (
    <>
      Background colour applied to the Hover state of the Outlined & Minimal{' '}
      <Link href="/components/button/">Button</Link>
    </>
  ),
  interactivePrimary020: (
    <>
      Background colour applied to the Loading state of all{' '}
      <Link href="/components/button/">Buttons</Link>, & the Active state of the
      Outlined & Minimal Button
    </>
  ),
  interactivePrimary030: (
    <>
      Background colour applied to the Base state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactivePrimary040: (
    <>
      Background colour applied to the Hover state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactivePrimary050: (
    <>
      Background colour applied to the Active state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactiveSecondary010: (
    <>
      Background colour applied to the Hover state of the Outlined & Minimal{' '}
      <Link href="/components/button/">Button</Link>
    </>
  ),
  interactiveSecondary020: (
    <>
      Background colour applied to the Loading state of all{' '}
      <Link href="/components/button/">Buttons</Link>, & the Active state of the
      Outlined & Minimal Button
    </>
  ),
  interactiveSecondary030: (
    <>
      Background colour applied to the Base state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactiveSecondary040: (
    <>
      Background colour applied to the Hover state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactiveSecondary050: (
    <>
      Background colour applied to the Active state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactivePositive010: (
    <>
      Background colour applied to the Hover state of the Outlined & Minimal{' '}
      <Link href="/components/button/">Button</Link>
    </>
  ),
  interactivePositive020: (
    <>
      Background colour applied to the Loading state of all{' '}
      <Link href="/components/button/">Buttons</Link>, & the Active state of the
      Outlined & Minimal Button
    </>
  ),
  interactivePositive030: (
    <>
      Background colour applied to the Base state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactivePositive040: (
    <>
      Background colour applied to the Hover state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactivePositive050: (
    <>
      Background colour applied to the Active state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactiveNegative010: (
    <>
      Background colour applied to the Hover state of the Outlined & Minimal{' '}
      <Link href="/components/button/">Button</Link>
    </>
  ),
  interactiveNegative020: (
    <>
      Background colour applied to the Loading state of all{' '}
      <Link href="/components/button/">Buttons</Link>, & the Active state of the
      Outlined & Minimal Button
    </>
  ),
  interactiveNegative030: (
    <>
      Background colour applied to the Base state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactiveNegative040: (
    <>
      Background colour applied to the Hover state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactiveNegative050: (
    <>
      Background colour applied to the Active state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactiveInput010: (
    <>
      Background colour applied to the Hover state of the{' '}
      <Link href="/components/text-field/">Text Field</Link>, & the Select
      component button, & the list item
    </>
  ),
  interactiveInput020:
    'Background & border colours applied to the Unselected state of the  Switch, the Checkbox, & Radio components',
  interactiveInput030:
    'Background colour applied to the ‘Feedback’ of the Checkbox, & Radio components',
  interactiveInput040:
    'Background & border colours applied to the Selected state of the Switch, the Checkbox, & Radio components',
  interactiveInput050:
    'Active state background and border for selection controls, and input components',
  interactiveInverse010: (
    <>
      Background colour applied to the Hover state of the Outlined & Minimal{' '}
      <Link href="/components/button/">Button</Link>
    </>
  ),
  interactiveInverse020: (
    <>
      Background colour applied to the Loading state of all{' '}
      <Link href="/components/button/">Buttons</Link>, & the Active state of the
      Outlined & Minimal Button
    </>
  ),
  interactiveInverse030: (
    <>
      Background colour applied to the Base state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactiveInverse040: (
    <>
      Background colour applied to the Hover state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactiveInverse050: (
    <>
      Background colour applied to the Active state of the Solid{' '}
      <Link href="/components/button/">Button</Link>, & the border colour of the
      Outlined Button
    </>
  ),
  interactiveDisabled010: 'Disabled state',
  interactiveVisited010: 'Visited state',
  interactiveFocus010: 'Focus tabbing',
};
