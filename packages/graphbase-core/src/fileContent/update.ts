export const fillUpdateFile = (fieldName: string) =>
    `/* DO NOT EDIT - generated */
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { ${fieldName}UpdateModel } from '../../models/models';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { _id: string; ${fieldName.toLowerCase()}: ${fieldName}UpdateModel };
};

const updateHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<${fieldName}UpdateModel>('${fieldName}')
    .updateOne(
      { _id: new ObjectId(input.arguments._id) },
      { $set: input.arguments.${fieldName.toLowerCase()} }
    )
    .then((res) => res.modifiedCount > 0);
    
export const handler = makeHandler({ handlerFactory: updateHandler });

`;
