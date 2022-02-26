/* DO NOT EDIT - generated */
import { PersonModel, PersonModelDetails } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-native';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { details: PersonModelDetails; person: PersonModel };
};

const updateHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<PersonModel>('Person')
    .updateOne(
      { _id: new ObjectId(input.arguments.details._id) },
      { $set: input.arguments.person }
    )
    .then((res) => res.modifiedCount > 0);
    
export const handler = makeHandler({ handlerFactory: updateHandler });

