export const fillCreateFile = (fildName: string) =>
    `import { ${fildName}Model } from '../../generated/model';
import { mc } from '../../db/mongoDB/connection';

export default async (input: any) => {
    const { db } = await mc();
    const res = await db.collection<${fildName}Model>('${fildName}').insertOne({ ...(input.arguments as ${fildName}Model) });
    return res.insertedId;
};
`;
