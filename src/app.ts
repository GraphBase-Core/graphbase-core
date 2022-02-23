import { readSchemaFromFiles } from './readSchemaFromFile';
import { transformerCRUD } from './transformerCRUD';
import { TransformGraphQLSchema } from 'transform-graphql';

const transformedSchema = TransformGraphQLSchema({
    schema: readSchemaFromFiles(),
    transformers: [transformerCRUD],
});

console.log('transformedSchema', transformedSchema);
