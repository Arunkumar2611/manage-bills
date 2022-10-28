import { BILLDATA, BILLERROR, BILLLOADING } from "../constant/constant";
import { data } from '../data';
export function fetchData() {
  return dispatch => {
    dispatch({ type: BILLLOADING });
    try {
      return dispatch({
        type: BILLDATA,
        data: data.bills
      })
    } catch (error) {
      dispatch({
        type: BILLERROR,
        error
      });
    }
  };
}