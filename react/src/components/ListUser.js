import React , { Component } from 'react';
import { store } from '../store/UserStore';
import { UserList,UserDelete,UserUpdate,UserAdd} from '../actions/UserAction';


class ListUser extends Component{

    constructor(props){
        super(props);
        this.state={ClientList:[],user:{name:"",company:"",email:"",phone:"",address:"",age:""}};
        this.LoadData       = this.LoadData.bind(this);
        this.onDelete       = this.onDelete.bind(this);
        this.onEdit         = this.onEdit.bind(this);
        this.onUpdate       = this.onUpdate.bind(this);
        this.onSubmit       = this.onSubmit.bind(this);
        this.onUpdateData   = this.onUpdateData.bind(this);
        this.LoadData();
    }

    LoadData(){ 
        store.dispatch(UserList());
        let { UserReducer } = store.getState();
        let data= UserReducer;
        data.dataList.then(clientData=>{
            this.setState({ClientList:clientData});
        })  
       
    }
    onDelete(id){ console.log('controller delete',id);
        store.dispatch(UserDelete(id));
        let { UserReducer } = store.getState();
        let data= UserReducer;
        data.deleted.then(response=>{
            this.LoadData();
           })
    }
    onEdit(row,id){ 
        console.log('controller edit ',row,id);
        this.setState({user:row});
        this.setState({id:id});
        this.setState({ showButton: true });
        
    }
    onUpdate(e){
       
        let { name, value } = e.target;
        let { user } = this.state; 
        this.setState({user:{...user,[name]:value}});
       
    }
    onSubmit(e){
        this.setState({ showButton: false });
        let { user } = this.state;
        store.dispatch(UserAdd(user));
        let { UserReducer } = store.getState();
        let resp= UserReducer;
        resp.dataadd.then((response)=>{
            this.LoadData();
        })
        e.preventDefault(); 
    }
    onUpdateData(e){
        let { user } = this.state;
        let { id } = this.state;
        store.dispatch(UserUpdate(user,id));
        let { UserReducer } = store.getState();
        let resp= UserReducer;
        resp.updatedata.then((response)=>{
            this.LoadData();
        })
        e.preventDefault(); 
    }
    render(){
        return(
                <div>
                    <div className="row"> 
                    <div className="col-md-12"> 
                    <h3>User List</h3>
                    <div></div>
                        <div>
                            <table className='table table-striped'> 
                        <tbody>
                            <tr>
                                <td><b>Id</b></td>
                                <td> <b>Name</b></td>
                                <td><b>Company</b></td> 
                                <td><b>Email</b></td>
                                <td><b>Phone</b></td> 
                                <td><b>Address</b></td> 
                                <td><b>Age</b></td>   
                                <td><b>Action</b></td>
                            </tr>
                            
                        {this.state.ClientList.map((row,idx)=>{
                        
                                return <tr key={idx}>
                                <td>{row._id}</td>
                                <td>{row.name}</td>
                                <td>{row.company}</td>
                                <td>{row.email}</td>
                                <td>{row.phone}</td>
                                <td>{row.address}</td>
                                <td>{row.age}</td>
                                <td>
                                    <span onClick={()=>this.onEdit(row,row._id)} title='Edit'>Edit</span>
                                    &nbsp;|&nbsp;
                                    <span onClick={()=>this.onDelete(row._id)} title='Delete'>Delete</span>
                                </td>
                                
                                </tr>
                         
                            })}
                        
                        </tbody>
                        </table>
                        </div>
                    </div>
                    </div> 
                    <div className="row"> 
                        <div className="col-md-12"> 
                            <h3>Add User</h3>
                            <form onSubmit={this.onSubmit}>
                            <div>
                             <table className='table table-striped'> 
                            <tbody>
                                <tr>
                                    <td><b>Name</b></td>
                                    <td><input type="text" required  onChange={this.onUpdate} name="name" value={this.state.user.name}/></td>
                                </tr>
                                <tr>
                                    <td><b>Company</b></td>
                                    <td><input type="text" required onChange={this.onUpdate} name="company" value={this.state.user.company}/></td>
                                </tr>
                                <tr>
                                    <td><b>Email</b></td>
                                    <td><input type="email" onChange={this.onUpdate} name="email" value={this.state.user.email}/></td>
                                </tr>
                                <tr>
                                    <td><b>Phone</b></td>
                                    <td><input type="text" onChange={this.onUpdate} name="phone" value={this.state.user.phone}/></td>
                                </tr>
                                <tr>
                                    <td><b>Address</b></td>
                                    <td><input type="text" required onChange={this.onUpdate} name="address" value={this.state.user.address}/></td>
                                </tr>
                                <tr>
                                    <td><b>Age</b></td>
                                    <td><input type="number" onChange={this.onUpdate} name="age" value={this.state.user.age}/></td>
                                </tr>

                                <tr>
                                    {this.state.showButton ? 
                                        <td id="update"><input className="btn btn-primary" type="button"  value="Update" onClick={this.onUpdateData}/></td>
                                    :   <td id="submit"><input className="btn btn-primary" type="Submit"  onChange={this.onUpdate}  value="Save"/></td>
                                }
                                    
                                </tr>
                                </tbody>
                                </table>
                                
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}
export default ListUser;