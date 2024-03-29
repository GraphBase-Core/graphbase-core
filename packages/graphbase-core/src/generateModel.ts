import { getTypesAndRelations } from './getTypesAndRelations';
import { models } from './data';

type StructuredData = {
    [x: string]: string | StructuredData;
};

const newStringify = (x: StructuredData): string => {
    return `{${Object.entries(x)
        .map(([key, val]) => `${key}:${typeof val === 'object' ? newStringify(val) : val}`)
        .join(',\n')}}`;
};

export const generateModel = (typedFields: string, nameField: string) => {
    const arrayWithTypes = typedFields.split(/(\r\n|\n|\r)/gm).filter((i) => i !== '\n' && i !== '');
    const modelObject: Record<string, any> = {};
    const updateModelObject: Record<string, any> = {};
    const createModelObject: Record<string, any> = {};

    arrayWithTypes.forEach((i) => {
        const fieldTuple = i.split(':');
        modelObject[fieldTuple[0]] = getTypesAndRelations(fieldTuple[1], false);
        createModelObject[fieldTuple[0]] = getTypesAndRelations(fieldTuple[1], true);
        updateModelObject[fieldTuple[0]] = getTypesAndRelations(fieldTuple[1].replace(/!$/, ''), true);
    });
    const idType = '{_id: string}';
    const model = `export type ${nameField}Model = ` + newStringify(modelObject);
    const createModel = `export type ${nameField}CreateModel = ` + newStringify(createModelObject);
    const updateModel = `export type ${nameField}UpdateModel = ` + newStringify(updateModelObject);
    const modelWithId = `export type ${nameField}ModelWithId = ${nameField}Model & ${idType}`;
    models.push(model, createModel, updateModel, modelWithId);
};
