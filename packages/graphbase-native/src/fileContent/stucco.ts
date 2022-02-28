/* eslint-disable prettier/prettier */
export const generateStuccoJSON = (fieldNameArray: string[]) => `{
"resolvers": {
    ${fieldNameArray.map(
        (fieldName) => `"Mutation.${fieldName.toLowerCase()}": {
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
}`;
