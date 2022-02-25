export const fillReadOneFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}Model } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const readOneHandler = (db: Db) => (input: any) =>
  db
    .collection<${fildName}Model>('${fildName}')
    .findOne({ _id: new ObjectId(input.arguments.details._id) });

export const handler = makeHandler({ handlerFactory: readOneHandler });
`;
