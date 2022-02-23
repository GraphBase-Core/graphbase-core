import { readSchemaFromFiles, writeSchemaToFile } from './IO';
import { transformerCRUD } from './transformerCRUD';
import { TransformGraphQLSchema } from 'transform-graphql';

const transformedSchema = TransformGraphQLSchema({
    schema: readSchemaFromFiles(),
    transformers: [transformerCRUD],
});
writeSchemaToFile(transformedSchema);
