export type InterestsModel = {name:string,
description:string | undefined}
export type PersonModelDetails = {_id:string}
export type PersonModelWithId = PersonModelDetails & PersonModel
export type CarModel = {mark:string,
price:number,
model:[string | undefined] | undefined}
export type CarModelDetails = {_id:string}
export type CarModelWithId = CarModelDetails & CarModel
export type InterestsModelWithId = InterestsModelDetails & InterestsModel
export type PersonModel = {firstName:string,
lastName:string,
age:number,
someFloat:number | undefined,
someBoolean:boolean | undefined,
interests:[InterestsModelWithId] | undefined}
export type InterestsModelDetails = {_id:string}
