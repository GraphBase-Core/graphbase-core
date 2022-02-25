export const fillReadOneFile = (fildName: string) =>
    `import { ${fildName}Model } from '../../generated/model';
import { mc } from '../../db/mongoDB/connection';

export default async (input: any) => {
    const { db } = await mc();
    const res = await db.collection<${fildName}Model>('${fildName}').findOne({ _id: input.arguments.details._id });
    return res;
};
`;
