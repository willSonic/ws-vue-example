/**
 * Created by willstreeter on 9/2/17.
 */
 import { schema } from 'normalizr';


export const garment: schema.Entity = new schema.Entity('garment', {
}, {
  idAttribute: 'garmentId',
});

export const garmentList: schema.Entity[] = [garment];