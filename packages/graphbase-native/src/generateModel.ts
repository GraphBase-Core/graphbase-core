import { writeModelToFile } from './IO';
import { getTypesAndRelations } from './getTypesAndRelations';
import { fieldsArray, Relation } from './fieldsArray';

interface LooseObject {
    [key: string]: any;
}
type StructuredData = {
    [x: string]: string | StructuredData;
};

const newStrigify = (x: StructuredData): string => {
    return `{${Object.entries(x)
        .map(([key, val]) => `${key}:${typeof val === 'object' ? newStrigify(val) : val}`)
        .join(',\n')}}`;
};

export const generateModel = (typedFields: string, nameField: string) => {
    const arrayWithTypes = typedFields.split(/(\r\n|\n|\r)/gm).filter((i) => i !== '\n' && i !== '');
    const modelDetailsObject: LooseObject = {};
    modelDetailsObject['_id'] = 'string';
    const modelObject: LooseObject = {};
    const modelRelations: Relation[] = [];
    arrayWithTypes.map((i) => {
        const fieldTuple = i.split(':');
        const typesAndRelations = getTypesAndRelations(fieldTuple[1]);
        modelObject[fieldTuple[0]] = typesAndRelations.fildType;
        if (typesAndRelations.relationType) {
            modelRelations.push(typesAndRelations.relationType);
        }
    });
    fieldsArray.push({ field_name: nameField, relations: modelRelations });

    const model = `export type ${nameField}Model = ` + newStrigify(modelObject);
    const detailsModel = `export type ${nameField}ModelDetails = ` + newStrigify(modelDetailsObject);
    const modelWithId = `export type ${nameField}ModelWithId = ${nameField}ModelDetails & ${nameField}Model`;
    writeModelToFile(model);
    writeModelToFile(detailsModel);
    writeModelToFile(modelWithId);
};
