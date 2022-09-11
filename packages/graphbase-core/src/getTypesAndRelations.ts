export const getTypesAndRelations = (graphQLType: string) => {
    const isRequired = new RegExp(/!$/).test(graphQLType);
    const isRequiredArrayElement = new RegExp(/!]/).test(graphQLType);

    const justType = graphQLType.replace(/!/g, '').trim();

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
            typescriptType = `[string${!isRequiredArrayElement ? ' | undefined]' : ''}`;
            break;
        case '[Int]':
        case '[Float]':
            typescriptType = `[number${!isRequiredArrayElement ? ' | undefined]' : ''}`;
            break;
        case '[Boolean]':
            typescriptType = `[boolean${!isRequiredArrayElement ? ' | undefined]' : ''}`;
            break;
        default:
            if (justType.startsWith('[')) {
                typescriptType = `[${justType.replace(/[\[\]]/g, '')}ModelWithId${
                    !isRequiredArrayElement ? ' | undefined' : ''
                }]`;
            } else {
                typescriptType = `${justType}ModelWithId`;
            }
    }
    if (!isRequired) {
        typescriptType = typescriptType + ' | undefined';
    }
    return typescriptType;
};
