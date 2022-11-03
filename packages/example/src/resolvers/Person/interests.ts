/* DO NOT EDIT - generated */
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { InterestsModel } from '../../models/models';


type InputModel = Omit<FieldResolveInput, 'source'> & {
  source: { interests: string[] };
};

const multipleRelationsHandler = (db: Db) => (input: InputModel) =>
{ 
 return db
    .collection<InterestsModel>('Interests')
    .find({_id : { $in : input.source.interests.map(s => new ObjectId(s)) }})
    .toArray()
    .then((res) => res.map((i) => ({ ...i, _id: i._id.toString() })));}

export const handler = makeHandler({ handlerFactory: multipleRelationsHandler });

