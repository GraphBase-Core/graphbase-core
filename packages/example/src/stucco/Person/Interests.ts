/* DO NOT EDIT - generated */
import { InterestsModel } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'source'> & {
  source: { interests: string };
};


const singleRelationsHandler = (db: Db) => (input: InputModel) =>
   db
    .collection<InterestsModel>('Interests')
    .findOne({ _id: new ObjectId(input.source.interests ) })
    .then((res) => res && { ...res, _id: res._id.toString() });

export const handler = makeHandler({ handlerFactory: singleRelationsHandler });