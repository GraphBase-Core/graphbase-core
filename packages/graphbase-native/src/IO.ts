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

export const generateCRUD = (fieldNameArray: string[], { stuccoJson = './src/stucco' }: Options = {}) => {
    fieldNameArray.map((fieldName) => {
        const outputDir = `${stuccoJson}/${fieldName}`;
        fs.mkdirSync(`${outputDir}`, { recursive: true });
        fs.writeFile(`${outputDir}/create.ts`, fillCreateFile(fieldName), fileCallback);
        fs.writeFile(`${outputDir}/update.ts`, fillUpdateFile(fieldName), fileCallback);
        fs.writeFile(`${outputDir}/delete.ts`, fillDeleteFile(fieldName), fileCallback);
        fs.writeFile(`${outputDir}/readAll.ts`, fillReadAllFile(fieldName), fileCallback);
        fs.writeFile(`${outputDir}/readOne.ts`, fillReadOneFile(fieldName), fileCallback);
    });
};

export const generateStucco = (fieldNameArray: string[], { stuccoConfig = './stucco.json' }: Options = {}) => {
    const data = `{
"resolvers": {
  ${fieldNameArray.map(
      (fieldName) => `  "Mutation.${fieldName.toLowerCase()}": {
        "skip": true
        },
        "Query.${fieldName.toLowerCase()}": {
            "skip": true
        },
        "${fieldName}Mutation.create": {
            "resolve": {
                "name": "lib/stucco/${fieldName}/create"
            }
        },
        "${fieldName}Mutation.update": {
            "resolve": {
                "name": "lib/stucco/${fieldName}/update"
            }
        },
        "${fieldName}Mutation.delete": {
            "resolve": {
                "name": "lib/stucco/${fieldName}/delete"
            }
        },
        "${fieldName}Query.readAll": {
            "resolve": {
                "name": "lib/stucco/${fieldName}/readAll"
            }
        },
        "${fieldName}Query.readOne": {
            "resolve": {
                "name": "lib/stucco/${fieldName}/readOne"
            }
        }
  `,
  )}
    }
}
`;
    fs.writeFile(stuccoConfig, data, fileCallback);
};
