/* DO NOT EDIT - generated */
import { Db, ObjectId } from 'mongodb';
import { CarModel } from '../../generated/model';
import { mc, FieldResolveInput } from 'graphbase-native';

export interface Config {
  db?: Db;
  handlerFactory: (db: Db) => (input: FieldResolveInput) => unknown;
}

export const makeHandler = async ({ handlerFactory, ...config }: Config) => {
  const db = config?.db ? config.db : await mc().then((c) => c.db);
  return handlerFactory(db);
};

export const readOne = (db: Db) => (input: FieldResolveInput) =>
  db.collection<CarModel>('Car').findOne({ _id: new ObjectId() });
//   .findOne({ _id: input.arguments.details._id });

export const handler = makeHandler({ handlerFactory: readOne });
