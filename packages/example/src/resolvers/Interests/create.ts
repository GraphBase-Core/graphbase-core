/* DO NOT EDIT - generated */
import { Db } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { InterestsCreateModel } from '../../models/models';


type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { interests: InterestsCreateModel  };
};

const createHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<InterestsCreateModel>('Interests')
    .insertOne({ ...input.arguments.interests })
    .then((res) => res.insertedId.toString());

export const handler = makeHandler({ handlerFactory: createHandler });
