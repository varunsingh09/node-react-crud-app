import * as Api from '../data/customerApi';
import * as ACTION from '../data/apiActions';

export const UserAdd = function(user)
{	//console.log('action add',user);
	let retData = {type:ACTION.ADD_USER, 
		AddResponse: new Promise((resolve,reject)=>{
			Api.addPost(user).then((response)=>{
				resolve(response);
				///console.log('action add response',response);
            })		
		})
	}
	//console.log('action add response',retData);
	return retData;
}

export const UserList = function()
{	//console.log('user list action ',ACTION.LIST_USER);
	let retData = {type:ACTION.LIST_USER, 
		UserDetails: new Promise((resolve,reject)=>{
			Api.getPost().then((response)=>{
                resolve(response.data);
            })		
		})
	}
	//console.log("user action data",retData);
	return retData;
}

export const UserDelete = function(id)
{	console.log('action delete ',id);
	let retData = {type:ACTION.DELETE_USER, 
		DeleteResponse: new Promise((resolve,reject)=>{
			Api.deletePost(id).then((response)=>{
                resolve(response.data);
            })		
		})
	}
	console.log('action response',retData);
	return retData;
}

export const UserUpdate = function(row,id)
{	//console.log('action update',row, id);
	let retData = {type:ACTION.UPDATE_USER, 
		UpdateResponse: new Promise((resolve,reject)=>{
			Api.updatePost(row,id).then((response)=>{
                resolve(response);
            })		
		})
	}
	console.log('action update response',retData);
	return retData;
}

export const UserLogin = function()
{	console.log('user login action ',ACTION.LOGIN_USER);
	let retData = {type:ACTION.LOGIN_USER, 
		LoginResponse: new Promise((resolve,reject)=>{
			Api.getPost().then((response)=>{
                resolve(response.data);
            })		
		})
	}
	//console.log("user action data",retData);
	return retData;
}