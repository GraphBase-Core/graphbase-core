import { Relation } from './fieldsArray';

interface TypesAndRealations {
    fildType: string;
    relationType: Relation | undefined;
}

//TODO: now it doesnt work with [String] field?
export const getTypesAndRelations = (graphQLType: string): TypesAndRealations => {
    const isRequired = new RegExp(/!$/).test(graphQLType);
    const justType = graphQLType.replace(/!$/g, '').trim();
    let typescriptType;
    let relation: Relation | undefined = undefined;
    switch (justType) {
        case 'String':
        case 'ID':
            typescriptType = 'string';
            break;
        case 'Int':
        case 'Float':
            typescriptType = 'number';
            break;
        case 'Boolean':
            typescriptType = 'boolean';
            break;
        case '[String]':
        case '[ID]':
            typescriptType = '[string]';
            break;
        case '[Int]':
        case '[Float]':
            typescriptType = '[number]';
            break;
        case '[Boolean]':
            typescriptType = '[boolean]';
            break;
        default:
            if (justType.includes('[')) {
                relation = { relation_name: justType.replace(/([\[\]])/g, ''), type: 'MANY' };
                typescriptType = '[string]';
            } else {
                relation = { relation_name: justType, type: 'SINGLE' };
                typescriptType = 'string';
            }
    }
    if (!isRequired) {
        typescriptType = typescriptType + ' | undefined';
    }
    return {
        fildType: typescriptType,
        relationType: relation,
    };
};
