import { FieldType, Options } from 'graphql-js-tree';

export const getTypeName = (f: FieldType): string => {
    if (f.type === Options.name) {
        return f.name;
    }
    return getTypeName(f.nest);
};
