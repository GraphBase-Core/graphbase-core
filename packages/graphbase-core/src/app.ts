#!/usr/bin/env node
import { TransformGraphQLSchema } from 'transform-graphql';
import yargs from 'yargs';
import { readSchemaFromFile, writeSchemaToFile, generateCRUD, generateStucco, writeModelToFile } from './IO';
import { transformerCRUD } from './transformerCRUD';
import { fieldsArray, models } from './data';

const generate = async () => {
    const argv = await yargs(process.argv.slice(2)).options({
        inputSchema: { type: 'string', default: './input_schema.graphql' },
    }).argv;

    const transformedSchema = TransformGraphQLSchema({
        schema: readSchemaFromFile(argv.inputSchema),
        transformers: [transformerCRUD],
    });

    writeSchemaToFile(transformedSchema);
    writeModelToFile(models);
    generateCRUD(fieldsArray);
    generateStucco(fieldsArray);
};

generate();

export { mc } from './db/mongoDB/connection';
export { FieldResolveInput, FieldResolveOutput } from 'stucco-js';
export { makeHandler } from './makeHandler';
