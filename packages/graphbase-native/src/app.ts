#!/usr/bin/env node
import { TransformGraphQLSchema } from 'transform-graphql';
import { readSchemaFromFiles, writeSchemaToFile, generateCRUD, generateStucco } from './IO';
import { transformerCRUD } from './transformerCRUD';
import { fieldNamesArray } from './fieldNames';

const transformedSchema = TransformGraphQLSchema({
    schema: readSchemaFromFiles(),
    transformers: [transformerCRUD],
});
writeSchemaToFile(transformedSchema);
generateCRUD(fieldNamesArray);
generateStucco(fieldNamesArray);

export { mc } from './db/mongoDB/connection';
export { FieldResolveInput, FieldResolveOutput } from 'stucco-js';
export { makeHandler } from './makeHandler';
