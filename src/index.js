import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter
} from "react-router-dom";
// import Blog from './Component/Blog_Redux';
// import DetailBlog from './Component/Blog_Redux/detail';
// import RootReducer from './Component/Redux/Blog/root-reducer';
import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './Redux-toolkit/root-reducer';
import AppRedux from './Redux-toolkit/app-redux';

// const store =  createStore(RootReducer)

// const Main = () => (
//   <Provider store={store}>
//     <AppRedux />
//   </Provider>
// )

// const store = createStore(RootReducer) Khởi tạo store mặc định

const store = configureStore({ reducer : RootReducer })

ReactDOM.render(
  <Provider store={store}>
  {/* <Router>
        <App>
        
            <Switch>
                    <Route exact path='/blog/list' component={Blog} ></Route>
                    <Route path='/blog/detail/:id' component={DetailBlog} ></Route>
                </Switch>
            
            
            </App>
    </Router> */}
    <AppRedux />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
