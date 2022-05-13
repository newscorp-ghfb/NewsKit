cd codemods

// rename token
npx tsc codemod.ts && node codemod.js "../site/**/*.+(ts|tsx|json)" rename-token

//  remove or replace component
npx tsc codemod.ts && node codemod.js ./examples/remove-component.tsx remove-component

// rename prop
npx tsc codemod.ts && node codemod.js ./examples/rename-prop.tsx rename-prop

// rename overrides
npx tsc codemod.ts && node codemod.js ./examples/rename-overrides.tsx rename-overrides

// rename component defaults
npx tsc codemod.ts && node codemod.js ./examples/defaults.ts rename-defaults

