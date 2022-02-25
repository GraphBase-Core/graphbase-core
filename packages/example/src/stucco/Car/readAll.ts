import { CarModel } from '../../generated/model';
import { mc } from 'graphbase-native';

export default async () => {
    const { db } = await mc();
    const res = await db.collection<CarModel>('Car').find().toArray();
    return res;
};
