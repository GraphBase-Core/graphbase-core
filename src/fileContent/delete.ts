export const fillDeleteFile = (fildName: string) =>
    `import { FieldResolveInput } from 'stucco-js';

export default async (input: FieldResolveInput) => {
    console.log(input.arguments);
    return {person :{age: 12}};
};
`;
