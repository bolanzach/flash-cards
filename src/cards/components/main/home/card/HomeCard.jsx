import React from 'react';
import {Link} from "react-router-dom";

import '../../cards/card.scss';

export class HomeCardComponent extends React.Component {

  cardContent () {
    const content = (
      <div className={'card-content'}>
        <h2 className={'title'}>
          {this.props.title}
          </h2>
      </div>
    );

    return this.props.path ? (<Link to={this.props.path}>{content}</Link>) : content;
  }

  render () {
    return (
      <div className={'home card'}>
        {this.cardContent()}
      </div>
    );
  }
}