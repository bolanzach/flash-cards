import React from "react";
import {HashRouter} from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import combineReducers from "redux/src/combineReducers";

import './app.scss';
import {HeaderComponent} from "./cards/components/header/Header.jsx";
import {MainComponent} from "./cards/components/main/Main.jsx";
import {cardsReducer} from "./cards/reducer";
import {test} from "./cards/actions";


const store = createStore(
  cardsReducer
);

export class AppComponent extends React.Component {

  componentDidMount () {
    store.dispatch(test());
    console.log(store.getState());
  }

  render () {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <HeaderComponent/>
            <MainComponent/>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}
