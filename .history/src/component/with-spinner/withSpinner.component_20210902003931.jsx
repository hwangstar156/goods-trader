import React from "react";
import { Spinner } from "reactstrap";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return (
      <>
        {isLoading ? (
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        ) : (
          <WrappedComponent {...otherProps} />
        )}
      </>
    );
  };
