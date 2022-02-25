import { CarModel } from '../../generated/model';
import { mc } from 'graphbase-native';

export default async (input: any) => {
    const { db } = await mc();
    const res = await db.collection<CarModel>('Car').deleteOne({ _id: input.arguments.details._id });
    return res.deletedCount;
};
