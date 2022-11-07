export const fillMultipleRelation = (fieldName: string) => `/* DO NOT EDIT - generated */
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { ${fieldName}Model } from '../../models/models';


type InputModel = Omit<FieldResolveInput, 'source'> & {
  source: { ${fieldName.toLowerCase()}: string[] };
};

const multipleRelationsHandler = (db: Db) => (input: InputModel) =>
{ 
 return db
    .collection<${fieldName}Model>('${fieldName}')
    .find({_id : { $in : input.source.${fieldName.toLowerCase()}.map(s => new ObjectId(s)) }})
    .toArray()
    .then((res) => res.map((i) => ({ ...i, _id: i._id.toString() })));}

export const handler = makeHandler({ handlerFactory: multipleRelationsHandler });

`;
