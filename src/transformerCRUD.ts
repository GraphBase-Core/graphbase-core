import { TransformerDef } from 'transform-graphql';

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
        return `
        input Create${field.name}{
            ${field.args.map((a) => `${a.name}: ${a.type.name}`)}
        }
        input Update${field.name}{
            ${field.args.map((a) => `${a.name}: ${a.type.name}`)}
        }
        input Details${field.name}{
            id: String!
        }
        type ${field.name}Query{
            list: [${field.name}!]!
            getByDetails(details: Details${field.name}): ${field.name}
        }
        type ${field.name}Mutation{
            create( ${field.name[0].toLowerCase() + field.name.slice(1)}: Create${field.name} ): String!
            update( ${field.name[0].toLowerCase() + field.name.slice(1)}: Update${field.name}, details: Details${
            field.name
        } ): String!
            remove( details: Details${field.name} ): String!
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
