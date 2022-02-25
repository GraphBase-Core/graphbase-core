/* DO NOT EDIT - generated */
import { CarModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const createHandler = (db: Db) => (input: any) =>
  db
    .collection<CarModel>('Car')
    .insertOne({ ...(input.arguments as CarModel) });

export const handler = makeHandler({ handlerFactory: createHandler });
