export const fillReadOneFile = (fieldName: string) =>
    `/* DO NOT EDIT - generated */
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { ${fieldName}Model } from '../../models/models';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { _id: string };
};

const readOneHandler = (db: Db) => (input: InputModel) => 
 db
.collection<${fieldName}Model>('${fieldName}')
.findOne({ _id: new ObjectId(input.arguments._id) })
.then((i) => ({ ...i, _id: i?._id.toString() }));



export const handler = makeHandler({ handlerFactory: readOneHandler });
`;
