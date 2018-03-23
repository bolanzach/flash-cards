import {Link} from "react-router-dom";
import React from "react";

const nav = [
  { id: 'main', label: 'Home', path: '/' },
  { id: 'math', label: 'Math', path: '/math'},
  { id: 'vocab', label: 'Vocab', path: '/vocab' }
];

export class HeaderComponent extends React.Component {

  constructor () {
    super();
    this.state = {
      nav: nav
    };
  }

  render () {
    return (
      <div className={'header nav pure-g'}>
        <div className={'pure-u-sm-1'}>
          <div className={'content'}>
            <ul>
              {this.state.nav.map(navItem => (
                <li key={navItem.id}>
                  <Link to={navItem.path}>{navItem.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}