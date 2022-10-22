export const fillUpdateFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}UpdateModel } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { _id: string; ${fildName.toLowerCase()}: ${fildName}UpdateModel };
};

const updateHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<${fildName}UpdateModel>('${fildName}')
    .updateOne(
      { _id: new ObjectId(input.arguments._id) },
      { $set: input.arguments.${fildName.toLowerCase()} }
    )
    .then((res) => res.modifiedCount > 0);
    
export const handler = makeHandler({ handlerFactory: updateHandler });

`;
