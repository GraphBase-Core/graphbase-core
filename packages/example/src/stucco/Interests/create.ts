/* DO NOT EDIT - generated */
import { InterestsModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-native';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { interests: InterestsModel  };
};

const createHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<InterestsModel>('Interests')
    .insertOne({ ...input.arguments.interests })
    .then((res) => res.insertedId.toString());

export const handler = makeHandler({ handlerFactory: createHandler });
