import React, { Component } from "react";
import { connect } from "react-redux";
import { RootStoreType } from "../redux/store";

interface IHeaderProps {
  incCount: number;
  decCount: number;
}
export class Header extends Component<IHeaderProps> {
  render() {
    const { incCount, decCount } = this.props;
    return (
      <>
        <div className="alert alert-primary">
          <div className="container">
            <h1>React Redux Example</h1>
          </div>
          <div className="container">
            You performed increment ${incCount} times, You performed decrement $
            {decCount} times.
          </div>
        </div>
      </>
    );
  }
}

const mapState = (store: RootStoreType) => ({
  incCount: store.counterReducer.incrementCount,
  decCount: store.counterReducer.decrementCount,
});

export default connect(mapState)(Header);
