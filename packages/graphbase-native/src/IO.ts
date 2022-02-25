import fs from 'fs';
import { fillCreateFile, fillDeleteFile, fillUpdateFile, fillReadAllFile, fillReadOneFile } from './fileContent/index';

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
}

export const readSchemaFromFiles = (path?: string) => {
    const pathToSchema = path || './input_schema.graphql';
    return fs.readFileSync(pathToSchema, 'utf-8');
};
export const writeSchemaToFile = (data: string, { schema = './schema.graphql' }: Options = {}) => {
    fs.writeFile(schema, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};

export const writeModelToFile = (model: string, { generatedDir = './src/generated' }: Options = {}) => {
    const outputDir = `${generatedDir}/model.ts`;
    fs.mkdirSync(generatedDir, { recursive: true });
    fs.appendFile(outputDir, model + '\n', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};

export const generateCRUD = (fieldName: string, { stuccoJson = './src/stucco' }: Options = {}) => {
    const outputDir = `${stuccoJson}/${fieldName}`;
    fs.mkdirSync(`${outputDir}`, { recursive: true });
    fs.writeFile(`${outputDir}/create.ts`, fillCreateFile(fieldName), fileCallback);
    fs.writeFile(`${outputDir}/update.ts`, fillUpdateFile(fieldName), fileCallback);
    fs.writeFile(`${outputDir}/delete.ts`, fillDeleteFile(fieldName), fileCallback);
    fs.writeFile(`${outputDir}/readAll.ts`, fillReadAllFile(fieldName), fileCallback);
    fs.writeFile(`${outputDir}/readOne.ts`, fillReadOneFile(fieldName), fileCallback);
};
