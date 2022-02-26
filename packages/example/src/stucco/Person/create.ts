/* DO NOT EDIT - generated */
import { PersonModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const createHandler = (db: Db) => (input: any) =>
  db
    .collection<PersonModel>('Person')
    .insertOne({ ...(input.arguments as PersonModel) });

export const handler = makeHandler({ handlerFactory: createHandler });
