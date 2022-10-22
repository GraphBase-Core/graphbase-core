/* DO NOT EDIT - generated */
import { PersonModel } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { _id: string };
};

const readOneHandler = (db: Db) => (input: InputModel) => 
 db
.collection<PersonModel>('Person')
.findOne({ _id: new ObjectId(input.arguments._id) })
.then((i) => ({ ...i, _id: i?._id.toString() }));



export const handler = makeHandler({ handlerFactory: readOneHandler });
