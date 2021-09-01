import React from "react";
import { Spinner } from "reactstrap";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return (
      <>
        {isLoading ? (
          <Spinner style={{ width: "4rem", height: "4rem" }} />
        ) : (
          <WrappedComponent {...otherProps} />
        )}
      </>
    );
  };

export default WithSpinner;
