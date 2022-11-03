export const fillDeleteFile = (fieldName: string) =>
    `/* DO NOT EDIT - generated */
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { ${fieldName}Model } from '../../models/models';


type InputModel = Omit<FieldResolveInput, 'arguments'> & {
    arguments: { _id: string };
  };

const deleteHandler = (db: Db) => (input: InputModel) =>
db
    .collection<${fieldName}Model>('${fieldName}')
    .deleteOne({ _id: new ObjectId(input.arguments._id) })
    .then((res) => res.deletedCount > 0);

export const handler = makeHandler({ handlerFactory: deleteHandler });
`;
