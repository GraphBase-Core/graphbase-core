export const graphQLTypesToTS = (graphQLType: string) => {
    const isRequired = graphQLType.includes('!');
    const justType = graphQLType.replace('!', '').trim();
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
    }
    if (!isRequired) {
        typescriptType = typescriptType + ' | undefined';
    }
    return typescriptType;
};
