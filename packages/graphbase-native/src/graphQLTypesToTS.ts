export const graphQLTypesToTS = (graphQLType: string) => {
    const isRequired = new RegExp(/!$/).test(graphQLType);
    const justType = graphQLType.replace('!', '').trim();
    console.log('=======', justType);
    console.log(isRequired);

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
        default:
            typescriptType = `${justType.slice(0, -1)}Model]`;
            break;
    }
    if (!isRequired) {
        typescriptType = typescriptType + ' | undefined';
    }
    return typescriptType;
};
