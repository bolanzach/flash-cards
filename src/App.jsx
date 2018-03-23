import React from "react";
import {HashRouter} from "react-router-dom";
import {createStore} from 'redux';

import './app.scss';
import {HeaderComponent} from "./cards/components/header/Header.jsx";
import {MainComponent} from "./cards/components/main/Main.jsx";

// const store = createStore(
//   // combineReducers({pokemon})
// );

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
