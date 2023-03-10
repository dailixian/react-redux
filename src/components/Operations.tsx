import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, divide, multiply, subtract } from "../redux/actionCreator";

function Operations() {
  const [num, setNum] = useState<number>(0);
  const dispatch = useDispatch();
  return (
    <>
      <div className="mb-3">
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={() => dispatch(add(num))}>
          Add
        </button>
        <button className="btn btn-primary" onClick={() => dispatch(subtract(num))}>
          Subtract
        </button>
        <button className="btn btn-primary" onClick={() => dispatch(multiply(num))}>
          Multiply
        </button>
        <button className="btn btn-primary" onClick={() => dispatch(divide(num))}>
          Divide
        </button>
      </div>
    </>
  );
}

export default Operations;
