/* DO NOT EDIT - generated */
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-core';
import { CarModel } from '../../models/models';

const readAllHandler = (db: Db) => () =>
    db.collection<CarModel>('Car')
    .find()
    .toArray()
    .then((res) => res.map((i) => ({ ...i, _id: i._id.toString() })));
    
export const handler = makeHandler({ handlerFactory: readAllHandler });
