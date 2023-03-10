import React, { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../redux/store";

interface IDisplayProps {
    counterNumber: number
}

export class Display extends Component<IDisplayProps> {
  render() {
    return (
      <>
        <div className="container">
          <p className="l">Value of number is ${this.props.counterNumber}.</p>
        </div>
      </>
    );
  }
}

const mapState = (store: IStore) => {
    console.log("inside display: store is", store);
    return {counterNumber: store.counterReducer.number }
};
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Display);
