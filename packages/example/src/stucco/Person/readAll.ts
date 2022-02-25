import { PersonModel } from '../../generated/model';
import { mc } from 'graphbase-native';

export default async () => {
    const { db } = await mc();
    const res = await db.collection<PersonModel>('Person').find().toArray();
    return res;
};
