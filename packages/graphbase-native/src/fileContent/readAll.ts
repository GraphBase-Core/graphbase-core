export const fillReadAllFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}Model } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const readAllHandler = (db: Db) => () =>
    db.collection<${fildName}Model>('${fildName}').find().toArray();

export const handler = makeHandler({ handlerFactory: readAllHandler });
`;
