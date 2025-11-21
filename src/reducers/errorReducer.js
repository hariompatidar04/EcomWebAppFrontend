const initialState = {
  isloading: false,
  errorMessage: null,
  categoryLoader: false,
  categoryError: null,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_FETCHING": {
      return {
        ...state,
        isloading: true,
        errorMessage: null,
      };
    }

    case "IS_SUCCESS": {
      return {
        ...state,
        isloading: false,
        errorMessage: null,
      };
    }

    case "IS_ERROR": {
      return {
        ...state,
        isloading: false,
        errorMessage: action.payload,
      };
    }

    case "CATEGORY_SUCCESS": {
      return {
        ...state,
        categoryLoader: false,
        categoryError: null,
      };
    }

    case "CATEGORY_LOADER": {
      return {
        ...state,
        categoryLoader: true,
        categoryError: null,
        categoryError: null,
      };
    }

    default:
      return state;
  }
};
