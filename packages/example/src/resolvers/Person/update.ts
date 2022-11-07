/* DO NOT EDIT - generated */
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { PersonUpdateModel } from '../../models/models';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { _id: string; person: PersonUpdateModel };
};

const updateHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<PersonUpdateModel>('Person')
    .updateOne(
      { _id: new ObjectId(input.arguments._id) },
      { $set: input.arguments.person }
    )
    .then((res) => res.modifiedCount > 0);
    
export const handler = makeHandler({ handlerFactory: updateHandler });

