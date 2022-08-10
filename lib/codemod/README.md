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



## Included scripts
The list includes these transformers

- [`emotion-icons`](#emotion-icons)
- [`remove-redundant-marker-ul`](#remove-redundant-marker-ul)
- [`update-list-item-marker-ul-value`](#update-list-item-marker-ul-value)


#### `emotion-icons`
Imports and transform `newskit` icons to `emotion-icons`;

```diff
- import { IconFilledAccountTree } from 'newskit';
+ import { toNewsKitIcon } from 'newskit';
+ import {AccountTree as FilledAccountTree} from '@emotion-icons/material/AccountTree';
+ const IconFilledAccountTree = toNewsKitIcon(FilledAccountTree);
```

```sh
npx @newskit/codemod emotion-icons [path]
// example
npx @newskit/codemod emotion-icons 'components/**/*.+(ts|tsx|js|jsx)' 
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
