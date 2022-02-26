/* DO NOT EDIT - generated */
import { PersonModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const updateHandler = (db: Db) => (input: any) =>
  db
    .collection<PersonModel>('Person')
    .updateOne({ _id: input.arguments.details.id }, { ...input.arguments });

export const handler = makeHandler({ handlerFactory: updateHandler });

