export const fillUpdateFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}Model, ${fildName}UpdateModel, ${fildName}ModelDetails } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { details: ${fildName}ModelDetails; ${fildName.toLowerCase()}: ${fildName}UpdateModel };
};

const updateHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<${fildName}Model>('${fildName}')
    .updateOne(
      { _id: new ObjectId(input.arguments.details._id) },
      { $set: input.arguments.${fildName.toLowerCase()} }
    )
    .then((res) => res.modifiedCount > 0);
    
export const handler = makeHandler({ handlerFactory: updateHandler });

`;
