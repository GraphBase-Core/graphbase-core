#!/usr/bin/env node
import { readSchemaFromFiles, writeSchemaToFile } from './IO';
import { transformerCRUD } from './transformerCRUD';
import { TransformGraphQLSchema } from 'transform-graphql';

const transformedSchema = TransformGraphQLSchema({
    schema: readSchemaFromFiles(),
    transformers: [transformerCRUD],
});
writeSchemaToFile(transformedSchema);

export { mc } from './db/mongoDB/connection';
export { FieldResolveInput, FieldResolveOutput } from 'stucco-js';
