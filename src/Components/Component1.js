//THIS prototype Component uses The Redux Store and connect function

//The required reducer will be passed as props in this component so that we can use centralized data

import React, { Component } from 'react';
import { connect } from "react-redux";
import { action_creater } from "../Actions"

class Component1 extends Component {
    render() {
        return (
            <div>
                {/* {console.log(this.props.Reducer1Data)} */}
            </div>
        )
    }
}

mapStateToProps(state)=>{ //this state will contain FULL redux store all the reducers data


//use your required reducer data in props i.e reducer1

return { Reducer1Data : state.reducer1}  //isse ye reducer1 wala data as a props ajaega is component me (combinereducer me jo key assign ki thi wo use karna)

}
export default connect(mapStateToProps,{ requiredAction: action_creater })(Component1)   //connect function is invoking its inner function

//connect k 2nd argument me action creators ka object pass karte hain 

//IMPORTANT NOTE

// action creator itself kuch nahi bas 1 function hai jo object return kar rha bas. 
// it will not automatically be send to all reducers unless we call dispatch function on it.
// connect function do that for us.