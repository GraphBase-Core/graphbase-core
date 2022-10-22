export const fillSingleRelation = (fildName: string) => `/* DO NOT EDIT - generated */
import { ${fildName}Model } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'source'> & {
  source: { ${fildName.toLowerCase()}: string };
};


const singleRelationsHandler = (db: Db) => (input: InputModel) =>
   db
    .collection<${fildName}Model>('${fildName}')
    .findOne({ _id: new ObjectId(input.source.${fildName.toLowerCase()} ) })
    .then((res) => res && { ...res, _id: res._id.toString() });

export const handler = makeHandler({ handlerFactory: singleRelationsHandler });`;
