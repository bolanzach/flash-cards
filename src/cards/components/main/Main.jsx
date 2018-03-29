import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomeComponent} from "./home/Home.jsx";
import {VocabComponent} from "./vocab/Vocab.jsx";
import MathComponent from "./math";
import AllCardsComponent from './all';

export class MainComponent extends React.Component {

  render () {
    return (
      <div className={'main'}>
        <div className={'content'}>
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
            <Route path='/math' component={MathComponent}/>
            <Route path='/vocab' component={VocabComponent}/>
            <Route path='/all' component={AllCardsComponent}/>
          </Switch>
        </div>
      </div>
    );
  }
}