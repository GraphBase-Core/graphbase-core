import { Field } from './data';
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
    stuccoConfig?: string;
    pathToInputSchema?: string;
    pathToOutputSchema?: string;
}

export const readSchemaFromFile = ({ pathToInputSchema = './input_schema.graphql' }: Options = {}) => {
    return fs.readFileSync(pathToInputSchema, 'utf-8');
};
export const writeSchemaToFile = (data: string, { pathToOutputSchema = './schema.graphql' }: Options = {}) => {
    fs.writeFile(pathToOutputSchema, data, fileCallback);
};

export const writeModelToFile = (models: string[]) => {
    const modelsDir = './src/models';
    const outputDir = `${modelsDir}/models.ts`;
    fs.mkdirSync(modelsDir, { recursive: true });
    let allModels = '/* DO NOT EDIT - generated */\n';
    models.forEach((model) => {
        allModels = allModels.concat(model.concat(';\n'));
    });
    fs.writeFile(outputDir, allModels, fileCallback);
};

export const generateCRUD = (fieldTypeArray: Field[]) => {
    fieldTypeArray.forEach((fieldType) => {
        const outputDir = `./src/resolvers/${fieldType.field_name}`;
        fs.mkdirSync(`${outputDir}`, { recursive: true });
        fs.writeFile(`${outputDir}/create.ts`, fillCreateFile(fieldType.field_name), fileCallback);
        fs.writeFile(`${outputDir}/update.ts`, fillUpdateFile(fieldType.field_name), fileCallback);
        fs.writeFile(`${outputDir}/delete.ts`, fillDeleteFile(fieldType.field_name), fileCallback);
        fs.writeFile(`${outputDir}/readAll.ts`, fillReadAllFile(fieldType.field_name), fileCallback);
        fs.writeFile(`${outputDir}/readOne.ts`, fillReadOneFile(fieldType.field_name), fileCallback);

        fieldType.relations?.forEach((relation) => {
            const transformedRelation = relation.replace(/[\[\]]/g, '');
            fs.writeFile(
                `${outputDir}/${transformedRelation.toLowerCase()}.ts`,
                relation.startsWith('[')
                    ? fillMultipleRelation(transformedRelation)
                    : fillSingleRelation(transformedRelation),
                fileCallback,
            );
        });
    });
};

export const generateStucco = (fieldNameArray: Field[], { stuccoConfig = './stucco.json' }: Options = {}) => {
    fs.writeFile(stuccoConfig, generateStuccoJSON(fieldNameArray), fileCallback);
};
