/* DO NOT EDIT - generated */
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-core';
import { PersonModel } from '../../models/models';

const readAllHandler = (db: Db) => () =>
    db.collection<PersonModel>('Person')
    .find()
    .toArray()
    .then((res) => res.map((i) => ({ ...i, _id: i._id.toString() })));
    
export const handler = makeHandler({ handlerFactory: readAllHandler });
