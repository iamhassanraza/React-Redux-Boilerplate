//add all reducers here 
//if reducers are in seperate files then import all here and combine them

import { combineReducers } from "redux"


const reducer1 = (initial_state =null, action )=>{
    if(action.type==="ACTION_TYPE")
    //do somethhing or add action.payload in iniitial state 
    //return new state always
    else(action.type=== "Action_Type2")
    {
        //do something with and return state
    }
    else
    return initial_state;
}

const reducer2 = (initial_state =null, action )=>{
    if(action.type==="ACTION_TYPE3")
    //do somethhing or add action.payload in iniitial state 
    //return new state always
    else(action.type=== "Action_Type4")
    {
        //do something with and return state
    }
    else
    return initial_state;
}

//Combining reducers so that they can be put into store

export default combineReducers({
    reducer1 : reducer1
    reducer2 : reducer2
})

