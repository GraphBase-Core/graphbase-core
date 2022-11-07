import { Field } from 'data';
export const generateStuccoJSON = (fieldTypeArray: Field[]) => `{
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
            "name": "lib/resolvers/${fieldType.field_name}/create"
            }
        },
        "${fieldType.field_name}Mutation.update": {
            "resolve": {
                "name": "lib/resolvers/${fieldType.field_name}/update"
                }
            },
        "${fieldType.field_name}Mutation.delete": {
            "resolve": {
                "name": "lib/resolvers/${fieldType.field_name}/delete"
                }
             },
        "${fieldType.field_name}Query.readAll": {
            "resolve": {
                "name": "lib/resolvers/${fieldType.field_name}/readAll"
                }
            },
        "${fieldType.field_name}Query.readOne": {
            "resolve": {
                "name": "lib/resolvers/${fieldType.field_name}/readOne"
                }
            }
        ${
            fieldType.relations?.length
                ? fieldType.relations.map(
                      (relation) => `,"${fieldType.field_name}WithId.${relation
                          .replace(/[\[\]]/g, '')
                          .toLowerCase()}": {
                "resolve": {
                    "name": "lib/resolvers/${fieldType.field_name}/${relation.replace(/[\[\]]/g, '').toLowerCase()}"
                }
            }
        `,
                  )
                : ''
        }
            `,
    )}
}
}`;
