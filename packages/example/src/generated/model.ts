export type PersonModel = {firstName:string,
lastName:string,
age:number,
someFloat:number | undefined,
someBoolean:boolean | undefined}
export type CarModelDetails = {_id:string}
export type CarModelWithId = CarModelDetails & CarModel 
export type CarModel = {mark:string,
price:number,
model:string | undefined}
export type PersonModelDetails = {_id:string}
export type PersonModelWithId = PersonModelDetails & PersonModel 
export type PersonModel = {firstName:string,
lastName:string,
age:number,
someFloat:number | undefined,
someBoolean:boolean | undefined}
export type CarModel = {mark:string,
price:number,
model:string | undefined}
export type CarModelDetails = {_id:string}
export type PersonModelDetails = {_id:string}
export type PersonModelWithId = PersonModelDetails & PersonModel 
export type CarModelWithId = CarModelDetails & CarModel 
