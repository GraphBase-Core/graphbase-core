/* DO NOT EDIT - generated */
import { CarModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const updateHandler = (db: Db) => (input: any) =>
  db
    .collection<CarModel>('Car')
    .updateOne({ _id: input.arguments.details.id }, { ...input.arguments });

export const handler = makeHandler({ handlerFactory: updateHandler });

