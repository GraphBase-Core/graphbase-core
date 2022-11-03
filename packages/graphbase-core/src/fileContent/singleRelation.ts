export const fillSingleRelation = (fieldName: string) => `/* DO NOT EDIT - generated */
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { ${fieldName}Model } from '../../models/models';

type InputModel = Omit<FieldResolveInput, 'source'> & {
  source: { ${fieldName.toLowerCase()}: string };
};


const singleRelationsHandler = (db: Db) => (input: InputModel) =>
   db
    .collection<${fieldName}Model>('${fieldName}')
    .findOne({ _id: new ObjectId(input.source.${fieldName.toLowerCase()} ) })
    .then((res) => res && { ...res, _id: res._id.toString() });

export const handler = makeHandler({ handlerFactory: singleRelationsHandler });`;
