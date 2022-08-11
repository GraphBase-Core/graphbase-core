#!/usr/bin/env node
import { TransformGraphQLSchema } from 'transform-graphql';
import { readSchemaFromFiles, writeSchemaToFile, generateCRUD, generateStucco } from './IO';
import { transformerCRUD } from './transformerCRUD';
import { fieldsArray } from './fieldsArray';

const transformedSchema = TransformGraphQLSchema({
    schema: readSchemaFromFiles(),
    transformers: [transformerCRUD],
});
writeSchemaToFile(transformedSchema);
generateCRUD(fieldsArray);
console.log(fieldsArray);

generateStucco(fieldsArray);

export { mc } from './db/mongoDB/connection';
export { FieldResolveInput, FieldResolveOutput } from 'stucco-js';
export { makeHandler } from './makeHandler';
//relation inputs generate as type no like input
//implenet resolvers
