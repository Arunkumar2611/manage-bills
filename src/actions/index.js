import { BILLDATA, BILLERROR, BILLLOADING, ADDBILLDATA } from "../constant/constant";
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

export function AddData(addingData) {
  return dispatch => {
      return dispatch({
        type: ADDBILLDATA,
        data: addingData
      })
  };
}