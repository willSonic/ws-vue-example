/**
 * Created by willstreeter on 9/2/17.
 */
 import IGarment from './garment.interface'
export interface IGarmentList {
  id: string;
  offset: number;
  limit: number;
  total: number;
  category: any;
  products:Array<IGarment>;
}