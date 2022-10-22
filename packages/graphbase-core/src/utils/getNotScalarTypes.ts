import { ScalarTypes } from 'graphql-js-tree';

const scalarTypes: string[] = [
    ScalarTypes.String,
    ScalarTypes.Boolean,
    ScalarTypes.Float,
    ScalarTypes.ID,
    ScalarTypes.Int,
    '[String]',
    '[Boolean]',
    '[Float]',
    '[ID]',
    '[Int]',
];
export const getNotScalarTypes = (typedFields: string) =>
    typedFields
        .split(`\n`)
        .filter((a) => a !== '')
        .map((b) => b.split(':')[1].trim().replace(/[\!]/g, ''))
        .filter((c) => !scalarTypes.includes(c));
