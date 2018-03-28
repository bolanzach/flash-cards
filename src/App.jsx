import React from "react";
import {HashRouter} from "react-router-dom";
import {createStore} from 'redux';
import combineReducers from "redux/src/combineReducers";

import './app.scss';
import {HeaderComponent} from "./cards/components/header/Header.jsx";
import {MainComponent} from "./cards/components/main/Main.jsx";
import cards from './cards/reducer.js';


const store = createStore(
  cards
);

export class AppComponent extends React.Component {

  componentDidMount () {
    //store.dispatch(getAllMathCards);
  }

  render () {
    return (
      <div>
        <HashRouter>
          <React.Fragment>
            <HeaderComponent/>
            <MainComponent/>
          </React.Fragment>
        </HashRouter>
      </div>
    );
  }
}
