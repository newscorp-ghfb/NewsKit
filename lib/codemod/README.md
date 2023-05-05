# Codemods for NewsKit

NewsKit provides Codemod transformations to help upgrade your codebase when a component is updated or deprecated.

Codemods are transformations that run on your codebase programmatically. This allows for a large amount of changes to be applied without having to manually go through every file.

## Usage

You can run these at the root of your project.

```bash
npx @newskit/codemod [codemod] [paths]
```

run to see all codemods and flags

```bash
npx @newskit/codemod --help
```

## v7.0.0
The following transformers are available when upgrading to v7:

- [`audio-player-play-pause-button`](#audio-player-play-pause-button)
- [`all-default`](#all-default)
- [`replace-space-inset-props-and-overrides`](#replace-space-inset-props-and-overrides)

#### `audio-player-play-pause-button`

There are changes to the default styling of the AudioPlayer component in v7.

Run this codemod if you would like to apply manual overrides to keep the old default styling.

```diff
- <AudioPlayerPlayPauseButton />

+ <AudioPlayerPlayPauseButton size="large" />
```

#### `all-default`

Run this codemod if you would like to apply manual overrides to the keep the old default for all components listed above.

#### `replace-space-inset-props-and-overrides`

spaceInset prop was marked as deprecated and has now been removed in V7. 

Run this codemod if you would like to apply logical props instead.

```diff
- <Flag overrides={{spaceInset: "space060"}}>Flag</Flag>

+ <Flag overrides={{paddingBlock: "space060", paddingInline: "space060"}}>Flag</Flag>
```

```diff
- <Block spaceInset="space020" stylePreset="inkContrast">Block</Block>

+ <Block stylePreset="inkContrast" paddingBlock="space020" paddingInline="space020">Block</Block>
```

### `popover`

The Popover component has a renamed override prop - from distance to offset

The script replace the override prop `distance` with `offset`


```diff
- <Popover overrides={{distance: 'space020'}>Content</Popover>

+ <Popover overrides={{offset: 'space020'}>Content</Popover>
```

### `tooltip`

The Tooltip component has a renamed override prop - from distance to offset

The script replace the override prop `distance` with `offset`

```diff
- <Tooltip overrides={{distance: 'space020'}>Content</Tooltip>

+ <Tooltip overrides={{offset: 'space020'}>Content</Tooltip>
```

### `caption-inset`

CaptionInset has been removed in favour of Caption. Using this script the same functionality can be achieve by adding paddingBlock and paddingInline as overrides.

```diff
- <CaptionInset />

+ <Caption overrides={{paddingBlock:  "space040",  paddingInline: "space040"}} />
```




## v6.0.0
The following transformers are available when upgrading to v6:

- [`emotion-icons`](#emotion-icons)
- [`remove-redundant-marker-ul`](#remove-redundant-marker-ul)
- [`update-list-item-marker-ul-value`](#update-list-item-marker-ul-value)
- [`enum-to-union`](#enum-to-union)
- [`update-linkinline`](#update-linkinline)
- [`update-linkstandalone`](#update-linkstandalone)


#### `emotion-icons`
Imports and transform `newskit` icons to `emotion-icons`;

```diff
- import { IconFilledAccountTree } from 'newskit';
+ import { toNewsKitIcon } from 'newskit';
+ import {AccountTree as FilledAccountTree} from '@emotion-icons/material/AccountTree';
+ const IconFilledAccountTree = toNewsKitIcon(FilledAccountTree);
```

```sh
npx @newskit/codemod v6.0.0/emotion-icons [path]
// example
npx @newskit/codemod v6.0.0/emotion-icons 'components/**/*.+(ts|tsx|js|jsx)'
```

#### `remove-redundant-marker-ul`

Unordered List has now a default marker, removes the prop passing the same icon now set as default.

```diff
-  <UnorderedList listItemMarker={IconFilledCircle}>{listData}</UnorderedList>
+  <UnorderedList >{listData}</UnorderedList>
```

#### `update-list-item-marker-ul-value`

Unordered List has now a default marker, the script passes `listItemMarker` with a value of `null` to UnorderedList components originally not passing any marker.

```diff
-   <UnorderedList></UnorderedList>
+    <UnorderedList listItemMarker={null}></UnorderedList>
```

#### `enum-to-union`

Some of NewsKit components support enum as the prop type, the script remove the imports of enum and replace enum type with union type.

```diff
-   <Button size={ButtonSize.Small}>Button</Button>
+   <Button size="small">Button</Button>
```

#### `update-linkinline`

Updates deprecated Link component to LinkInline.
LinkInline is used within paragraphs or sentences to link to different content on the same page or other pages.

```diff
-  import {Link} from 'newskit';
- <Link href={'www.google.com'}>Click on me</Link>;

+    import {LinkInline} from 'newskit';
+  <LinkInline href={'www.google.com'}>Click on me</LinkInline>;
```

#### `update-linkstandalone`

Updates deprecated Link component to LinkStandalone.
LinkStandalone is used outside of body content, for example within navigational components such as menus, headers and footers.

```diff
-  import {Link} from 'newskit';
- <Link href={'www.google.com'}>Click on me</Link>;

+    import {LinkStandalone} from 'newskit';
+  <LinkStandalone href={'www.google.com'}>Click on me</LinkStandalone>;
```

## Development

### Setup
```bash
yarn install
```

### Link
Link this package in your global `node_modules` by running:

```bash
cd lib/codemod
yarn link
```

### Usage
Run the codemod package locally:
```bash
newskit-codemod [codemod [path]
```
