import { BILLDATA, BILLERROR, BILLLOADING } from "../constant/constant";
  
  const initialState = {
    loading: false,
    data: [],
    error: null
  };
  
const bills = (state = initialState, action) => {
    switch (action.type) {
      case BILLLOADING:
        return { ...state, loading: true };
      case BILLDATA:
        return {
          ...state,
          data: action.data,
          loading: false
        };
      case BILLERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export default bills