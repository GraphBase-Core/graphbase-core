//TODO: now it doesnt work with [String] field?
export const getTypesAndRelations = (graphQLType: string) => {
    const isRequired = new RegExp(/!$/).test(graphQLType);
    const justType = graphQLType.replace(/!$/g, '').trim();
    let typescriptType;
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
                typescriptType = '[string]';
            } else {
                typescriptType = 'string';
            }
    }
    if (!isRequired) {
        typescriptType = typescriptType + ' | undefined';
    }
    return typescriptType;
};
