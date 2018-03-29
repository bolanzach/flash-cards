import React from "react";
import {Link} from "react-router-dom";

export class HeaderComponent extends React.Component {

  render () {
    return (
      <div className={'header nav pure-g'}>
        <div className={'pure-u-sm-1'}>
          <div className={'content'}>
            <Link to={'/'}>Flash Cards</Link>
          </div>
        </div>
      </div>
    );
  }
}