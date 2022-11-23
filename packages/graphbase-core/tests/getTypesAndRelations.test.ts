import { test, expect } from '@jest/globals';
import { getTypesAndRelations } from '../src/getTypesAndRelations';

test('convert graphQL required String type to typescript type', () => {
    const graphQLType = `String!`;
    const expectedResult = 'string';
    const result = getTypesAndRelations(graphQLType, false);
    expect(result).toBe(expectedResult);
});

test('convert graphQL non-required String type to typescript type', () => {
    const graphQLType = `String`;
    const expectedResult = 'string | undefined';
    const result = getTypesAndRelations(graphQLType, false);
    expect(result).toBe(expectedResult);
});

test('convert graphQL required String and non-required array type to typescript type', () => {
    const graphQLType = `[String!]`;
    const expectedResult = '[string] | undefined';
    const result = getTypesAndRelations(graphQLType, false);
    expect(result).toBe(expectedResult);
});

test('convert graphQL non-required String and required array type to typescript type', () => {
    const graphQLType = `[String]!`;
    const expectedResult = '[string | undefined]';
    const result = getTypesAndRelations(graphQLType, false);
    expect(result).toBe(expectedResult);
});

test('convert graphQL non-required String and non-required array type to typescript type', () => {
    const graphQLType = `[String]`;
    const expectedResult = '[string | undefined] | undefined';
    const result = getTypesAndRelations(graphQLType, false);
    expect(result).toBe(expectedResult);
});

test('convert graphQL required String and required array type to typescript type', () => {
    const graphQLType = `[String!]!`;
    const expectedResult = '[string]';
    const result = getTypesAndRelations(graphQLType, false);
    expect(result).toBe(expectedResult);
});

test('convert non-required user type to typescript type, isMutationType: false', () => {
    const graphQLType = `Interest`;
    const expectedResult = 'InterestModelWithId | undefined';
    const result = getTypesAndRelations(graphQLType, false);
    expect(result).toBe(expectedResult);
});

test('convert non-required user type to typescript type, isMutationType: true', () => {
    const graphQLType = `Interest`;
    const expectedResult = 'string | undefined';
    const result = getTypesAndRelations(graphQLType, true);
    expect(result).toBe(expectedResult);
});
