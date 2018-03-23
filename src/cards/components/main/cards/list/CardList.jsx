import React from "react";
import {CardComponent} from "../Card";

export class CardListComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  render () {
    return (
      (this.state.cards || []).map(card => (
        <CardComponent/>
      ))
    );
  }
}