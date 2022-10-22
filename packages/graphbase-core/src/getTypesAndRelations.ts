export const getTypesAndRelations = (graphQLType: string, isMutationType: boolean) => {
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
            if (isMutationType) {
                typescriptType = justType.startsWith('[')
                    ? `[string${!isRequiredArrayElement ? ' | undefined' : ''}]`
                    : 'string';
            } else {
                typescriptType = justType.startsWith('[')
                    ? `[${justType.replace(/[\[\]]/g, '')}ModelWithId${!isRequiredArrayElement ? ' | undefined' : ''}]`
                    : `${justType}ModelWithId`;
            }
    }
    if (!isRequired) {
        typescriptType = typescriptType + ' | undefined';
    }
    return typescriptType;
};
