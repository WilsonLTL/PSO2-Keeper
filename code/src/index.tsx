import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './containers/Home';
import UserPanel from './containers/UserPanel'
import FormGroupPanel from './containers/FormGroupPanel'
import './index.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import rootReducer from './reducers'; 
import registerServiceWorker from './registerServiceWorker';

const rootStore = createStore(rootReducer);
console.log(rootStore.getState())
ReactDOM.render(
    <Provider store={ rootStore }>
        <Router>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/userPanel/:access_token/:userID" component={UserPanel} />
                <Route path="/formGroupPanel/:group_access_token/:userID" component={FormGroupPanel} />                
                <Redirect to="/"/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();