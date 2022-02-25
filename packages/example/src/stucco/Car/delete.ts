/* DO NOT EDIT - generated */
import { CarModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const deleteHandler = (db: Db) => (input: any) =>
db
    .collection<CarModel>('Car')
    .deleteOne({ _id: input.arguments.details._id });

export const handler = makeHandler({ handlerFactory: deleteHandler });
