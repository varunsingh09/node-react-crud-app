import React , { Component } from 'react';
import { Route } from 'react-router-dom';
import ListUser from '../ListUser';
class CommonContent extends Component{

 
    render(){
        return(
            <div> 
                <Route path="/ListUser" component={ListUser}/>
            </div>
        );
    }
}
export default CommonContent;