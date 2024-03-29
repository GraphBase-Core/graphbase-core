/* DO NOT EDIT - generated */
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { InterestsUpdateModel } from '../../models/models';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { _id: string; interests: InterestsUpdateModel };
};

const updateHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<InterestsUpdateModel>('Interests')
    .updateOne(
      { _id: new ObjectId(input.arguments._id) },
      { $set: input.arguments.interests }
    )
    .then((res) => res.modifiedCount > 0);
    
export const handler = makeHandler({ handlerFactory: updateHandler });

