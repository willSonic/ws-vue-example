/**
 * Created by willstreeter on 9/2/17.
 */
export interface IGarment {
  id: string;
  name: string;
  currency: string;
  price: number;
  inStock: boolean;
  description: string;
  stock: Array<any>;
  image:any;
  colors:Array<any>;
  sizes:Array<any>;
  categories:Array<any>;
}