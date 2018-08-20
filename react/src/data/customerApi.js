import axios from 'axios';
import * as path from './apiPath';

export const addPost = function(row)
{   console.log('api shut add',row);
	let Url =  path.CUSTOMER;
    return axios({url:Url,method:'post',data:row});
}

export const getPost = function()
{
	let Url =  path.CUSTOMER;
    return axios.get(Url);
}

export const deletePost = function(id)
{   console.log('api shut delete',id);
	let Url =  path.CUSTOMER+id;
    return axios({url:Url,method:'delete'});
}

export const updatePost = function(row,id)
{   console.log('api shut update',id,"====",row);
	let Url =  path.CUSTOMER+id;
    return axios({url:Url,method:'put',data:row});
}
