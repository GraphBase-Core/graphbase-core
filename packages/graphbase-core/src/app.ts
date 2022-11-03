#!/usr/bin/env node
import { TransformGraphQLSchema } from 'transform-graphql';
import { readSchemaFromFile, writeSchemaToFile, generateCRUD, generateStucco, writeModelToFile } from './IO';
import { transformerCRUD } from './transformerCRUD';
import { fieldsArray, models } from './data';

import yargs from 'yargs';

const generate = () => {
    const transformedSchema = TransformGraphQLSchema({
        schema: readSchemaFromFile(),
        transformers: [transformerCRUD],
    });

    writeSchemaToFile(transformedSchema);
    writeModelToFile(models);
    generateCRUD(fieldsArray);
    generateStucco(fieldsArray);
};
const argv = yargs(process.argv.slice(2)).argv as any;
console.log(argv.ship || './srv');

generate();

// yargs(process.argv.slice(2))
//     .usage('graphbase-core is library with generates backend resolvers based on GraphQL schema provided by user')
//     .command(
//         '$0',
//         'the default command',
//         (yargs) => {
//             console.log('yargs', yargs.argv);
//             yargs.options({
//                 inputSchema: {
//                     alias: 'i',
//                     default: './src',
//                     describe: 'chuj',
//                     requiresArg: true,
//                     type: 'string',
//                 },
//             });
//         },
//         async () => {
//             generate();
//         },
//     )
//     .version()
//     .strict()
// .parse();

export { mc } from './db/mongoDB/connection';
export { FieldResolveInput, FieldResolveOutput } from 'stucco-js';
export { makeHandler } from './makeHandler';
