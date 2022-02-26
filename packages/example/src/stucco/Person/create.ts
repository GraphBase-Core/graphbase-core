/* DO NOT EDIT - generated */
import { PersonModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-native';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { person: PersonModel  };
};

const createHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<PersonModel>('Person')
    .insertOne({ ...input.arguments.person })
    .then((res) => res.insertedId.toString());

export const handler = makeHandler({ handlerFactory: createHandler });
