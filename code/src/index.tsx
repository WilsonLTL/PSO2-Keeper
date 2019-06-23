import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import UserPanel from './containers/UserPanel'
import Home from './containers/Home';
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
                <Redirect to="/"/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();