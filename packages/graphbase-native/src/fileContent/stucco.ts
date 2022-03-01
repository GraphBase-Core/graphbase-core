import { FieldType } from 'fieldsArray';
export const generateStuccoJSON = (fieldTypeArray: FieldType[]) => `{
"resolvers": {
    ${fieldTypeArray.map(
        (fieldType) => `"Mutation.${fieldType.field_name.toLowerCase()}": {
        "skip": true
            },
        "Query.${fieldType.field_name.toLowerCase()}": {
        "skip": true
            },
        "${fieldType.field_name}Mutation.create": {
        "resolve": {
            "name": "lib/stucco/${fieldType.field_name}/create"
            }
        },
        "${fieldType.field_name}Mutation.update": {
            "resolve": {
                "name": "lib/stucco/${fieldType.field_name}/update"
                }
            },
        "${fieldType.field_name}Mutation.delete": {
            "resolve": {
                "name": "lib/stucco/${fieldType.field_name}/delete"
                }
             },
        "${fieldType.field_name}Query.readAll": {
            "resolve": {
                "name": "lib/stucco/${fieldType.field_name}/readAll"
                }
            },
        "${fieldType.field_name}Query.readOne": {
            "resolve": {
                "name": "lib/stucco/${fieldType.field_name}/readOne"
                }
            }
        ${fieldType.relations.map(
            (rel) => `,"${fieldType.field_name}.${rel.relation_name.toLowerCase()}": {
                "resolve": {
                    "name": "lib/stucco/${fieldType.field_name}/${rel.relation_name}"
                }
            }
        `,
        )}
            `,
    )}
}
}`;
