import React from "react";

const ButtonDefault = (props) => {
  return (
    <button type="submit" className="btn btn-primary font-semibold px-3 py-1.5 rounded-lg">
      {props.children}
    </button>
  );
};

const ButtonDisabled = (props) => {
  return (
    <button type="submit" disabled className="btn btn-danger font-semibold px-3 py-1.5 rounded-lg">
      {props.children}
    </button>
  );
};

export { ButtonDefault, ButtonDisabled };
