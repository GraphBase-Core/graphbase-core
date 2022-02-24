import fs from 'fs';
import { fillCreateFile, fillDeleteFile, fillUpdateFile, fillReadAllFile, fillReadOneFile } from './fileContent/index';

const generatedDir = './src/generated';
const stuccoDir = './src/stucco';
const fileCallback = (err: NodeJS.ErrnoException | null) => {
    if (err) {
        console.log(err);
        return;
    }
};

export const readSchemaFromFiles = (path?: string) => {
    const pathToSchema = path || 'input_schema.graphql';
    return fs.readFileSync(pathToSchema, 'utf-8');
};
export const writeSchemaToFile = (data: string) => {
    fs.writeFile('schema.graphql', data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};

export const writeModelToFile = (model: string) => {
    if (!fs.existsSync(generatedDir)) {
        fs.mkdirSync(generatedDir);
    }
    fs.appendFile(generatedDir + '/model.ts', model + '\n', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};

export const createStuccoDirs = () => {
    if (!fs.existsSync(stuccoDir)) {
        fs.mkdirSync(stuccoDir);
    }
};

export const generateCRUD = (fieldName: string) => {
    if (!fs.existsSync(`${stuccoDir}/${fieldName}`)) {
        fs.mkdirSync(`${stuccoDir}/${fieldName}`, '0777');
    }
    fs.writeFile(`${stuccoDir}/${fieldName}/create.ts`, fillCreateFile(fieldName), fileCallback);
    fs.writeFile(`${stuccoDir}/${fieldName}/update.ts`, fillUpdateFile(fieldName), fileCallback);
    fs.writeFile(`${stuccoDir}/${fieldName}/delete.ts`, fillDeleteFile(fieldName), fileCallback);
    fs.writeFile(`${stuccoDir}/${fieldName}/readAll.ts`, fillReadAllFile(fieldName), fileCallback);
    fs.writeFile(`${stuccoDir}/${fieldName}/readOne.ts`, fillReadOneFile(fieldName), fileCallback);
};
