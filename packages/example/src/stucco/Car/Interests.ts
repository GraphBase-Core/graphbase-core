import { FieldResolveInput } from 'stucco-js';
export const handler = (input: FieldResolveInput) => {
  console.log(input.source);
};
