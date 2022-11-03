/* DO NOT EDIT - generated */
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { CarUpdateModel } from '../../models/models';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { _id: string; car: CarUpdateModel };
};

const updateHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<CarUpdateModel>('Car')
    .updateOne(
      { _id: new ObjectId(input.arguments._id) },
      { $set: input.arguments.car }
    )
    .then((res) => res.modifiedCount > 0);
    
export const handler = makeHandler({ handlerFactory: updateHandler });

