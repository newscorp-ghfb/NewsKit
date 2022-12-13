// generate schema from typescript types
const tsj = require('ts-json-schema-generator');
const fs = require('fs');

const output_path = 'some-type.schema.json';
/** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
const config = {
  path: 'dist/esm/index.d.ts',
  tsconfig: 'tsconfig.json',
  type: 'FlagProps', // "*" for all types
};
const schemaGenerator = tsj.createGenerator(config);
const schema = schemaGenerator.createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
fs.writeFileSync(output_path, schemaString);
