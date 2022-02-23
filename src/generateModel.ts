import { writeModelToFile } from './IO';
import { graphQLTypesToTS } from './graphQLTypesToTS';
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
    const newObj: LooseObject = {};
    arrayWithTypes.map((i) => {
        const fieldTuple = i.split(':');
        newObj[fieldTuple[0]] = graphQLTypesToTS(fieldTuple[1]);
    });
    const model = `export type ${nameField}Model = ` + newStrigify(newObj);
    writeModelToFile(model);
};
