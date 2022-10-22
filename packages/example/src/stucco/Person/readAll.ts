/* DO NOT EDIT - generated */
import { PersonModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-core';

const readAllHandler = (db: Db) => () =>
    db.collection<PersonModel>('Person')
    .find()
    .toArray()
    .then((res) => res.map((i) => ({ ...i, _id: i._id.toString() })));
    
export const handler = makeHandler({ handlerFactory: readAllHandler });
