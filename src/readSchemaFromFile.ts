import fs from 'fs';
export const readSchemaFromFiles = (path?: string) => {
    const pathToSchema = path || 'schema.graphql';
    return fs.readFileSync(pathToSchema, 'utf-8');
};
