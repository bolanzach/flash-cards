import React from "react";
import {HomeCardComponent} from "./card/HomeCard.jsx";
import {SearchCardComponent} from "./card/SearchCard.jsx";

export class HomeComponent extends React.Component {

  render () {
    return (
      <div className={'pure-g'}>
        <div className={'pure-u-1'}>
          <HomeCardComponent title={'Welcome to the GRE Flash Cards app!'}/>
        </div>
        <div className={'pure-u-1 pure-u-sm-1-2'}>
          <HomeCardComponent title={'All Cards'} path={'/'}/>
        </div>
        <div className={'pure-u-1 pure-u-sm-1-2'}>
          <HomeCardComponent title={'Math Cards'} path={'math'}/>
        </div>
        <div className={'pure-u-1 pure-u-sm-1-2'}>
          <HomeCardComponent title={'Vocabulary Cards'} path={'vocab'}/>
        </div>
        <div className={'pure-u-1 pure-u-sm-1-2'}>
          <SearchCardComponent/>
        </div>
      </div>
    );
  }
}