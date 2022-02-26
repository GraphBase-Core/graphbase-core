/* DO NOT EDIT - generated */
import { CarModel, CarModelDetails } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-native';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { details: CarModelDetails; car: CarModel };
};

const updateHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<CarModel>('Car')
    .updateOne(
      { _id: new ObjectId(input.arguments.details._id) },
      { $set: input.arguments.car }
    )
    .then((res) => res.modifiedCount > 0);
    
export const handler = makeHandler({ handlerFactory: updateHandler });

