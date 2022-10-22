/* DO NOT EDIT - generated */
import { InterestsModel,  InterestsModelDetails } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { details: InterestsModelDetails };
};

const readOneHandler = (db: Db) => (input: InputModel) => 
 db
.collection<InterestsModel>('Interests')
.findOne({ _id: new ObjectId(input.arguments.details._id) })
.then((i) => ({ ...i, _id: i?._id.toString() }));



export const handler = makeHandler({ handlerFactory: readOneHandler });
