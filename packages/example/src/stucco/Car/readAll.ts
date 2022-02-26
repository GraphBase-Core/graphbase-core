/* DO NOT EDIT - generated */
import { CarModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const readAllHandler = (db: Db) => () =>
    db.collection<CarModel>('Car').find().toArray();

export const handler = makeHandler({ handlerFactory: readAllHandler });
