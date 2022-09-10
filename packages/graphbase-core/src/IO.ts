import { Field } from './fieldsArray';
import { generateStuccoJSON } from './fileContent/stucco';
import fs from 'fs';
import {
    fillCreateFile,
    fillDeleteFile,
    fillUpdateFile,
    fillReadAllFile,
    fillReadOneFile,
    fillSingleRelation,
    fillMultipleRelation,
} from './fileContent/index';

const fileCallback = (err: NodeJS.ErrnoException | null) => {
    if (err) {
        console.log(err);
        return;
    }
};

export interface Options {
    generatedDir?: string;
    stuccoJson?: string;
    schema?: string;
    stuccoConfig?: string;
}

export const readSchemaFromFiles = (path?: string) => {
    const pathToSchema = path || './input_schema.graphql';
    return fs.readFileSync(pathToSchema, 'utf-8');
};
export const writeSchemaToFile = (data: string, { schema = './schema.graphql' }: Options = {}) => {
    fs.writeFile(schema, data, fileCallback);
};

export const writeModelToFile = (model: string, { generatedDir = './src/generated' }: Options = {}) => {
    const outputDir = `${generatedDir}/model.ts`;
    fs.mkdirSync(generatedDir, { recursive: true });
    fs.appendFile(outputDir, model + '\n', fileCallback);
};

export const generateCRUD = (fieldTypeArray: Field[], { stuccoJson = './src/stucco' }: Options = {}) => {
    fieldTypeArray.map((fieldType) => {
        const outputDir = `${stuccoJson}/${fieldType.field_name}`;
        fs.mkdirSync(`${outputDir}`, { recursive: true });
        fs.writeFile(`${outputDir}/create.ts`, fillCreateFile(fieldType.field_name), fileCallback);
        fs.writeFile(`${outputDir}/update.ts`, fillUpdateFile(fieldType.field_name), fileCallback);
        fs.writeFile(`${outputDir}/delete.ts`, fillDeleteFile(fieldType.field_name), fileCallback);
        fs.writeFile(`${outputDir}/readAll.ts`, fillReadAllFile(fieldType.field_name), fileCallback);
        fs.writeFile(`${outputDir}/readOne.ts`, fillReadOneFile(fieldType.field_name), fileCallback);

        // does it make sense that i spread it to diffrent resolvers based on relation
        // fetch always using find() and return array with length 1 when is single relation?
        fieldType.relations?.map((rel) => {
            if (rel.type === 'MANY') {
                fs.writeFile(`${outputDir}/${rel.relation_name}.ts`, fillMultipleRelation, fileCallback);
            } else if (rel.type === 'SINGLE') {
                fs.writeFile(`${outputDir}/${rel.relation_name}.ts`, fillSingleRelation, fileCallback);
            }
        });
    });
};

export const generateStucco = (fieldNameArray: Field[], { stuccoConfig = './stucco.json' }: Options = {}) => {
    fs.writeFile(stuccoConfig, generateStuccoJSON(fieldNameArray), fileCallback);
};
