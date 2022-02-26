/* DO NOT EDIT - generated */
import { PersonModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const readAllHandler = (db: Db) => () =>
    db.collection<PersonModel>('Person').find().toArray();

export const handler = makeHandler({ handlerFactory: readAllHandler });
