/* DO NOT EDIT - generated */
import { InterestsUpdateModel, InterestsModelDetails } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { details: InterestsModelDetails; interests: InterestsUpdateModel };
};

const updateHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<InterestsUpdateModel>('Interests')
    .updateOne(
      { _id: new ObjectId(input.arguments.details._id) },
      { $set: input.arguments.interests }
    )
    .then((res) => res.modifiedCount > 0);
    
export const handler = makeHandler({ handlerFactory: updateHandler });

