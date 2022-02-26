import { mc } from './db/mongoDB/connection';
import { FieldResolveInput } from 'stucco-js';
import { Db } from 'mongodb';

export interface Config {
    db?: Db;
    handlerFactory: (db: Db) => (input: any) => unknown;
}

export const makeHandler = ({ handlerFactory, ...config }: Config) => {
    let fn: ((input: FieldResolveInput) => unknown) | undefined;
    return async (input: FieldResolveInput) => {
        if (!fn) {
            const db = config?.db ? config.db : await mc().then((c) => c.db);
            fn = (input: FieldResolveInput) => handlerFactory(db)(input);
        }
        return fn(input);
    };
};
