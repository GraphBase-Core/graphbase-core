export const fillCreateFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}Model } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const createHandler = (db: Db) => (input: any) =>
  db
    .collection<${fildName}Model>('${fildName}')
    .insertOne({ ...(input.arguments as ${fildName}Model) });

export const handler = makeHandler({ handlerFactory: createHandler });
`;
