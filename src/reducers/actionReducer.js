import { BILLDATA, BILLERROR, BILLLOADING, ADDBILLDATA, EDITBILLS, DELETEBILLS } from "../constant/constant";

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
      return {
        ...state,
        data: [...state.data, action.data],
      };
    case EDITBILLS:
      return {
        ...state,
        data: state.data.map((data) => data.id === action.data.id ? action.data : data)
      };
    case DELETEBILLS:
      return { 
        ...state, 
        data: state.data.filter((data) => data.id !== action.data) 
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