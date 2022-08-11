export type InterestsModel = {name:{fildType:string,
relationType:undefined},
description:{fildType:string | undefined,
relationType:undefined}}
export type InterestsModelDetails = {_id:string}
export type InterestsModelWithId = InterestsModelDetails & InterestsModel
export type PersonModelWithId = PersonModelDetails & PersonModel
export type PersonModel = {firstName:{fildType:string,
relationType:undefined},
lastName:{fildType:string,
relationType:undefined},
age:{fildType:number,
relationType:undefined},
someFloat:{fildType:number | undefined,
relationType:undefined},
someBoolean:{fildType:boolean | undefined,
relationType:undefined},
interests:{fildType:[string],
relationType:{relation_name:Interests,
type:MANY}}}
export type CarModelDetails = {_id:string}
export type CarModelWithId = CarModelDetails & CarModel
export type PersonModelDetails = {_id:string}
export type CarModel = {mark:{fildType:string,
relationType:undefined},
price:{fildType:number,
relationType:undefined},
model:{fildType:string | undefined,
relationType:undefined}}
