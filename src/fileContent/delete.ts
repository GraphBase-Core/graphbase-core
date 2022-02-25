export const fillDeleteFile = (fildName: string) =>
    `import { ${fildName}Model } from '../../generated/model';
import { mc } from '../../db/mongoDB/connection';

export default async (input: any) => {
    const { db } = await mc();
    const res = await db.collection<${fildName}Model>('${fildName}').deleteOne({ _id: input.arguments.details._id });
    return res.deletedCount;
};
`;
