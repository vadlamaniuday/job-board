import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <>
      <ClipLoader color="#36d7b7" loading={loading} cssOverride={override} />
    </>
  );
};

export default Spinner;
