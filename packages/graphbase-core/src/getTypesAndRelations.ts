//TODO: now it doesnt work with [String] field?
export const getTypesAndRelations = (graphQLType: string) => {
    const isRequired = new RegExp(/!$/).test(graphQLType);
    const isRequiredArrayElement = new RegExp(/!]/).test(graphQLType);

    console.log(graphQLType);
    console.log('isRequiredArrayElement', isRequiredArrayElement);
    console.log('isRequired', isRequired);

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
            if (justType.startsWith('[')) {
                typescriptType = `[${justType.replace(/[\[\]]/g, '')}ModelWithId]`;
            } else {
                typescriptType = `${justType}ModelWithId`;
            }
    }
    if (!isRequired) {
        typescriptType = typescriptType + ' | undefined';
    }
    return typescriptType;
};
