import React from 'react';
import {Link} from '../components/link';

export const INK_DESCRIPTION = {
  inkBase: 'Body and paragraph text',
  inkSubtle: 'Subheadlines, labels and supporting copy',
  inkContrast: 'Headlines or copy where emphasis is needed',
  inkNonEssential: 'Text elements in their inactive (disabled) state',
  inkLight010:
    'Used when the same light colour value is required for all colour themes',
  inkDark010:
    'Used when the same dark colour value is required for all colour themes',
  inkInverse: 'Used when contrast with the background can’t be achieved',
  inkPositive: (
    <>
      Text and icons for success messages
      <br />
      <br />
      Feedback notifications (valid) (e.g. assistive text in a{' '}
      <Link href="/components/text-field/">text field</Link>
    </>
  ),
  inkNegative: (
    <>
      Text and icons for error messages
      <br />
      <br />
      Feedback notifications (invalid) (e.g. assistive text in a{' '}
      <Link href="/components/text-field/">text field</Link>)
    </>
  ),
  inkNotice: 'Text and icons for notice messages',
  inkInformative: 'Text and icons for informative messages',
  inkBrand010: (
    <>
      Prominent brand colour applied to text and icons (e.g. icons in outlined{' '}
      <Link href="/components/button/">buttons</Link>)
    </>
  ),
  inkBrand020: 'Brand colour complimentary to inkBrand010',
};

export const INTERFACE_DESCRIPTION = {
  interfaceBackground: 'Page backgrounds',
  interface010: (
    <>
      Component backgrounds (e.g <Link href="/components/card/">card</Link>)
    </>
  ),
  interface020: 'Extended scale of component backgrounds',
  interface030: 'Extended scale of component backgrounds',
  interface040: 'Extended scale of component backgrounds',
  interface050: 'Extended scale of component backgrounds',
  interface060: 'Component backgrounds of contrasting colours',
  interfaceInformative010: (
    <>
      Background for informative messages
      <br />
      <br />
      Feedback notifications (e.g.{' '}
      <Link href="/components/banner/">banner</Link>,{' '}
      <Link href="/components/flag/">flag</Link>,{' '}
      <Link href="/components/inline-message/">inline message</Link>
      )
      <br />
      <br />
      <Link href="/components/toast/">Toast</Link> component backgrounds
    </>
  ),
  interfaceInformative020:
    'Interface colour complimentary to interfaceInformative010',
  interfaceNotice010: 'Background for notice or warning messages',
  interfaceNotice020: 'Interface colour complimentary to interfaceNotice010',
  interfaceNegative010: 'Background for success messages',
  interfaceNegative020:
    'Interface colour complimentary to interfaceNegative010',
  interfacePositive010: 'Background for error messages',
  interfacePositive020:
    'Interface colour complimentary to interfacePositive010',
  interfaceSkeleton010:
    'Background for a skeleton (loading) state of a component',
  interfaceSkeleton020:
    'Interface colour complimentary to interfaceSkeleton010',
  interfaceNeutral010: 'Background for neutral messages',
  interfaceNeutral020: 'Interface colour complimentary to interfaceNeutral010',
  interfaceBrand010:
    'Prominent brand colour applied to backgrounds, e.g. headers, footers',
  interfaceBrand020: 'Brand colour complimentary to interfaceBrand010',
};

export const INTERACTIVE_DESCRIPTION = {
  interactivePrimary010: (
    <>
      Background colour applied to the hover state of the outlined & minimal{' '}
      <Link href="/components/button/">button</Link>
    </>
  ),
  interactivePrimary020: 'Visited state',
  interactivePrimary030: 'Focus tabbing',
  interactivePrimary040: (
    <>
      Background colour applied to the hover state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactivePrimary050: (
    <>
      Background colour applied to the active state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactiveSecondary010: (
    <>
      Background colour applied to the Hover state of the outlined & minimal{' '}
      <Link href="/components/button/">button</Link>
    </>
  ),
  interactiveSecondary020: (
    <>
      Background colour applied to the loading state of all{' '}
      <Link href="/components/button/">buttons</Link>, & the active state of the
      outlined & minimal button
    </>
  ),
  interactiveSecondary030: (
    <>
      Background colour applied to the Base state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactiveSecondary040: (
    <>
      Background colour applied to the hover state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactiveSecondary050: (
    <>
      Background colour applied to the active state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactivePositive010: (
    <>
      Background colour applied to the hover state of the outlined & minimal{' '}
      <Link href="/components/button/">button</Link>
    </>
  ),
  interactivePositive020: (
    <>
      Background colour applied to the loading state of all{' '}
      <Link href="/components/button/">buttons</Link>, & the active state of the
      outlined & minimal button
    </>
  ),
  interactivePositive030: (
    <>
      Background colour applied to the base state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactivePositive040: (
    <>
      Background colour applied to the hover state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactivePositive050: (
    <>
      Background colour applied to the active state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactiveNegative010: (
    <>
      Background colour applied to the hover state of the outlined & minimal{' '}
      <Link href="/components/button/">button</Link>
    </>
  ),
  interactiveNegative020: (
    <>
      Background colour applied to the loading state of all{' '}
      <Link href="/components/button/">buttons</Link>, & the active state of the
      outlined & minimal button
    </>
  ),
  interactiveNegative030: (
    <>
      Background colour applied to the base state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactiveNegative040: (
    <>
      Background colour applied to the Hover state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactiveNegative050: (
    <>
      Background colour applied to the active state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactiveInput010: (
    <>
      Background colour applied to the hover state of the{' '}
      <Link href="/components/text-field/">text field</Link>, & the select
      component button, & the list item
    </>
  ),
  interactiveInput020:
    'Background & border colours applied to the unselected state of the switch, the checkbox, & radio components',
  interactiveInput030:
    'Background colour applied to the ‘feedback’ of the checkbox, & radio components',
  interactiveInput040:
    'Background & border colours applied to the Selected state of the Switch, the checkbox, & radio components',
  interactiveInput050:
    'Active state background and border for selection controls, and input components',
  interactiveInverse010: (
    <>
      Background colour applied to the hover state of the outlined & minimal{' '}
      <Link href="/components/button/">button</Link>
    </>
  ),
  interactiveInverse020: (
    <>
      Background colour applied to the loading state of all{' '}
      <Link href="/components/button/">buttons</Link>, & the active state of the
      outlined & minimal button
    </>
  ),
  interactiveInverse030: (
    <>
      Background colour applied to the Base state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactiveInverse040: (
    <>
      Background colour applied to the hover state of the Solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactiveInverse050: (
    <>
      Background colour applied to the active state of the solid{' '}
      <Link href="/components/button/">button</Link>, & the border colour of the
      outlined button
    </>
  ),
  interactiveDisabled010: 'Disabled state',
  interactiveVisited010: 'Visited state',
  interactiveFocus010: 'Focus tabbing',
};
