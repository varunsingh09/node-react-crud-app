import axios from 'axios';
import * as path from '../data/apiPath';
import * as Api from '../data/LoginApi';

export function PostData(type, userData) {
    let BaseURL = 'http://127.0.0.1:2003/api/';

    return new Promise((resolve, reject) =>{
    
         
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}

export function GetData(type, userData) {
  let { username, password } = userData;
  let Url = `http://127.0.0.1:2003/api/users/${username}/${password}`;
  return axios.get(Url);

}