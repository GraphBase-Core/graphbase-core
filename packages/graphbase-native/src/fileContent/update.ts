export const fillUpdateFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}Model } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const updateHandler = (db: Db) => (input: any) =>
  db
    .collection<${fildName}Model>('${fildName}')
    .updateOne({ _id: input.arguments.details.id }, { ...input.arguments });

export const handler = makeHandler({ handlerFactory: updateHandler });

`;
