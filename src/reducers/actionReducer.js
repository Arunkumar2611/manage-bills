import { BILLDATA, BILLERROR, BILLLOADING, ADDBILLDATA } from "../constant/constant";
  
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
      case ADDBILLDATA:
        let k = {
          ...state,
          data: [...state.data, action.data],
        };
        return k;
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