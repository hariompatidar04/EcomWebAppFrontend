const initialState={
    isloading:false,
    errorMessage:null,
};

export const errorReducer=(state=initialState,action)=>{
     switch(action.type){
        case "IS_FETCHING":{
            return {
                ...state,
                isloading:true,
                errorMessage:null,
            }
        }

        case "IS_SUCCESS":{
            return {
                ...state,
                isloading:false,
                errorMessage:null,
            }
        }

        case "IS_ERROR":{
            return {
                ...state,
                isloading:false,
                errorMessage:action.payload,
            }

        }

        default:
            return state;

            
     }
};