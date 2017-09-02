/**
 * Created by willstreeter on 8/31/17.
 */


import axios from 'axios';
import get from 'lodash/get';
import { normalize } from 'normalizr';

import { garmentList } from './schema';

const apiRoot: string = `http://api.shopstyle.com/api/v2/products?pid=uid5225-39800235-6&fts=red+dress&offset=0&limit=50`;

export async function fetchGarments(count?: number) {
  const response = await axios.get(`${apiRoot}`);
  const payload = get(response, 'data.data.products');

  return normalize(payload, garmentList);


}