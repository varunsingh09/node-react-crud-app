import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';
import '../src/assets/css/bootstrap.css';
import '../src/assets/css/font-awesome.css';
import '../src/assets/css/custom.css';
import '../src/assets/css/css.css?family=Open+Sans';
import LeftNavigation from '../src/components/common/LeftNavigation';
import CommonContent from '../src/components/common/CommonContent';

const store = createStore(()=>[])


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
            <Router>
                <div>
                    <div id="wrapper">
                        <div className="navbar navbar-inverse navbar-fixed-top">
                            <div className="adjust-nav">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                          </div>

                            </div>
                        </div>

                        {/* Nav Top */}
                            <LeftNavigation/>
                        {/* Nav Side */} 

                        <div id="page-wrapper" >
                            <div id="page-inner">
                                        
                                    {/*ROW */}
                                
                                    <CommonContent/>
                                    {/*ROW */}   
                                
                                    <div className="row">
                                    <div className="col-lg-12 ">
                                    <br/>
                                        
                                    </div>
                                    </div>
                                {/*ROW */}
                            </div>

                            {/* Page Inner */}
                        </div>

                        {/* Page Wrapper */}
                    </div>
                        <div className="footer">
                            <div className="row">
                                <div className="col-lg-12" >
                                </div>
                            </div>
                        </div>
                </div>
            </Router>
        </Provider>
    </div>
    );
  }
}

export default App;
