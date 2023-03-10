import React from "react";
import { useSelector } from "react-redux";
import { RootStoreType } from "../redux/store";

const ShowState = () => {
  const { number, decrementCount, incrementCount } = useSelector(
    (store: RootStoreType) => store.counterReducer
  );
  return (
    <>
      <div className="container">
        <p className="lead">Number = {number}</p>
        <p className="lead">Increment count = {incrementCount}</p>
        <p className="lead">Decrement count = {decrementCount}</p>
      </div>
    </>
  );
};

export default ShowState;
