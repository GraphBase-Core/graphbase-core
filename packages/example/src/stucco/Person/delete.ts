/* DO NOT EDIT - generated */
import { PersonModel, PersonModelDetails } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
    arguments: { details: PersonModelDetails };
  };

const deleteHandler = (db: Db) => (input: InputModel) =>
db
    .collection<PersonModel>('Person')
    .deleteOne({ _id: new ObjectId(input.arguments.details._id) })
    .then((res) => res.deletedCount > 0);

export const handler = makeHandler({ handlerFactory: deleteHandler });