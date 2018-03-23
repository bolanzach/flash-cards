import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomeComponent} from "./home/Home.jsx";
import {MathComponent} from "./math/Math.jsx";
import {VocabComponent} from "./vocab/Vocab.jsx";

export class MainComponent extends React.Component {

  render () {
    return (
      <div className={'main'}>
        <div className={'content'}>
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
            <Route path='/math' component={MathComponent}/>
            <Route path='/vocab' component={VocabComponent}/>
          </Switch>
        </div>
      </div>
    );
  }
}