import React from "react";

export const AddButton = ({ text, onClick }) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        type="button"
        onClick={onClick}
        className="btn btn-outline-success col-10"
      >
        {" "}
        {text}{" "}
      </button>
    </div>
  );
};
