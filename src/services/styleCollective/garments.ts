/**
 * Created by willstreeter on 8/31/17.
 */
import axios from "axios";
import get from "lodash/get";

const apiRoot: string = `http://api.shopstyle.com/api/v2/products?pid=uid5225-39800235-6&fts=`;
const apiContext: string = `&offset=0&limit=50`;

export async function fetchStyleCollective(type: string) {
  const response = await axios.get( `${apiRoot + type + apiContext}` );
  return response;
}