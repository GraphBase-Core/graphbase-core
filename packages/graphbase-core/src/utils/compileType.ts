import { FieldType, Options } from 'graphql-js-tree';

export const compileType = (f: FieldType, fn: (x: string) => string = (x) => x): string => {
    if (f.type === Options.name) {
        return fn(f.name);
    } else if (f.type === Options.array) {
        return compileType(f.nest, (x) => `[${fn(x)}]`);
    } else {
        return compileType(f.nest, (x) => `${fn(x)}!`);
    }
};
