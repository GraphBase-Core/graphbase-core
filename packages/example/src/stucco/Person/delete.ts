/* DO NOT EDIT - generated */
import { PersonModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const deleteHandler = (db: Db) => (input: any) =>
db
    .collection<PersonModel>('Person')
    .deleteOne({ _id: input.arguments.details._id });

export const handler = makeHandler({ handlerFactory: deleteHandler });
