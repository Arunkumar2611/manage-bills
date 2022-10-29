import { BILLDATA, BILLERROR, BILLLOADING, ADDBILLDATA, EDITBILLS, DELETEBILLS } from "../constant/constant";
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

export function EditBills(editData) {
  return dispatch => {
      return dispatch({
        type: EDITBILLS,
        data: editData
      })
  };
}

export function DeleteBills(deleteData) {
  return dispatch => {
      return dispatch({
        type: DELETEBILLS,
        data: deleteData
      })
  };
}