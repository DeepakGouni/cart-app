import React from "react";
import { useDispatch } from "react-redux";
import { closeModel } from "../features/modal/modelSlice";
import { clearItems } from "../features/cart/cartSlice";

const Model = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure you want to clear the cart</h4>
        <div className="btn-container">
          <button
            type="button"
            className="confirm-btn btn"
            onClick={() => {
              dispatch(clearItems());
              dispatch(closeModel());
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            className="clear-btn btn"
            onClick={() => dispatch(closeModel())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Model;
