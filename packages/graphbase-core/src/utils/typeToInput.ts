type Mode = 'CREATE' | 'UPDATE';

export const typeToInput = (notScalarTypes: string[], typedFields: string, mode: Mode) => {
    mode === 'CREATE'
        ? notScalarTypes.forEach((nsc) => {
              const transformedNsc = nsc.replace(/[\[\]]/g, '');
              return (typedFields = typedFields.replace(transformedNsc, `Create${transformedNsc}`));
          })
        : notScalarTypes.forEach((nsc) => {
              const transformedNsc = nsc.replace(/[\[\]]/g, '');
              return (typedFields = typedFields.replace(transformedNsc, `Update${transformedNsc}`));
          });
    return typedFields;
};
