#!/usr/bin/env node
import { TransformGraphQLSchema } from 'transform-graphql';
import { readSchemaFromFiles, writeSchemaToFile, generateCRUD, generateStucco, writeModelToFile } from './IO';
import { transformerCRUD } from './transformerCRUD';
import { fieldsArray, models } from './data';

const transformedSchema = TransformGraphQLSchema({
    schema: readSchemaFromFiles(),
    transformers: [transformerCRUD],
});

writeSchemaToFile(transformedSchema);
writeModelToFile(models);
generateCRUD(fieldsArray);
generateStucco(fieldsArray);

export { mc } from './db/mongoDB/connection';
export { FieldResolveInput, FieldResolveOutput } from 'stucco-js';
export { makeHandler } from './makeHandler';
//implenet multiple resolvers
//change update inputs
