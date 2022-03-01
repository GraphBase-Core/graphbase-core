type RelationType = 'SINGLE' | 'MANY';

export type Relation = {
    relation_name: string;
    type: RelationType;
};

export type FieldType = {
    field_name: string;
    relations: Relation[];
};

export const fieldsArray: FieldType[] = [];
