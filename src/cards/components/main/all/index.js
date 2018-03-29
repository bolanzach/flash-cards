import * as React from "react";

class AllCardsComponent extends React.Component {

  constructor (props) {
    super(props);
    console.log(props);
  }

  render () {
    return (
      <h1>All Cards</h1>
    );
  }
}

export default AllCardsComponent;