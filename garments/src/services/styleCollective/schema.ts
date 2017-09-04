/**
 * Created by willstreeter on 9/2/17.
 */
 import { schema } from "normalizr";


export const garment = new schema.Entity('products');


export const garmentList = new schema.Object({ garmentList: new schema.Array(garment) });

export const garmentCollection= new schema.Entity('garmentCollections');



export const unionSchema = new schema.Values({
  garmentList:garmentList,
  garmentCollection: garmentCollection
}, 'metadata');