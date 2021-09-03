import React from "react";

const WritePage = () => {
  const submitWrite = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
  };

  return (
    <div className="write-container">
      <form onSubmit={submitWrite}>
        <input type="file" />
      </form>
      <input type="text" />
    </div>
  );
};

export default WritePage;
