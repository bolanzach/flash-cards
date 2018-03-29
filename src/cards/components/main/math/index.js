import React from "react";
import {loadMathCards} from "../../../actions";
import {connect} from "react-redux";

class MathComponent extends React.Component {

  constructor (props) {
    super(props);
    props.dispatch(loadMathCards());
  }

  render () {
    return (
      <h1>Math</h1>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

export default connect(mapStateToProps)(MathComponent);