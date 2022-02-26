/* DO NOT EDIT - generated */
import { CarModel } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const readOneHandler = (db: Db) => (input: any) =>
  db
    .collection<CarModel>('Car')
    .findOne({ _id: new ObjectId(input.arguments.details._id) });

export const handler = makeHandler({ handlerFactory: readOneHandler });
