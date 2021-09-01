import React from "react";
import { Spinner } from "reactstrap";
import "./withSpinner.styles.scss";
const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return (
      <>
        {isLoading ? (
          <Spinner
            style={{ width: "6rem", height: "6rem" }}
            className="spinner"
          />{''}
        ) : (
          <WrappedComponent {...otherProps} />
        )}
      </>
    );
  };

export default WithSpinner;
