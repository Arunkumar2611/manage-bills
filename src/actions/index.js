import { data } from "../data";

export function fetchUsers() {
  return (dispatch, getState) => {
    const res = data;
    console.log("res", res);
    dispatch({ type: "GET_USERS", payload: res.bills });
  };
}
