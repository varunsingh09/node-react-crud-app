import * as ACTION from '../data/apiActions';
const initial_state={
    dataList:[]
};

export const UserReducer = function (state=[initial_state],action){
    switch(action.type){

        case ACTION.ADD_USER:
        return {...state, dataadd:action.AddResponse};

        case ACTION.LIST_USER:
            return  {...state,dataList:action.UserDetails};

        case ACTION.DELETE_USER:
        return  {...state,deleted:action.DeleteResponse};

        case ACTION.UPDATE_USER:
        return  {...state,updatedata:action.UpdateResponse};

        case ACTION.LOGIN_USER:
        return  {...state,loginData:action.LoginResponse};

        default :
			return state;
    }
}
