/**
 * Created by willstreeter on 9/3/17.
 */

import { IGarmentList } from './garment.list.interface';


export interface IGarmentsCollectionsState {
    collections: IGarmentList[];
    totalCollections: number;
}