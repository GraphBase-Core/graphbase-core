import { FieldType, Options, TreeToGraphQL } from 'graphql-js-tree';
import { TransformerDef } from 'transform-graphql';
import { generateModel } from './generateModel';

export const getTypeName = (f: FieldType): string => {
    if (f.type === Options.name) {
        return f.name;
    }
    return getTypeName(f.nest);
};

export const compileType = (f: FieldType, fn: (x: string) => string = (x) => x): string => {
    if (f.type === Options.name) {
        return fn(f.name);
    } else if (f.type === Options.array) {
        return compileType(f.nest, (x) => `[${fn(x)}]`);
    } else {
        return compileType(f.nest, (x) => `${fn(x)}!`);
    }
};

export const transformerCRUD: TransformerDef = {
    transformer: ({ field, operations }) => {
        if (!field.args) {
            throw new Error('Model can be used only for types');
        }
        if (!operations.query) {
            throw new Error('Query type required');
        }
        if (!operations.mutation) {
            throw new Error('Query type required');
        }
        const typedFields = TreeToGraphQL.parse({ nodes: field.args });
        generateModel(typedFields, field.name);
        return `
        input Create${field.name}{
            ${typedFields}
        }
        input Update${field.name}{
            ${typedFields}
        }
        input Details${field.name}{
            _id: String!
        }
        type ${field.name}WithId{
            _id: String!
            ${typedFields}
        }
        type ${field.name}Query{
            readAll: [${field.name}WithId!]!
            readOne(details: Details${field.name}): ${field.name}WithId
        }
        type ${field.name}Mutation{
            create( ${field.name[0].toLowerCase() + field.name.slice(1)}: Create${field.name} ): String!
            update( ${field.name[0].toLowerCase() + field.name.slice(1)}: Update${field.name}, details: Details${
            field.name
        } ): Boolean!
            delete( details: Details${field.name} ): Boolean!
        }
        extend type ${operations.query.name}{
            ${field.name[0].toLowerCase() + field.name.slice(1)}: ${field.name}Query
        }
        extend type ${operations.mutation.name}{
            ${field.name[0].toLowerCase() + field.name.slice(1)}: ${field.name}Mutation
        }
        `;
    },
    directiveName: 'model',
};
