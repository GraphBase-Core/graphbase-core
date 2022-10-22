/* DO NOT EDIT - generated */
import { InterestsModel, InterestsModelDetails } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
    arguments: { details: InterestsModelDetails };
  };

const deleteHandler = (db: Db) => (input: InputModel) =>
db
    .collection<InterestsModel>('Interests')
    .deleteOne({ _id: new ObjectId(input.arguments.details._id) })
    .then((res) => res.deletedCount > 0);

export const handler = makeHandler({ handlerFactory: deleteHandler });
