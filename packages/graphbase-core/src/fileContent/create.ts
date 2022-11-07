export const fillCreateFile = (fieldName: string) =>
    `/* DO NOT EDIT - generated */
import { Db } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { ${fieldName}CreateModel } from '../../models/models';


type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { ${fieldName.toLowerCase()}: ${fieldName}CreateModel  };
};

const createHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<${fieldName}CreateModel>('${fieldName}')
    .insertOne({ ...input.arguments.${fieldName.toLowerCase()} })
    .then((res) => res.insertedId.toString());

export const handler = makeHandler({ handlerFactory: createHandler });
`;
