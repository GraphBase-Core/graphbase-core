/* DO NOT EDIT - generated */
import { PersonCreateModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { person: PersonCreateModel  };
};

const createHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<PersonCreateModel>('Person')
    .insertOne({ ...input.arguments.person })
    .then((res) => res.insertedId.toString());

export const handler = makeHandler({ handlerFactory: createHandler });
